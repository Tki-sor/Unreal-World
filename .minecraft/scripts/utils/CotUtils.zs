#loader contenttweaker
import crafttweaker.api.item.ItemGroup;
import crafttweaker.api.BracketHandlers;
import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.block.BlockBuilder;
import crafttweaker.api.tool.ToolType;
import crafttweaker.api.block.material.MCMaterial;
import crafttweaker.api.blocks.MCBlock;
import mods.contenttweaker.fluid.FluidBuilder;
import crafttweaker.api.fluid.MCFluid;


public function getItemTab() as ItemGroup {
    var tab = ItemGroup.create("contenttweaker", () => <item:minecraft:nether_star>);
    return tab;
}

public function getBlockTab() as ItemGroup {
    var tab = ItemGroup.create("contenttweaker", () => <item:minecraft:beacon>);
    return tab;
}


public function addNormalItem(name as string) as void {
    new ItemBuilder()
    .withItemGroup(getItemTab())
    .build(name);
}

public function addRareItem(name as string, isImmuneToFire as bool, maxStackSize as int) as void {
    if(isImmuneToFire == true) {
        new ItemBuilder()
        .isImmuneToFire()
        .withMaxStackSize(maxStackSize)
        .withItemGroup(getItemTab())
        .build(name);
    } else {
        new ItemBuilder()
        .isImmuneToFire()
        .withMaxStackSize(maxStackSize)
        .withItemGroup(getItemTab())
        .build(name);
    }
}

public function addBlock(name as string, blockMaterial as MCMaterial, RequiresTool as bool, hardness as float, resistance as float, lightValue as int, harvestTool as ToolType, toolLevel as int) as void {
    if(RequiresTool == true) {
        new BlockBuilder(blockMaterial)
        .setRequiresTool()
        .withHardnessAndResistance(hardness, resistance)
        .withLightValue(lightValue)
        .withHarvestTool(harvestTool)
        .withHarvestLevel(toolLevel)
        .withItemGroup(getBlockTab())
        .build(name);
    } else {
        new BlockBuilder(blockMaterial)
        .withHardnessAndResistance(hardness, resistance)
        .withLightValue(lightValue)
        .withHarvestTool(harvestTool)
        .withHarvestLevel(toolLevel)
        .withItemGroup(getBlockTab())
        .build(name);
    }
}

function addFluid(name as string, isMolten as bool, color as int, density as int, luminosity as int, temperature as int, viscosity as int) as void {
    new FluidBuilder(isMolten, color)
    .density(density)
    .luminosity(luminosity)
    .temperature(temperature)
    .viscosity(viscosity)
    .build(name);
}