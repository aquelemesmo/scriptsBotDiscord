// Event ready
// Linguagem usada: java
// Author: aquelemesmoojack#4306

import net.dv8tion.jda.api.events.ReadyEvent;

public class ready extends ListenerAdapter {
    @Override
    public void onReady(ReadyEvent event) {
        System.out.println("Bot iniciado com sucesso!");
    }
}