#priority 25750
#loader contenttweaker

import scripts.grassUtils.CotUtils;
import scripts.grassUtils.classes.MaterialSystemHelper.MaterialSystemHelper;

//partsArrays
var allPartsMap as string[][int] = {
    /*allPartsAsExample
    "nugget", "beam", "dirty_dust", "cluster", "ring",
    "rod", "crystal", "plate", "chipped_gem", "centrifuged_ore",
    "ore_rock", "casing", "missing", "dense_plate",
    "block", "shard", "molten", "flawless_gem", "dust",
    "crushed_ore", "ore", "small_dust", "long_rod", "small_spring",
    "clump", "flawed_gem", "large_spring", "purified_ore", "poor_ore",
    "minecart", "armor", "round", "ore_sample", "dense_ore",
    "bolt", "ingot", "tiny_dust", "gear"
    */
    0 : [//coloredOre
    "nugget", "dirty_dust", "ring", "rod",
    "crystal", "plate", "centrifuged_ore", "ore_rock",
    "casing", "missing", "dense_plate", "block",
    "shard", "molten", "dust", "crushed_ore",
    "ore", "small_dust", "long_rod", "small_spring",
    "clump", "large_spring", "purified_ore", "round",
    "bolt", "ingot", "tiny_dust", "gear"
    ],
    1 : [
    "nugget", "dirty_dust", "ring", "rod",
    "crystal", "plate", "centrifuged_ore", "ore_rock",
    "casing", "missing", "dense_plate", "shard",
    "molten", "dust","crushed_ore", "small_dust",
    "long_rod", "small_spring", "clump", "large_spring",
    "purified_ore", "round", "bolt", "tiny_dust", "gear"
    ]
};

//materialArrays
// REMEMBER TO UPDATE CRTLIB AFTER MAKING CHANGES TO THIS MAP!!!
static allMaterialMap as int[string][int] = {
    0 : {//coloredOre
    },
    1 : {
    }
};

function materialBuilder(name as string, partsList as string[], materialsList as int[string]){
    val register as MaterialSystemHelper = CotUtils.getMaterialSystemHelper(name);
    for parts in partsList{
        register.addPart(parts);
    }
    for mat in materialsList{
        register.registerMaterial(mat, materialsList[mat]);
    }
    register.registerAllMaterialParts();
}

for key, value in allPartsMap {
    materialBuilder(key, value, allMaterialMap[key]);
}
