import { XiiEventer } from "../client/listeners/eventer"

export interface IXiiClient {
    eventer: XiiEventer
    prefix: string

    getCommand(command: string): any
}
