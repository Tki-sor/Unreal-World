// priority: 0

ServerEvents.recipes(event => {
    // create扇叶 -> gt铁转子
    event.remove({ output: 'create:propeller' })
    event.replaceInput({ input: 'create:propeller' }, 'create:propeller', '#forge:rotors/iron')

    // create面团 -> 农夫乐事面团
    event.replaceOutput({ output: 'create:dough' }, 'create:dough', 'farmersdelight:wheat_dough')
    event.replaceInput({ input: 'create:dough' }, 'create:dough', '#forge:dough/wheat')
})