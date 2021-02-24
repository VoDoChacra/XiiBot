import { IXiiClient } from "../../structures/IXiiClient"

export abstract class XiiListener {
    event: string = "no-event"
    on (client: IXiiClient, ...args: object[]): void { }
}
