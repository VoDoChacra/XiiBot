export abstract class XiiCommand {
    name: string = ""
    requiredArgs?: number = 0
    description: string = ""
    quickDescription?: string
    category: string = ""
    aliases: string[] = []
    onlyGuild?: boolean = false
    perms: {
        botPerms: any[],
        userPerms: any[]
    } = {
        botPerms: [],
        userPerms: []
    }

    load? (client: any): void { }
    execute (client: any, message: any, ...args: any[]): void { }
    // Completar isso
    /* validate (message: XiiMessage) {
        if (!message.guild && this.onlyGuild) throw new Error("Este comando só pode ser executado em servidores")
        if (!message.server?.me?.hasPermission(this.perms.botPerms)) throw new Error("Eu não consigo executar esse comando!")
        if (!message.member?.hasPermission(this.perms.userPerms)) throw new Error("Você não pode executar esse comando")

        return true
    } */
}
