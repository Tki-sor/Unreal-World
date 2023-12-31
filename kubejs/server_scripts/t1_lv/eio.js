// priority: 0

ServerEvents.recipes(event => {
    // eio导管粘合剂
    event.recipes.gtceu.chemical_bath('ulv_conduit_binder')
        .itemInputs('enderio:conduit_binder_composite')
        .inputFluids(Fluid.of('gtceu:rubber', 144))
        .itemOutputs('2x enderio:conduit_binder')
        .duration(8 * 20)
        .EUt(5)

})