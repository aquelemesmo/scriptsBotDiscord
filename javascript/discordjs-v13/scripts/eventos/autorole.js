//Para poder usar esse script e fazer funcionar, tera que usar o evento guildMemberAdd
//Linguagem usada: js
//Author: aquelemesmoojack#4306

module.exports = async (bot, member) => {
    let role = member.guild.roles.cache.find(role => role.id === "id_da_role");

    member.roles.add(role)
}