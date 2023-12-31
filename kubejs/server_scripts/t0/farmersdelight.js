// priority: 0

ServerEvents.recipes(event => {
    // 料理乐事盘子
    event.shaped('32x cuisinedelight:plate', [
        "A A",
        "AAA"
    ], {
        A: '#minecraft:wooden_slabs'
    })
})
