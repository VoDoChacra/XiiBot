import { Message } from "discord.js"
import { IXiiMessage } from "../../structures/IXiiMessage"

class XiiMessage extends Message implements IXiiMessage {
    public args: string[] = []
    public command: string | null = null

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
        const words = this.content.split(/ +/g)

        this.command = words[0]
        this.args = words.slice(1)
    }
}

export { XiiMessage }
