//Para poder usar esse script e fazer funcionar, tera que usar o evento message
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v12

module.exports = async (client, message, quote) => {
    Message.prototype.quote = async function (content, options) {
        const message_reference = {
            message_id: (
                !!content && !options
                    ? typeof content === 'object' && content.messageID
                    : options && options.messageID
            ) || this.id,
            message_channel: this.channel.id
        }

        const allowed_mentions = {
            parse: ['users', 'roles', 'everyone'],
            replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
        }

        const {data: parsed, files} = await APIMessage
            .create(this, content, options)
            .resolveData()
            .resolveFiles()

        return this.client.api.channels[this.channel.id].messages.post({
            data: {...parsed, message_reference, allowed_mentions},
            files
        })
            .then(d => this.client.actions.MessageCreate.handle(d).message)
    }
}