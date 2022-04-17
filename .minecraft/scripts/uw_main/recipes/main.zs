import scripts.grassUtils.RecipeUtils;
import scripts.modUtils.PtUtils;
import mods.pyrotech.StoneKiln;
import mods.pyrotech.BrickKiln;
import mods.pyrotech.PitKiln;
import mods.foundry.CastingTable;
import mods.foundry.Casting;
import mods.foundry.Melting;

#粘土桶
PtUtils.removeKiln(<pyrotech:bucket_clay>);
PtUtils.addAdvKiln(
    <ceramics:clay_bucket>,
    <ceramics:unfired_clay>,
    8400, 0.08, 0.02,
    [<pyrotech:material:6>, <pyrotech:material:7>, <pyrotech:material>]
);
RecipeUtils.recipeTweak(true, <ceramics:unfired_clay>, [
    [<ore:clayPorcelain>, null, <ore:clayPorcelain>],
    [null, <ore:clayPorcelain>, null]
]);

#晾干架
RecipeUtils.recipeTweak(true, <pyrotech:drying_rack:1>, [
    [<pyrotech:drying_rack>, <pyrotech:drying_rack>, <pyrotech:drying_rack>],
    [<ore:fenceWood>, <ore:stickWood>, <ore:fenceWood>],
    [<ore:fenceWood>, <ore:stickWood>, <ore:fenceWood>]
]);

#玻璃
Melting.removeRecipe(<minecraft:sand>);
Melting.removeRecipe(<minecraft:glass>);
Melting.removeRecipe(<minecraft:glass_pane>);
Melting.addRecipe(<liquid:glass>*144, <ore:dustGlass>, 1550, 100);
CastingTable.removeBlockRecipe(<liquid:glass>);
CastingTable.addBlockRecipe(<minecraft:glass>, <liquid:glass>*144);
Casting.removeRecipe(<liquid:glass>, <foundry:mold:4>, null);
Casting.addRecipe(<minecraft:glass>, <liquid:glass>*144, <foundry:mold:4>, null, 100);

#耐火砖相关
recipes.removeByRecipeName("pyrotech:refractory_clay_ball_from_refractory_clay_lump");
recipes.addShaped(<gregtech:meta_item_1:351>*2, [
    [<pyrotech:material:4>,<pyrotech:material:4>]
]);
PtUtils.addAdvKiln(
    <gregtech:meta_item_1:352>,
    <gregtech:meta_item_1:351>,
    8400, 0.05, 0.01,
    [<pyrotech:material:6>, <pyrotech:material:7>, <pyrotech:material>]
);

#耐火龙头
RecipeUtils.recipeTweak(true, <pyrotech:faucet_brick>, [
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>],
    [<ore:dustSmallFireclay>, <gregtech:meta_item_1:352>, <ore:dustSmallFireclay>]
]);

#耐火排液口
RecipeUtils.recipeTweak(true, <pyrotech:tar_drain:1>, [
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>]
]);

#耐火收集器
RecipeUtils.recipeTweak(true, <pyrotech:tar_collector:1>, [
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, null, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>]
]);

#耐火缸
RecipeUtils.recipeTweak(true, <pyrotech:brick_tank>, [
    [<gregtech:meta_item_1:352>, <pyrotech:refractory_glass>, <gregtech:meta_item_1:352>],
    [<pyrotech:refractory_glass>, null, <pyrotech:refractory_glass>],
    [<gregtech:meta_item_1:352>, <pyrotech:refractory_glass>, <gregtech:meta_item_1:352>]
]);
recipes.addShapeless(<pyrotech:brick_tank>, [
    <pyrotech:brick_tank>
]);

#耐火玻璃
RecipeUtils.recipeTweak(true, <pyrotech:refractory_glass>, [
    [null, <gregtech:meta_item_1:352>, null],
    [<gregtech:meta_item_1:352>, <ore:blockGlass>, <gregtech:meta_item_1:352>],
    [null, <gregtech:meta_item_1:352>, null]
]);

#耐火门
RecipeUtils.recipeTweak(true, <pyrotech:refractory_door>, [
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>]
]);

#耐火砖块
RecipeUtils.recipeTweak(true, <pyrotech:refractory_brick_block>, [
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>],
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>]
]);
RecipeUtils.recipeTweak(true, <gregtech:metal_casing:1>, [
    [null, <gregtech:meta_item_1:352>, null],
    [<gregtech:meta_item_1:352>, <gregtech:meta_dust:2525>, <gregtech:meta_item_1:352>],
    [null, <gregtech:meta_item_1:352>, null]
]);

#耐火砖点火器
RecipeUtils.recipeTweak(true, <pyrotech:igniter:1>, [
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>],
    [<minecraft:redstone>, <minecraft:redstone_block>, <minecraft:iron_bars>],
    [<gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>, <gregtech:meta_item_1:352>]
]);