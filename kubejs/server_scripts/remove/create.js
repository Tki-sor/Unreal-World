// priority: 0

ServerEvents.recipes(event => {
    // 轧机
    event.remove({ output: 'createaddition:rolling_mill' })
    event.remove({ type: 'createaddition:rolling' })
})