// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    
})

ServerEvents.tags("item", event => {

})

let upd8rApi = Java.loadClass('com.tkisor.uwtweaker.upd8r.Api')

PlayerEvents.loggedIn(event => {
    let latestVersion = upd8rApi.getLatestVersion()
    let currentVersion = upd8rApi.getCurrentVersion()
})