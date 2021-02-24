import { XiiEventer } from "../client/listeners/eventer"

export interface IXiiClient {
    eventer: XiiEventer
    prefix: string
    ping: number

    getCommand(command: string, message: any): any
}
