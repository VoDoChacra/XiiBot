import { join } from "path"
import { readdirSync } from "fs"
import { XiiListener } from "../structures/xiiListener"

export class XiiEventer {
    public listeners: XiiListener[] = []

    public getListeners (eventsPath: string = "src") {
        readdirSync(join(__dirname, eventsPath)).forEach(event => {
            event = event.slice(0, -3)
            const { EventListener } = require(join(__dirname, eventsPath, event))

            if (EventListener?.prototype instanceof XiiListener) { this.listeners.push(new EventListener()) }
        })

        return this.listeners
    }
}
