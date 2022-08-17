//Estrutura evento (slash commands)
//Linguagem usada: js
//Author: Ihury (https://github.com/Ihury)
//Versão: Discord.JS v13

class Event {
    constructor(client, options) {
        this.client = client
        this.name = options.name
    }
}

module.exports = Event