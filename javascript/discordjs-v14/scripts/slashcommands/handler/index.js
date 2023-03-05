//Handler for slashcommands
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const fs = require("fs")

module.exports = async (bot) => {
    const SlashsArray = []

    fs.readdir(`./src/commands`, (error, folder) => {
        folder.forEach(subfolder => {
            fs.readdir(`./src/commands/${subfolder}/`, (error, files) => {
                files.forEach(files => {
                    if(!files?.endsWith('.js')) return;
                    files = require(`../commands/${subfolder}/${files}`);
                    if(!files?.name) return;
                    bot.slashCommands.set(files?.name, files);

                    SlashsArray.push(files)
                });
            });
        });
    });

    bot.on("ready", async () => {
        bot.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    });
};