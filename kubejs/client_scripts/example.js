// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

REIEvents.hide('item', event => {
    event.hide('createaddition:rolling_mill')
    event.hide('create:propeller')
    event.hide('create:dough')
})