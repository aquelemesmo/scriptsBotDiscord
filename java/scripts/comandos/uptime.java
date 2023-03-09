// Command uptime
// Exemplo: !uptime
// Linguagem usada: java
// Author: aquelemesmoojack

import java.time.temporal.ChronoUnit;

String[] args = event.getMessage().getContentRaw().split("\\s+");
if (args[0].equalsIgnoreCase(Main.prefix + "uptime")) {
    long uptime = event.getJDA().getGatewayPing();
    event.reply("O bot está online há " + uptime + " milisegundos!").queue();
}