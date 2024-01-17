// priority: 0

ServerEvents.recipes(event => {
    // mek所有工厂
    let level = [
        "basic",
        "advanced",
        "elite",
        "ultimate"
    ]
    let type = [
        "sawing",
        "smelting",
        "enriching",
        "crushing",
        "compressing",
        "combining",
        "purifying",
        "injecting",
        "infusing"
    ]
    level.forEach(l => {
        type.forEach(t => {
            event.remove({ output: `mekanism:${l}_${t}_factory` })
        })
    })
})