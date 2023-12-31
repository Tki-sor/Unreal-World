// priority: 0

ServerEvents.recipes(event => {
    // 青铜粉
    event.remove({id: 'gtceu:shapeless/dust_bronze'})
    event.recipes.create.mixing('3x gtceu:bronze_dust', ['3x #forge:dusts/copper', '#forge:dusts/tin'])

    // 钢板，青铜板, 锡板，红色合金板
    let plankList = [
        'steel',
        'bronze',
        'tin',
        'red_alloy'
    ]
    plankList.forEach(plank => {
        event.recipes.create.pressing(`gtceu:${plank}_plate`, [`gtceu:${plank}_ingot`])
    })
})