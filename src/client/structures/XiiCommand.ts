import { IXiiClient } from "../../structures/IXiiClient"
import { IXiiMessage } from "../../structures/IXiiMessage"

export abstract class XiiCommand {
    name: string = ""
    requiredArgs?: number = 0
    description: string = ""
    quickDescription?: string
    category: string = ""
    aliases: string[] = []
    perms?: {
        botPerms?: string[],
        userPerms?: string[]
    } = {
            botPerms: [],
            userPerms: []
        }

    load?(client: IXiiClient): void { }
    execute(client: IXiiClient, message: IXiiMessage, ...args: any[]): void { }
}
