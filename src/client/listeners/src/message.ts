import { Listener } from "../../../structures/listener"
import { XiiClient } from "../../structures/xiiClient"
import { XiiMessage } from "../../structures/xiiMessage"

class MessageListener extends Listener {
    event = "message"
    on (client: XiiClient, message: XiiMessage) {
        if (!message.validate()) return
        if (!message.hasPrefix(client.prefix)) return
        message.removePrefix(client.prefix)
        message.getArgsAndCommand()

        message.reply(`Comando: ${message.command}\nArgumento(s): ${message.args.join(" ")}`)
    }
}

export { MessageListener as EventListener }
