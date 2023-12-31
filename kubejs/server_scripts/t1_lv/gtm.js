// priority: 0

ServerEvents.recipes(event => {
    // 橡胶
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

    // 钢板，青铜板, 锡板
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
})