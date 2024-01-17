// priority: 0

ServerEvents.recipes(event => {
    // 床
    colorList.forEach(color => {
        event.remove({ output: `minecraft:${color}_bed` })
    })
    colorList.forEach(color => {
        event.shaped(Item.of(`minecraft:${color}_bed`, 1), [
            "AAA",
            "BBB",
            "CDC"
        ], {
            A: `minecraft:${color}_carpet`,
            B: '#minecraft:wooden_slabs',
            C: '#minecraft:wooden_fences',
            D: '#forge:tools/mallets'
        })
    })

    // 箱子
    event.replaceInput({ output: 'minecraft:chest' }, '#minecraft:planks', '#forge:treated_wood')

    // 木板
    event.forEachRecipe(
        {
            output: "#minecraft:planks",
            type: "create:cutting",
            input: "#minecraft:logs"
        }, recipe => {
            if (recipe.getOriginalRecipeIngredients().length > 1) return
            event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}`, type: "create:cutting", input: `${recipe.getOriginalRecipeIngredients()[0].getFirst().getItem().getId()}` })
            event.recipes.create.cutting([Item.of(`${recipe.getOriginalRecipeResult().getId()}`, 3)],
                recipe.getOriginalRecipeIngredients())
        })
    let plankCount = 1
    Ingredient.of('#minecraft:planks').itemIds.forEach(id => {
        // 提取出木头的种类
        const woodType = id.split(':')[1].split('_planks')[0]
        // 提取出是哪个mod的
        const mod = id.split(':')[0]
        const log = `${mod}:${woodType}_log`

        if (Ingredient.of('#minecraft:logs').test(log)) {
            event.recipes.gtceu.cutter(`ulv_${woodType}_planks_water_${plankCount}`)
                .itemInputs(log)
                .inputFluids(Fluid.of('minecraft:water', 5))
                .itemOutputs(`4x ${id}`, '2x gtceu:wood_dust')
                .duration(20 * 20)
                .EUt(7)
            event.recipes.gtceu.cutter(`ulv_${woodType}_planks_distilled_water_${plankCount}`)
                .itemInputs(log)
                .inputFluids(Fluid.of('gtceu:distilled_water', 3))
                .itemOutputs(`4x ${id}`, '2x gtceu:wood_dust')
                .duration(20 * 20)
                .EUt(7)
            event.recipes.gtceu.cutter(`ulv_${woodType}_planks_lubricant_${plankCount}`)
                .itemInputs(log)
                .inputFluids(Fluid.of('gtceu:lubricant', 1))
                .itemOutputs(`6x ${id}`, 'gtceu:wood_dust')
                .duration(10 * 20)
                .EUt(7)
        }
        plankCount++
    })

    // 木台阶
    let slabCount = 1
    Ingredient.of('#minecraft:wooden_slabs').itemIds.forEach(id => {
        // 提取出木头的种类
        const woodType = id.split(':')[1].split('_slab')[0]
        // 提取出是哪个mod的
        const mod = id.split(':')[0]
        event.recipes.create.cutting([Item.of(id, 2)], [`${mod}:${woodType}_planks`])

        if (Ingredient.of('#minecraft:planks').test(`${mod}:${woodType}_planks`)) {
            event.shaped(Item.of(id, 2), [[`${mod}:${woodType}_planks`], ['#forge:tools/saws']])
            event.recipes.gtceu.cutter(`ulv_${woodType}_slabs_water_${slabCount}`)
                .itemInputs(`${mod}:${woodType}_planks`)
                .inputFluids(Fluid.of('minecraft:water', 4))
                .itemOutputs(`2x ${id}`)
                .duration(2.5 * 20)
                .EUt(4)
            event.recipes.gtceu.cutter(`ulv_${woodType}_slabs_distilled_water_${slabCount}`)
                .itemInputs(`${mod}:${woodType}_planks`)
                .inputFluids(Fluid.of('gtceu:distilled_water', 3))
                .itemOutputs(`2x ${id}`)
                .duration(2.5 * 20)
                .EUt(4)
            event.recipes.gtceu.cutter(`ulv_${woodType}_slabs_lubricant_${slabCount}`)
                .itemInputs(`${mod}:${woodType}_planks`)
                .inputFluids(Fluid.of('gtceu:lubricant', 1))
                .itemOutputs(`2x ${id}`)
                .duration(1.25 * 20)
                .EUt(4)
        }
        slabCount++
    })

    // 熔炉
    event.shaped(Item.of('minecraft:furnace', 1), [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: '#forge:cobblestone',
        B: '#forge:gems/flint',
        C: '#forge:gears/stone'
    })

    // 地毯
    colorList.forEach(color => {
        event.shaped(Item.of(`minecraft:${color}_carpet`, 1), [
            "AA"
        ], {
            A: `minecraft:${color}_wool`
        })

        event.shaped(Item.of(`minecraft:${color}_carpet`, 3), [
            "AAB"
        ], {
            A: `minecraft:${color}_wool`,
            B: '#forge:tools/saws'
        })
    })

    // 染料
    colorList.forEach(color => {
        // 输出color对应的染料，输入color+1对应的染料
        if (colorList.indexOf(color) == colorList.length - 1) {
            event.recipes.botania.mana_infusion(`minecraft:${color}_dye`, `minecraft:${colorList[0]}_dye`, 200)
        } else {
            event.recipes.botania.mana_infusion(`minecraft:${color}_dye`, `minecraft:${colorList[colorList.indexOf(color) + 1]}_dye`, 200)
        }
    })

    // 铁 锡 修复bug
    const bugIngot = [
        'iron',
        'tin'
    ]
    event.recipes.gtceu.extruder(`mv_iron_rod`)
        .itemInputs(`minecraft:iron_ingot`)
        .notConsumable('gtceu:rod_extruder_mold')
        .itemOutputs(`2x gtceu:iron_rod`)
        .duration(5 * 20)
        .EUt(42)
    event.recipes.gtceu.lathe(`lv_iron_rod`)
        .itemInputs(`minecraft:iron_ingot`)
        .itemOutputs(`gtceu:iron_rod`, `gtceu:iron_small_dust`)
        .duration(14 * 20)
        .EUt(16)
    event.recipes.gtceu.extruder(`mv_tin_rod`)
        .itemInputs(`gtceu:tin_ingot`)
        // 不消耗模具
        .notConsumable('gtceu:rod_extruder_mold')
        .itemOutputs(`2x gtceu:tin_rod`)
        .duration(5 * 20)
        .EUt(42)
    event.recipes.gtceu.lathe(`lv_tin_rod`)
        .itemInputs(`gtceu:tin_ingot`)
        .itemOutputs(`gtceu:tin_rod`, `gtceu:tin_small_dust`)
        .duration(14 * 20)
        .EUt(16)
    const bugBlock = [
        ['minecraft:iron_block', 'minecraft:iron_ingot'],
        ['gtceu:tin_block', 'gtceu:tin_ingot']
    ]
    bugBlock.forEach(item => {
        event.recipes.gtceu.alloy_smelter(`lv_${item[0].split(':')[1]}`)
            .itemInputs(`9x ${item[1]}`)
            .notConsumable('gtceu:block_casting_mold')
            .itemOutputs(item[0])
            .duration(5)
            .EUt(28)
        event.recipes.gtceu.compressor(`lv_${item[0].split(':')[1]}`)
            .itemInputs(`9x ${item[1]}`)
            .itemOutputs(item[0])
            .duration(10)
            .EUt(56)
        event.recipes.gtceu.extruder(`lv_${item[0].split(':')[1]}`)
            .itemInputs(`9x ${item[1]}`)
            .notConsumable('gtceu:block_extruder_mold')
            .itemOutputs(item[0])
            .duration(10)
            .EUt(56)
    })

})