//Command ping
//Exemplo: !ping
//Linguagem usada: js
//Author: Aubrey#2981 <Ferinha:
//Versão: Discord.JS v14

const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Veja o atual ping do bot.",
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

  const button = new Discord.ActionRowBuilder()
          .addComponents(
        	new Discord.ButtonBuilder()
		.setCustomId('avemariadoido')
		.setLabel('Atualizar ping')
                .setStyle(Discord.ButtonStyle.Primary)
			);
      
      const embed = new Discord.EmbedBuilder()
      .setColor("a5d7ff")
      .setTitle("🎾 ****»**** **PONG!**")
      .setDescription(`> **ping do bot** \`${client.ws.ping}\`**ms!**`)
      
      interaction.reply({embeds: [embed], components: [button],fetchReply: true}).then(msg =>{

  const collector = msg.createMessageComponentCollector({ filter: m => m.user.id == interaction.user.id, idle: 60000 * 10})

  collector.on("collect", i =>{
    i.reply({embeds: [new Discord.EmbedBuilder()
      .setColor("a5d7ff")
      .setDescription(`> **ping do bot** \`${client.ws.ping}\`**ms!**`)]})
  })
         
        })
    }
};