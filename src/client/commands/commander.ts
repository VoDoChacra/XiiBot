import path from "path"
import { readdirSync } from "fs"
import { XiiCommand } from "../structures/XiiCommand"
import { XiiClient } from "../structures/xiiClient"

export class XiiCommander {
    public client: XiiClient
    public commands: Map<string, XiiCommand>
    public aliases: Map<string, string>

    constructor (client: XiiClient) {
        this.client = client
        this.aliases = new Map()
        this.commands = new Map()
    }

    public getCommands (commandsPath = "src") {
        readdirSync(path.join(__dirname, commandsPath)).forEach(commandName => {
            commandName = commandName.slice(0, -3)
            const { Command } = require(path.join(__dirname, commandsPath, commandName))

            if (Command?.prototype instanceof XiiCommand) {
                const command: XiiCommand = new Command()

                command.load?.(this.client)
                this.commands.set(command.name, command)

                command.aliases.forEach(aliase => {
                    this.aliases.set(aliase, command.name)
                })
            }
        })

        return this.commands
    }
}
