import { XiiListener } from "../../structures/xiiListener"
import { IXiiClient } from "../../structures/interfaces/IXiiClient"
import { IXiiMessage } from "../../structures/interfaces/IXiiMessage"

class MessageListener extends XiiListener {
    event = "message"

    async on (client: IXiiClient, message: IXiiMessage) {
        if (!message.validate()) return
        if (!message.hasPrefix(client.prefix)) return
        message.removePrefix(client.prefix)
        message.getArgsAndCommand()

        try {
            const command = client.getCommand(message.command)
            command?.execute(client, message, message.args)
        } catch (err) {
            message.reply(err.message)
        }
    }
}

export { MessageListener as EventListener }
