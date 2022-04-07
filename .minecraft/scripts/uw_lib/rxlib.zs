#priority 25000

/*
Author:Tki_sor
Version:1.2.1
*/

import crafttweaker.world.IWorld;
import crafttweaker.player.IPlayer;
import crafttweaker.event.CommandEvent;
import crafttweaker.events.IEventManager;
import crafttweaker.event.PlayerTickEvent;
import crafttweaker.command.ICommandSender;
import scripts.tsllrUtils.TsllrUtils.isInvalid;
import crafttweaker.event.PlayerLoggedInEvent;
import crafttweaker.event.PlayerLoggedOutEvent;
import crafttweaker.command.ICommand;

if(isInvalid == false) {
events.onPlayerLoggedIn(function(event as PlayerLoggedInEvent){
    var player as IPlayer = event.player;
    if(player.hasGameStage("creative")){
    return;
    }
    if(player.creative  || player.name == "Thinking_source" || player.name == "MuYan"){
player.addGameStage("creative");
    }
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "gamemode" && (event.parameters in "1" || event.parameters in "creative")) {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "give") {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "summon") {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "setblock") {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "fill") {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(player.hasGameStage("creative") || player.name == "Thinking_source" || player.name == "MuYan"){
            return ;
        }
   if (!event.commandSender.world.remote && event.command.name == "gamestage") {
       event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
   }}
});

} else {
events.onCommand(function(event as CommandEvent){
    if(event.commandSender instanceof IPlayer){
        var player as IPlayer = event.commandSender;
        if(!event.commandSender.world.remote){
            event.cancel();
       player.sendMessage(game.localize("uw.sxe_command.text"));
    }}
});
events.onPlayerTick(function(event as PlayerTickEvent) {//send the tips
    var player as IPlayer = event.player;
    var world as IWorld = player.world;
    if (world.time % 100 == 0) {
        player.sendMessage(game.localize("uw.sxe_messages.text"));
}});
recipes.removeAll();
}