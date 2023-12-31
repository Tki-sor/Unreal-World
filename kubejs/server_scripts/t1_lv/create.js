// priority: 0

ServerEvents.recipes(event => {
    // 大齿轮
    event.remove({ output: 'create:large_cogwheel' })
    event.recipes.gtceu.assembler('lv_large_cogwheel')
        .itemInputs('create:shaft', '4x #minecraft:planks', '#forge:rings', '4x #forge:screws')
        .inputFluids(Fluid.of('gtceu:lubricant', 10))
        .itemOutputs('create:large_cogwheel')
        .duration(15 * 20)
        .EUt(30)

    // 大型水车
    event.remove({ output: 'create:large_water_wheel' })
    event.recipes.gtceu.assembler('lv_large_water_wheel')
        .itemInputs('create:shaft', '8x #minecraft:planks', '2x #forge:rings/steel', '8x #forge:screws/steel')
        .itemOutputs('create:large_water_wheel')
        .duration(18 * 20)
        .EUt(30)
})