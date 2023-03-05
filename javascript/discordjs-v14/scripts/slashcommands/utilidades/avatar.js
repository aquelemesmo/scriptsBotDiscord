//Command avatar
//Exemplo: /avatar <usuário>
//Linguagem usada: js
//Author: David Dev#0001
//Versão: Discord.JS v14

const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'Veja seu avatar ou de alguem',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [{
    name: 'user',
    description: 'User que desejar ver o avatar',
    type: 6,
    required: false,
  }],
  run: async (client,interaction) => {
    const user = interaction.guild.members.cache.get(interaction.options.getUser("membro").id) || interaction.user
    const avatar = user.displayAvatarURL({ dynamic: true, size: 4096 })
        const button = new Discord.ActionRowBuilder()
        .addComponents(
          new Discord.ButtonBuilder()
          .setLabel('Abrir avatar no navegador')
          .setStyle(Discord.ButtonStyle.Link)
          .setURL(user.displayAvatarURL({ dynamic: true, size: 4096}))
        )

        interaction.reply({ content: `${interaction.user}`, embeds: [new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
          .setColor('00001')
          .setDescription(`**{ 🖼 }** » Avatar de: \`${user.tag}\``)
          .setImage(avatar)
          .setFooter({ text: `Comando usado por ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
          .setTimestamp()], components: [button]})
  }
}