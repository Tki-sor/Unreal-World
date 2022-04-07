#loader contenttweaker
#priority 27350

/*
Author:Tki_sor
Version:1.1.0
*/

import scripts.grassUtils.CotUtils;
import mods.contenttweaker.BlockMaterial;
import mods.contenttweaker.SoundType;

static i18nCot as int = 0;

function i18nAddNormalItem(name as string,langus as string,langcn as string) {
CotUtils.addNormalItem(name);
var ite = ("item.contenttweaker.") as string;
var i18n1 = (ite + name) as string;
var na = (".name") as string;
var key = (i18n1 + na);
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}

function i18nAddRareItem(name as string,glowing as bool,rarityLevel as int,langus as string,langcn as string) {
CotUtils.addRareItem(name,glowing,rarityLevel);
var ite = ("item.contenttweaker.") as string;
var i18n1 = (ite + name) as string;
var na = (".name") as string;
var key = (i18n1 + na);
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}

/*
function i18nToolBuild(name as string,toolClass as string,maxDamage as int,toolLevel as int,glowing as bool,langus as string,langcn as string) {
cotUtils.ToolBuilder(name,toolClass,maxDamage,toolLevel,glowing);
var ite = ("item.contenttweaker.") as string;
var i18n1 = (ite + name) as string;
var na = (".name") as string;
var key = (i18n1 + na);
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}
*/

function i18nAddBlock(name as string,blockMaterial as BlockMaterial,hardness as float,resistance as float,blockSoundType as SoundType,lightValue as int,gravity as bool,toolClass as string,toolLevel as int,langus as string,langcn as string) {
CotUtils.addBlock(name,blockMaterial,hardness,resistance,blockSoundType,lightValue,gravity,toolClass,toolLevel);
var ite = ("tile.contenttweaker.") as string;
var i18n1 = (ite + name) as string;
var na = (".name") as string;
var key = (i18n1 + na);
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}

function i18nAddFluid(name as string,color as string,temperature as int,viscosity as int,density as int,luminosity as int,isLava as bool,langus as string,langcn as string){
CotUtils.addFluid(name,color,temperature,viscosity,density,luminosity,isLava);
var ite = ("item.contenttweaker.") as string;
var flu = ("fluid.") as string;
var i18n1 = (flu + name) as string;
var i18n2 = (ite + name) as string;
var na = (".name") as string;
var key = (i18n2 + na);
game.setLocalization("en_us",i18n1,langus);
game.setLocalization("zh_cn",i18n1,langcn);
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}

