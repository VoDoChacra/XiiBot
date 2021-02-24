import { XiiCommand } from "../xiiCommand"

export interface IXiiClient {
    eventer: any
    prefix: string
    ping: number

    getCommand(command: string): XiiCommand | undefined
}
