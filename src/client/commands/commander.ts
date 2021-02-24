import path from "path"
import { readdirSync } from "fs"
import { XiiCommand } from "../structures/xiiCommand"
import { IXiiClient } from "../structures/interfaces/IXiiClient"

export class XiiCommander {
    public client: IXiiClient
    public commands: Map<string, XiiCommand>
    public aliases: Map<string, string>

    constructor (client: IXiiClient) {
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
