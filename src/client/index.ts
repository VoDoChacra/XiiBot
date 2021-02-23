import { XiiClient } from "./structures/xiiClient"
import clientConfig from "../config/clientConfig.json"
import xiiConfig from "../config/xiiConfig.json"

export async function start () {
    const xiiClient = new XiiClient({
        prefix: xiiConfig.prefix,
        options: clientConfig
    })

    await xiiClient.login()
    console.log("Xii Online :3")
}
