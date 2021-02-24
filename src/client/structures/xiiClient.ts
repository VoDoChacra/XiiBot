import { Client, Structures } from "discord.js"
import { IXiiClient } from "../../structures/IXiiClient"
import { XiiCommander } from "../commands/commander"
import { XiiEventer } from "../listeners/eventer"
import { XiiMessage } from "./xiiMessage"

class XiiClient extends Client implements IXiiClient {
    public prefix: string
    public eventer: XiiEventer
    public commander: XiiCommander

    constructor ({
        prefix,
        token = process.env.XII_TOKEN || null,
        options = {}
    }: {
        prefix: string, token?: string | null, options?: object
    }) {
        super(options)

        this.token = token
        this.prefix = prefix
        this.eventer = new XiiEventer()
        this.commander = new XiiCommander(this)

        this.eventer.getListeners()
            .forEach(listener => {
                this.on(listener.event, (...args: object[]) => {
                    listener.on(this, ...args)
                })
            })

        this.commander.getCommands()
    }

    get ping() {
        return this.ws.ping
    }

    getCommand (commandName: string) {
        let command = this.commander.commands.get(commandName)
        if(!command) {
            const commandAliase = this.commander.aliases.get(commandName) || ""
            command = this.commander.commands.get(commandAliase)
        }

        return command
    }
}

Structures.extend("Message", () => XiiMessage)

export { XiiClient }
