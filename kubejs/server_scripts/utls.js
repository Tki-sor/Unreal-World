// priority: 0

const colorList = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

function gtmUx(EUt) {
    switch (true) {
        case EUt < 0:
            return 'ERROR'
        case EUt <= 8:
            return 'ULV'
        case EUt <= 32:
            return 'LV'
        case EUt <= 128:
            return 'MV'
        case EUt <= 512:
            return 'HV'
        case EUt <= 2048:
            return 'EV'
        case EUt <= 8192:
            return 'IV'
        case EUt <= 32768:
            return 'LuV'
        case EUt <= 131072:
            return 'ZPM'
        case EUt <= 524288:
            return 'UV'
        case EUt <= 2097152:
            return 'UHV'
        case EUt <= 8388608:
            return 'UEV'
        case EUt <= 33554432:
            return 'UIV'
        case EUt <= 134217728:
            return 'UXV'
        case EUt <= 536870912:
            return 'OpV'
        default:
            return 'MAX'
    }
}

function ingotMod(material) {
    switch (true) {
        case material == 'iron':
            return 'minecraft'
        case material == 'gold':
            return 'minecraft'
        case material == 'copper':
            return 'minecraft'
        default:
            return 'gtceu'
    }
        
}