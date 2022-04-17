#modloaded pyrotech
#priority 23001
import mods.pyrotech.StoneKiln;
import mods.pyrotech.BrickKiln;
import mods.pyrotech.PitKiln;
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

static addAdvKilnAmount as int = 0;

function removeKiln(output as IItemStack) {
    StoneKiln.removeRecipes(output);
    BrickKiln.removeRecipes(output);
    PitKiln.removeRecipes(output);
}

function addAdvKiln (output as IItemStack, input as IIngredient, burnTimeTicks as int, failureChance1 as float, failureChance2 as float, failureItems as IItemStack[]) as int {
    var recipeNameAdvKiln2 = ("advKiln" ~ addAdvKilnAmount ~ "_2") as string;
    var recipeNameAdvKiln3 = ("advKiln" ~ addAdvKilnAmount ~ "_3") as string;
    StoneKiln.addRecipe(
    recipeNameAdvKiln2,
    output,
    input,
    burnTimeTicks, failureChance1,
    failureItems
);
    BrickKiln.addRecipe(
    recipeNameAdvKiln3,
    output,
    input,
    burnTimeTicks, failureChance2,
    failureItems
);
    addAdvKilnAmount += 1;
    return addAdvKilnAmount;
}