//Para poder usar esse script e fazer funcionar, tera que usar o evento messageReactionRemove
//Linguagem usada: js
//Author: aquelemesmoojack#4306

//e a mesma coisa do evento messageReactionAdd, mas isso vai acontecer quando um usuário vai retirar a reação do emoji

module.exports = async (bot, message, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        //qualquer coisa aqui
    }
}

//setar tag ao reagir o emoji

module.exports = async (bot, user, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        const guildMember = reaction.message.guild.member.cache.get(user.id)
        if(!guildMember.roles.cache.get("id_da_role")) {
            guildMember.roles.remove("id_da_role")
        }
    }
}