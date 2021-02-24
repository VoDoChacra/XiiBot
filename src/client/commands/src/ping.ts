import { XiiCommand } from "../../structures/xiiCommand"
import { XiiClient } from "../../structures/xiiClient"
import { XiiMessage } from "../../structures/xiiMessage"

class PingCommand extends XiiCommand {
    public name = "ping"
    public description = "Obtem a latência das mensagens do bot"
    public quickDescription = "Obtem a latência do bot"
    public category = "misc"
    public aliases = [
        "latency",
        "latencia",
        "latência"
    ]

    public perms = {
        botPerms: ["MANAGE_GUILD"],
        userPerms: ["MANAGE_GUILD"]
    }

    async execute (client: XiiClient, message: XiiMessage, ...args: any[]) {
        message.reply("O ping é...").then(msg => {
            msg.edit(`
            🏓Latência do meu web socket: ${client.ping}ms\n⏳Latência das mensagens: ${msg.createdTimestamp - message.createdTimestamp}ms
            `)
        })
    }
}

export { PingCommand as Command }
