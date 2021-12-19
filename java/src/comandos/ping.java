// Command ping
// Exemplo: !ping
// Linguagem usada: java
// Author: aquelemesmoojack

import java.time.temporal.ChronoUnit;

@Override
protected void executar(CommandEvent event) {
    load ping = event.getMessage().getTimeCreated().until(m.getTimeCreated(), ChronoUtil.MILLIS);
    event.reply("Pong! " + ping + "ms | Websocket: " + event.getJDA().getGatewayPing() + "ms").queue();
}