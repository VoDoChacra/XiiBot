export interface IXiiMessage {
    args: string[]
    command: string
    createdTimestamp: number
    server: any
    validate(): boolean
    hasPrefix(prefix?: string): boolean
    removePrefix(prefix?: string): void
    getArgsAndCommand(): void
    edit(content: any): Promise<any>
    reply(content: any): Promise<any>
}
