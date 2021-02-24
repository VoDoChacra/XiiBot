import { XiiListener } from "../../structures/XiiListener"
import { XiiClient } from "../../structures/xiiClient"
import { XiiMessage } from "../../structures/xiiMessage"

class MessageListener extends XiiListener {
    event = "message"

    async on (client: XiiClient, message: XiiMessage) {
        if (!message.validate()) return
        if (!message.hasPrefix(client.prefix)) return
        message.removePrefix(client.prefix)
        message.getArgsAndCommand()

        client.getCommand(message.command)?.execute(client, message, message.args)
    }
}

export { MessageListener as EventListener }
