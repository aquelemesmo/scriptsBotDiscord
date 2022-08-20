// Command ban
// Exemplo: !ban <member>
// Linguagem usada: java
// Author: aquelemesmoojack

import java.time.temporal.ChronoUnit;

String[] args = event.getMessage().getContentRaw().split("\\s+");

if (args[0].equalsIgnoreCase(Main.prefix + "ban")) {
    if(args.length==1){
        event.reply("Você precisa especificar um membro para banir!").queue();
        return;
    }
    else if(event.getMentionedMembers().isEmpty()){
        event.getGuild().ban(args[1],0,"ban command").queue();
    }else{
        event.getGuild().ban(event.getMentionedMembers().get(0),0,"ban command").queue();
    }
    
}