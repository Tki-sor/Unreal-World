// priority: 0

ServerEvents.recipes(event => {
    // 粘土桶
    event.remove({ output: 'ceramicbucket:unfired_clay_bucket' })
    event.shaped('ceramicbucket:unfired_clay_bucket', [
        'A A',
        'AAA'
    ], {
        A: '#forge:dusts/clay'
    })

    // 巨型箱子
    let chestMeterialList = [
        'wood',
        'copper',
        'iron',
        'silver',
        'gold'
    ]
    chestMeterialList.forEach(meterial => {
        let a = ''
        let b = ''
        if (meterial !== 'wood') {
            a = `#forge:double_plates/${meterial}`
            b = `#forge:screws/${meterial}`
        } else {
            a = '#forge:treated_wood'
            b = '#forge:plates/treated_wood'
        }
        if (meterial === 'copper') {
            b = '#forge:screws/bronze'
        }
        event.remove({ output: `colossalchests:chest_wall_${meterial}` })
        event.shaped(`colossalchests:chest_wall_${meterial}`, [
            'BAB',
            'ACA',
            'DAE'
        ], {
            A: a,
            B: b,
            C: '#minecraft:logs',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        })
    })

})