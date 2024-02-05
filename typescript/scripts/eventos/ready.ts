import { Event } from '../estruturas/Event'

export default new Event("ready", (client) => {
    console.log("Bot iniciado")
})