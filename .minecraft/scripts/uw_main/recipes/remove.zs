import scripts.grassUtils.RecipeUtils;
import scripts.modUtils.PtUtils;

RecipeUtils.removeAllRecipes([
    <pyrotech:bucket_clay_unfired>,
    <pyrotech:bucket_clay>,
    <exnihilocreatio:item_material:1>,
    <pyrotech:material:35>,
    <pyrotech:material:9>,
    <pyrotech:material:5>
]);

PtUtils.removeKiln(<pyrotech:material:5>);
