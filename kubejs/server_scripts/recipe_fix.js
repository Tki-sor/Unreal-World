// priority: 0

ServerEvents.recipes(event => {
    // 原版工具换成gtm的
    {
        let toolList = [
            'sword',
            'pickaxe',
            'axe',
            'shovel',
            'hoe'
        ]
        let toolInputList = [
            'iron',
            'diamond'
        ]
        toolList.forEach(tool => {
            toolInputList.forEach(input => {
                event.replaceInput({}, `gtceu:${input}_${tool}`, `minecraft:${input}_${tool}`)
                event.replaceOutput({}, `gtceu:${input}_${tool}`, `minecraft:${input}_${tool}`)
            })
        })
    }

    // 粉合成
    {
        let craftingTableAlloyIdList = [
            { id: 'gtceu:shapeless/dust_bronze' },
            { id: 'thermal:bronze_dust_4' },
            { id: 'thermal:lumium_dust_4' },
            { id: 'thermal:signalum_dust_4' },
            { id: 'thermal:enderium_dust_2' }
        ]
        let createGtmMixingList = [
            ['3x gtceu:bronze_dust', ['3x gtceu:bronze_dust', 'gtceu:tin_dust'], 7, 2],
            ['2x gtceu:brass_dust', ['gtceu:bronze_dust', 'gtceu:zinc_dust'], 7, 2],
            ['4x gtceu:lumium_dust', ['gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:glowstone_dust'], 7, 2],
            ['4x gtceu:signalum_dust', ['gtceu:silver_dust', '3x gtceu:bronze_dust', '4x minecraft:redstone'], 7, 2],
            ['2x gtceu:enderium_dust', ['3x gtceu:lead_dust', '2x gtceu:ender_pearl_dust', 'gtceu:diamond_dust'], 30, 2]
        ]
        craftingTableAlloyIdList.forEach(id => {
            event.remove(id)
        })
        createGtmMixingList.forEach(mixing => {
            event.recipes.create.mixing(mixing[0], mixing[1])
            // 从id中获取物品名
            let item = Item.of(mixing[0]).id.split(':')[1]
            event.recipes.gtceu.mixer(`${gtmUx(mixing[3])}_${item}`)
                .itemInputs(mixing[1])
                .itemOutputs(mixing[0])
                .circuit(1)
                .duration(mixing[3] * 20)
                .EUt(mixing[2])
        })
    }


    // 车床 压模 杆
    {
        let rodList = [
            ['bronze', [16, 19], [90, 6.3]],
            ['brass', [16, 15.75], [90, 6.3]],
            ['steel', [16, 14], [90, 5.6]]
        ]
        rodList.forEach(rod => {
            let mod_name = ingotMod(rod[0])
            let input = `${mod_name}:${rod[0]}_ingot`
            let output1 = `gtceu:${rod[0]}_rod`
            let output2 = `2x gtceu:${rod[0]}_small_dust`
            event.recipes.gtceu.lathe(`${gtmUx(rod[1][0])}_${rod[0]}_rod`)
                .itemInputs(input)
                .itemOutputs(output1, output2)
                .duration(rod[1][1] * 20)
                .EUt(rod[1][0])
            event.recipes.gtceu.extruder(`${gtmUx(rod[2][0])}_${rod[0]}_rod`)
                .itemInputs(input)
                .notConsumable('gtceu:rod_extruder_mold')
                .itemOutputs(`2x ${output1}`)
                .duration(rod[2][1] * 20)
                .EUt(rod[2][0])
        })
    }


    // 钢板，青铜板, 锡板，红色合金板
    {
        let plankList = [
            'steel',
            'bronze',
            'tin',
            'red_alloy'
        ]
        plankList.forEach(plank => {
            event.recipes.create.pressing(`gtceu:${plank}_plate`, [`gtceu:${plank}_ingot`])
        })
    }



    // 橡胶
    {
        event.remove({ id: 'gtceu:extractor/extract_raw_rubber_dust' })
        event.remove({ id: 'gtceu:fluid_solidifier/solidify_raw_rubber_to_ingot' })
        event.recipes.gtceu.fluid_solidifier('solidify_raw_rubber_to_ingot')
            .inputFluids(Fluid.of('gtceu:rubber', 144))
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs('gtceu:raw_rubber_ingot')
            .duration(20)
            .EUt(7)
        event.recipes.gtceu.alloy_smelter('ulv_rubber_ingot')
            .itemInputs('3x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust')
            .itemOutputs('gtceu:rubber_ingot')
            .duration(10 * 20)
            .EUt(7)
    }


    // 钢板，青铜板, 锡板
    {
        let plateList = [
            // 材料名, [液体, 切割机液体耗量, 切割机耗时], 压模机耗时, 锻造锤耗时, 卷板机耗时
            ['steel', [
                ['gtceu:distilled_water', 39, 56],
                ['minecraft:water', 52, 56],
                ['gtceu:lubricant', 13, 28]
            ], 2.8, 2.8, 2.8],
            ['bronze', [
                ['gtceu:distilled_water', 53, 76],
                ['minecraft:water', 71, 76],
                ['gtceu:lubricant', 17, 38]
            ], 3.8, 3.8, 3.8],
            ['tin', [
                ['gtceu:distilled_water', 83, 118],
                ['minecraft:water', 110, 118],
                ['gtceu:lubricant', 27, 59]
            ], 5.9, 5.9, 5.9]
        ]
        plateList.forEach(plate => {
            let plateName = plate[0]
            let fluidList = plate[1]
            let extruderTime = plate[2]
            let forgeHammerTime = plate[3]
            let benderTime = plate[4]

            // 切割机
            fluidList.forEach(fluid => {
                event.recipes.gtceu.cutter(`lv_${plateName}_plate_${fluid[0].split(':')[1]}`)
                    .itemInputs(`gtceu:${plateName}_block`)
                    .itemOutputs(`9x gtceu:${plateName}_plate`)
                    .inputFluids(Fluid.of(fluid[0], fluid[1]))
                    .duration(fluid[2] * 20)
                    .EUt(30)
            })

            // 压模机
            event.recipes.gtceu.extruder(`mv_${plateName}_plate`)
                .itemInputs(`gtceu:${plateName}_ingot`)
                .notConsumable('gtceu:plate_extruder_mold')
                .itemOutputs(`gtceu:${plateName}_plate`)
                .duration(extruderTime * 20)
                .EUt(120)

            // 锻造锤
            event.recipes.gtceu.forge_hammer(`lv_${plateName}_plate`)
                .itemInputs(`3x gtceu:${plateName}_ingot`)
                .itemOutputs(`2x gtceu:${plateName}_plate`)
                .duration(forgeHammerTime * 20)
                .EUt(16)

            // 卷板机
            event.recipes.gtceu.bender(`lv_${plateName}_plate`)
                .itemInputs(`gtceu:${plateName}_ingot`)
                .circuit(1)
                .itemOutputs(`gtceu:${plateName}_plate`)
                .duration(benderTime * 20)
                .EUt(24)
        })

        event.recipes.gtceu.alloy_smelter('lv_steel_ingot')
            .itemInputs('2x gtceu:steel_ingot')
            .notConsumable('gtceu:plate_casting_mold')
            .itemOutputs('gtceu:steel_ingot')
            .duration(5.6 * 20)
            .EUt(30)

        // 铁板 压模机，锻造锤, 卷板机
        event.recipes.gtceu.extruder('lv_iron_plate')
            .itemInputs('minecraft:iron_ingot')
            .notConsumable('gtceu:plate_extruder_mold')
            .itemOutputs('gtceu:iron_plate')
            .duration(2.8 * 20)
            .EUt(120)
        event.recipes.gtceu.forge_hammer('lv_iron_plate')
            .itemInputs('3x minecraft:iron_ingot')
            .itemOutputs('2x gtceu:iron_plate')
            .duration(2.8 * 20)
            .EUt(16)
        event.recipes.gtceu.bender('lv_iron_plate')
            .itemInputs('minecraft:iron_ingot')
            .circuit(1)
            .itemOutputs('gtceu:iron_plate')
            .duration(2.8 * 20)
            .EUt(24)
    }


    // 不锈钢粉
    {
        event.recipes.gtceu.mixer('mv_stainless_steel_dust_1')
            .itemInputs('4x gtceu:iron_dust', '3x gtceu:invar_dust', 'gtceu:manganese_dust', 'gtceu:chromium_dust')
            .itemOutputs('9x gtceu:stainless_steel_dust')
            .circuit(1)
            .duration(45 * 20)
            .EUt(120)
        event.recipes.gtceu.mixer('mv_stainless_steel_dust_2')
            .itemInputs('6x gtceu:iron_dust', 'gtceu:nickel_dust', 'gtceu:manganese_dust', 'gtceu:chromium_dust')
            .itemOutputs('9x gtceu:stainless_steel_dust')
            .circuit(2)
            .duration(45 * 20)
            .EUt(120)
    }

})