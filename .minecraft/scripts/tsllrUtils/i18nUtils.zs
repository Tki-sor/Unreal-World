#priority 28700

/*
Author:Tki_sor
Version:1.0.0
*/

static i18n as int = 0;

function i18nTweak(key as string, langus as string, langcn as string) {
game.setLocalization("en_us",key,langus);
game.setLocalization("zh_cn",key,langcn);
}

