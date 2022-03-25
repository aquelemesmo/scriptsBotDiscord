//Para poder usar esse script e fazer funcionar, tera que usar o evento messageDelete
//Linguagem usada: js
//Author: aquelemesmoojack#4306

// mensagem deletada sem markdown

const { MessageEmbed } = require("discord.js")

module.exports = async (client, message) => {
	if(message.author.client || message.author.id === client.user.id) return;
	if(message.author.client) return;

	const embed = new MessageEmbed()
	.setColor("RANDOM")
    .setTitle("Mensagem de texto deletada!")
    .addFields(
        {name: "Nome do usuário", value: `${message.author.username}`},
        {name: "Mensagem deletada", value: `${message.content}`},
    )
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}

// mensagem deletada com markdown

const { MessageEmbed } = require("discord.js")

module.exports = async (client, message) => {
	if(message.author.client || message.author.id === client.user.id) return;
	if(message.author.client) return;

	const embed = new MessageEmbed()
	.setColor("RANDOM")
    .setTitle("Mensagem de texto deletada!")
    .addFields(
        {name: "Nome do usuário", value: `${message.author.username}`},
        {name: "Mensagem deletada", value: `\`\`\`${message.content}\`\`\``},
    )
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}