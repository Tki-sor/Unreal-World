// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    
})

ServerEvents.tags("item", event => {

})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.firstJoin == null || event.player.persistentData.firstJoin == false) {
        event.server.scheduleInTicks(5, () => {
            event.player.tell(`§e欢迎来到§b${event.server.name}§e服务器`)
            event.player.inventory.clear()
            event.player.persistentData.firstJoin = true
        })
    }
})