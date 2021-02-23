import { IXiiClient } from "./IXiiClient"

export class Listener {
    event: string = "no-event"
    on (client: IXiiClient, ...args: object[]): void { }
}
