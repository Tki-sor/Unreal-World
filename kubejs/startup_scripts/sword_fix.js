// priority: 0

function awa(num) {
    let number = Math.round(num) - 5
    let ad = 7
    if (number == 0) {
        return ad
    } else if (number < 0) {
        return num
    } else {
        let a = 0
        for (let i = 0; i < number; i++) {
            let add = 2 + (Math.floor(a / 2) / 4)
            ad += add
            a+=1
        }
        return ad
    }
}

ItemEvents.modification(event => {
    let map = new Map([
        ['minecraft:wooden_sword', 4],
        ['minecraft:golden_sword', 4],
        ['minecraft:stone_sword', 5],
        ['minecraft:iron_sword', 6],
        ['minecraft:diamond_sword', 11],
        ['minecraft:netherite_sword', 15],
        ['minecraft:trident', 9],

        ['gtceu:aluminium_sword', 11.5],
        ['gtceu:titanium_sword', 10],
        ['gtceu:neutronium_sword', 104],
        ['gtceu:duranium_sword', 16],
        ['gtceu:bronze_sword', 6],
        ['gtceu:invar_sword', 7],
        ['gtceu:sterling_silver_sword', 12],
        ['gtceu:rose_gold_sword', 6],
        ['gtceu:stainless_steel_sword', 9],
        ['gtceu:steel_sword', 7],
        ['gtceu:ultimet_sword', 11],
        ['gtceu:wrought_iron_sword', 6],
        ['gtceu:tungsten_carbide_sword', 6],
        ['gtceu:damascus_steel_sword', 8],
        ['gtceu:tungsten_steel_sword', 11],
        ['gtceu:cobalt_brass_sword', 6],
        ['gtceu:vanadium_steel_sword', 7],
        ['gtceu:naquadah_alloy_sword', 16],
        ['gtceu:red_steel_sword', 10],
        ['gtceu:blue_steel_sword', 10],
        ['gtceu:hsse_sword', 14],
        ['gtceu:bisalloy_400_swrod', 6.25],

        ['cataclysm:athame', 5],
        // ['cataclysm:the_incinerator', 14]
    ])
    map.forEach((value, key) => {
        event.modify(key, item => {
            item.setAttackDamage(awa(value))
        })
    })

})