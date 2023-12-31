// priority: 0

ServerEvents.recipes(event => {
    // 传动杆
    event.remove({ output: 'create:shaft' })
    event.shaped(Item.of('create:shaft', 4), [
        "A",
        "B",
        "B"
    ], {
        A: '#forge:tools/saws',
        B: 'create:andesite_alloy'
    })
    event.recipes.create.cutting(['2x create:shaft'], ['create:andesite_alloy'])

    // 齿轮
    event.remove({ output: 'create:cogwheel' })
    event.shaped('create:cogwheel', [
        "A",
        "B",
        "C"
    ], {
        A: '#forge:tools/hammers',
        B: 'create:shaft',
        C: '#forge:gears/wood'
    })

    // 传送带
    event.remove({ output: 'create:belt_connector' })
    event.shaped('create:belt_connector', [
        "AAA",
        "AAA"
    ], {
        A: '#forge:foils/rubber'
    })
    event.shaped('create:belt_connector', [
        "ABA"
    ], {
        A: '#forge:plates/rubber',
        B: 'botania:manaweave_cloth'
    })
    event.shaped('create:belt_connector', [
        "AAA",
        "AAA"
    ], {
        A: '#forge:plates/rubber'
    })
    event.recipes.create.mixing('create:belt_connector', '9x gtceu:sticky_resin').heated()

    // 水车
    event.remove({ output: 'create:water_wheel' })
    event.shaped('create:water_wheel', [
        "DAE",
        "CBC",
        "FCF"
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: '#minecraft:planks',
        D: '#forge:tools/hammers',
        E: '#forge:tools/saws',
        F: '#forge:rings/iron'
    })

    // 动力辊压机
    event.remove({ output: 'create:mechanical_press' })
    event.shaped('create:mechanical_press', [
        ['#forge:tools/hammers', 'create:shaft', '#forge:tools/wrenches'],
        ['#forge:gears/iron', 'create:andesite_casing', '#forge:springs/iron'],
        ['#forge:tools/wire_cutters', '#forge:storage_blocks/iron', '#forge:tools/files']
    ])

    // 动力搅拌器
    event.remove({ output: 'create:mechanical_mixer' })
    event.shaped('create:mechanical_mixer', [
        ['#forge:tools/hammers', 'create:cogwheel', '#forge:tools/wrenches'],
        ['#forge:gears/iron', 'create:andesite_casing', '#forge:springs/iron'],
        ['#forge:tools/wire_cutters', 'create:whisk', '#forge:tools/files']
    ])

    // 搅拌器
    event.remove({ output: 'create:whisk' })
    event.shaped('create:whisk', [
        " A ",
        "CBC",
        "CCC"
    ], {
        A: '#forge:tools/hammers',
        B: 'create:shaft',
        C: '#forge:plates/iron'
    })

    // 溜槽
    event.remove({ output: 'create:chute' })
    event.shaped('create:chute', [
        "ABA",
        "A A"
    ], {
        A: '#forge:plates/iron',
        B: '#forge:tools/hammers'
    })

    // 工作盆
    event.remove({ id: 'create:crafting/kinetics/basin' })
    event.shaped('create:basin', [
        "ABA",
        "AAA"
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:tools/hammers'
    })
})