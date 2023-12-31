// priority: 0

ServerEvents.recipes(event => {
    // 不正确的合成
    const removeList = [
        {id: 'betternether:cincinnasite_ingot'},
        {id: 'betterend:thallasium_ingot_from_nuggets'},
        {id: 'betterend:thallasium_ingot_from_block'},
        {id: 'betterend:thallasium_ingot_furnace_raw_blasting'},
        {id: 'betternether:cincinnasite_ingot_from_shard_blasting'},
        {id: 'betternether:cincinnasite_ingot_from_ore_blasting'},
        {id: 'betterend:thallasium_ingot_furnace_raw_blasting'},
        {id: 'betterend:thallasium_ingot_from_nuggets'},
        {mod: 'betterend', output: 'minecraft:iron_ingot'},
        {mod: 'betternether', output: 'minecraft:iron_ingot'}
    ]
    removeList.forEach(remove => {
        event.remove(remove)
    })

    // 箱子
    event.forEachRecipe(
        {
            mod: "betternether"
        }, recipe => {
            if (recipe.getOriginalRecipeResult().getId().includes('chest')) {
                event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}` })
            }
        })
    event.forEachRecipe(
        {
            mod: "betterend"
        }, recipe => {
            if (recipe.getOriginalRecipeResult().getId().includes('chest')) {
                event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}` })
            }
        })
    
    // 工作台
    event.forEachRecipe(
        {
            mod: "betternether"
        }, recipe => {
            if (recipe.getOriginalRecipeResult().getId().includes('crafting_table')) {
                event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}` })
            }
        })
    event.forEachRecipe(
        {
            mod: "betterend"
        }, recipe => {
            if (recipe.getOriginalRecipeResult().getId().includes('crafting_table')) {
                event.remove({ output: `${recipe.getOriginalRecipeResult().getId()}` })
            }
        })
})