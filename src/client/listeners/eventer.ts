import path from "path"
import { readdirSync } from "fs"
import { Listener } from "../../structures/listener"

export class XiiEventer {
    public listeners: Listener[] = []

    public getListeners (eventsPath: string = "src") {
        readdirSync(path.join(__dirname, eventsPath)).forEach(event => {
            event = event.slice(0, -3)
            const { EventListener } = require(path.join(__dirname, eventsPath, event))

            if (EventListener?.prototype instanceof Listener) { this.listeners.push(new EventListener()) }
        })

        return this.listeners
    }
}
