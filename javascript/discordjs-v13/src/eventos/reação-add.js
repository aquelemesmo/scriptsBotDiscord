//Para poder usar esse script e fazer funcionar, tera que usar o evento messageReactionAdd
//Linguagem usada: js
//Author: aquelemesmoojack#4306

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
            guildMember.roles.add("id_da_role")
        }
    }
}