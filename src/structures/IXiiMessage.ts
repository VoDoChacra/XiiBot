export interface IXiiMessage {
    args: string[]
    command: string | null
    validate(): boolean
    hasPrefix(prefix?: string): boolean
    removePrefix(prefix?: string): void
    getArgsAndCommand(): void
    reply(content: any): Promise<any>
}
