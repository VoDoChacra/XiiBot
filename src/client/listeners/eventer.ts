import path from "path"
import { readdirSync } from "fs"
import { XiiListener } from "../structures/XiiListener"

export class XiiEventer {
    public listeners: XiiListener[] = []

    public getListeners (eventsPath: string = "src") {
        readdirSync(path.join(__dirname, eventsPath)).forEach(event => {
            event = event.slice(0, -3)
            const { EventListener } = require(path.join(__dirname, eventsPath, event))

            if (EventListener?.prototype instanceof XiiListener) { this.listeners.push(new EventListener()) }
        })

        return this.listeners
    }
}
