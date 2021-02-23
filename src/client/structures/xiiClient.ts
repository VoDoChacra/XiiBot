import { Client, Structures } from "discord.js"
import { IXiiClient } from "../../structures/IXiiClient"
import { XiiEventer } from "../listeners/eventer"
import { XiiMessage } from "./xiiMessage"

class XiiClient extends Client implements IXiiClient {
    public prefix: string
    public eventer: XiiEventer

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

        this.eventer.getListeners()
            .forEach(listener => {
                this.on(listener.event, (...args: object[]) => {
                    listener.on(this, ...args)
                })
            })
    }

    getCommand (message: string) {
        return message
    }
}

Structures.extend("Message", () => XiiMessage)

export { XiiClient }
