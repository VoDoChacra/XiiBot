import { Message } from "discord.js"
import { IXiiMessage } from "../../structures/IXiiMessage"

class XiiMessage extends Message implements IXiiMessage {
    public args: string[] = []
    public command: string = ""

    validate () {
        return !this.author.bot
    }

    hasPrefix (prefix: string) {
        return this.content.startsWith(prefix)
    }

    removePrefix (prefix: string) {
        this.content = this.content.slice(prefix.length)
    }

    getArgsAndCommand () {
        [this.command, ...this.args] = this.content.split(/ +/g)
    }
}

export { XiiMessage }
