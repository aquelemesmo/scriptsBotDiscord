// Command kick
// Exemplo: !kick <member>
// Linguagem usada: java
// Author: aquelemesmoojack

import java.time.temporal.ChronoUnit;

String[] args = event.getMessage().getContentRaw().split("\\s+");

if (args[0].equalsIgnoreCase(Main.prefix + "kick")) {
    if(args.length==1){
        event.reply("Você precisa especificar um membro para expulsar!").queue();
        return;
    }
    else if(event.getMentionedMembers().isEmpty()){
        event.getGuild().kick(args[1],0,"kick command").queue();
    }else{
        event.getGuild().kick(event.getMentionedMembers().get(0),0,"kick command").queue();
    }
}