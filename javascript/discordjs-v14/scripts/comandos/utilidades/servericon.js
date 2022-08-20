//Command servericon
//Exemplo: !servericon
//Linguagem usada: js
//Author: David zsl#0001
//Versão: Discord.JS v14

const Discord = require('discord.js')

module.exports = {
  name: 'servericon',
  description: 'Mostra a foto do servidor',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client,interaction) => {
  const icon = interaction.
  guild.iconURL({ dynamic: true, size: 4096 })
  
  if(!icon) return interaction.reply({ content: `O Servidor não tem icon`})
      const button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
        .setLabel('Abrir icon no navegador')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(icon)
      )
      
      interaction.reply({ content: `${interaction.user}`, embeds: [new Discord.EmbedBuilder()
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setColor('00001')
      .setDescription(` ** {🖼} ** » Icone do servidor: \`${interaction.guild.name}\``)
      .setImage(icon)
      .setFooter({ text: `Comando usado por ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
      .setTimestamp()], components: [button]
    })
  }
}