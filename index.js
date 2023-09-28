const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const BOT_TOKEN="MTE1NjkzMjQwNjA3OTY3MjM3MA.GDxzSz.URREqd99HHqfwC7Sunl5hmm99tcb1zRCySgaGo"

client.login(BOT_TOKEN)

client.once("ready", () => {
    console.log("bot started")
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi")
    {
        message.reply("Hi too!")
    }
})