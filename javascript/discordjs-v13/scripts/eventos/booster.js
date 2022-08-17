//Para poder usar esse script e fazer funcionar, tera que usar o evento presenceUpdate
//Linguagem usada: js
//Author: aquelemesmoojack#4306

module.exports = async (bot, oldPresence, newPresence) => {
    bot.channels.cache.get("id_canal").send(`${newPresence.presence} deu boost no servidor!`);
}