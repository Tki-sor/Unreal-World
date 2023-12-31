// priority: 0

ServerEvents.recipes(event => {
    // 木台阶
    event.remove({ output: '#minecraft:wooden_slabs', type: 'minecraft:crafting_shaped' })

    // 纸
    event.remove({ id: 'mekanism:paper' })
    event.remove({ id: 'betternether:paper' })
    event.remove({ id: 'betterend:paper' })

    // 熔炉
    event.remove({ output: 'minecraft:furnace' })

    // 木棍
    event.remove({ id: 'enderio:stick' })

    // 地毯
    colorList.forEach(color => {
        event.remove({ id: `minecraft:${color}_carpet` })
    })

    // bclib
    event.remove({ mod: 'bclib' })

    // 活塞
    event.remove({ id: 'betternether:piston' })

    // 粘性活塞
    event.remove({ id: 'undergarden:sticky_piston_from_goo_ball' })

    // 木炭
    event.remove({ output: 'minecraft:charcoal', type: 'minecraft:smelting' })
    event.remove({ output: 'minecraft:charcoal', type: 'minecraft:blasting' })

    // 玻璃
    event.remove({ output: 'minecraft:glass', type: 'minecraft:smelting' })
})