import {ApplicationCommandDataResolvable, Client, ClientEvents, Collection} from "discord.js";
import {CommandType} from "../typings/Command";
import {RegisterCommandsOptions} from "../typings/client";
import { Event } from './Event'
import path from 'path'
import recursive from 'recursive-readdir'; //npm i --save recursive-readdir

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({ intents: 32767 });
    }

    start() {
        this.registerModules();
        this.login(process.env.botToken)
    }

    private static async importFile(filePath: string) {
        return (await import(filePath))?.default
    }

    async registerCommands({ commands, guildId}: RegisterCommandsOptions) {
        if(guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands);
            console.log("Registrando comandos para " + guildId)
        } else {
            this.application?.commands.set(commands);
            console.log("Registrando todos os comandos")
        }
    }

    async registerModules() {
        const slashCommands: ApplicationCommandDataResolvable[] = [];

        recursive(path.resolve("./src/commands"), async (err, files) => {
            console.log(files)
            for(const filePath of files) {
                const command: CommandType = await ExtendedClient.importFile(filePath)
                if(!command.name) return;

                if(!filePath.endsWith(".ts")) return;

                this.commands.set(command.name, command)
                slashCommands.push(command)
            }
        })

        this.on("ready", () => {
            this.registerCommands({ commands: slashCommands })
        })

        recursive(path.resolve("./src/events"), async (err, files) => {
            console.log(files)
            for(const filePath of files) {
                const event: Event<keyof ClientEvents> = await ExtendedClient.importFile(filePath)
                this.on(event.event, event.run)
            }
        })
    }
}