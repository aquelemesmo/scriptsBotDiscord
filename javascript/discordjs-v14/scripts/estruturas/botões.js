//Uso de botões
//Linguagem usada: js
//Author: aquelemesmoojack

//Botões sem funções de collector

const Discord = require("discord.js")

const row = new Discord.ActionRowBuilder()
    .addComponents(
        new Discord.ButtonBuilder()
            .setCustomId("id_do_botao")
            .setDisabled(false) //se deixar true, não terá como clicar no botão
            .setEmoji("emoji")
            .setLabel("Label")
            .setStyle(ButtonStyle.Danger) //você pode usar ButtonStyle.Danger | ButtonStyle.Primary | ButtonStyle.Sucess | ButtonStyle.Warning | ButtonStyle.Link
            .setURL("https://google.com") //quando o .setStyle estiver em LINK, você pode colocar um link aqui
    )

const embed = Discord.EmbedBuilder()
//monta sua embed aqui
message.reply({embeds: [embed], components: [row]})

//Botões com funções de collector

const row2 = new Discord.ActionRowBuilder()
    .addComponents(
        new Discord.ButtonBuilder()
            .setCustomId("id_do_botao")
            .setDisabled(false) //se deixar true, não terá como clicar no botão
            .setEmoji("emoji")
            .setLabel("Label")
            .setStyle(ButtonStyle.Danger) //você pode usar ButtonStyle.Danger | ButtonStyle.Primary | ButtonStyle.Sucess | ButtonStyle.Warning | ButtonStyle.Link
            .setURL("https://google.com") //quando o .setStyle estiver em LINK, você pode colocar um link aqui
    )

const embed2 = Discord.EmbedBuilder()
//monta sua embed aqui
message.reply({embeds: [embed], components: [row]})

const filtro = m => m.customId === "id_do_botao" && m.user.id === message.author.id;
const collector = message.channel.createMessageComponentCollector(filtro);

collector.on("collect", async m => {
    if(m.customId === "id_do_botao") {
        //aqui você pode fazer algo com o botão
        await m.editReply() //se você quiser editar o botão, use o m.editReply()
        await m.deferUpdate() //isso atualiza a mensagem
    }
})