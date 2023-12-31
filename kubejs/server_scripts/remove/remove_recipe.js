// priority: 0

ServerEvents.recipes(event => {
    // 盘子
    event.remove({ output: 'cuisinedelight:plate' })

    // 齿轮
    let gearid = [
        'gtceu:shaped/gear_wood',
        'enderio:wood_gear_corner',
        'enderio:stone_gear_upgrade',
        'enderio:iron_gear',
        'gtceu:shaped/gear_stone',
        'industrialforegoing:diamond_gear',
        'industrialforegoing:iron_gear'
    ]
    gearid.forEach(id => {
        event.remove({ id: id })
    })

})