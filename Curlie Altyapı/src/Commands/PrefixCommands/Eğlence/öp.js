const Discord = require("discord.js")
const path = require('path');

module.exports = {
name: 'öp',
description: '',

async execute(client, message, args) {

let member = message.mentions.members.first()
const filePath = path.join(__dirname, '../../../settings/assets/kiss-bellyconrad.gif');

if(!member) return message.channel.send({ embeds: [
new Discord.EmbedBuilder()
.setColor(
process.env.MAINCOLOR
)
.setAuthor({
name : `Bir hata oldu!`,
iconURL: client.user.avatarURL({ size : 2048 })
})
.setDescription(
`❎ Kullanıcı etiketleyerek dener misin?
`)
]})
await message.channel.send({ 
content: `💍 **${member.user.username}** **\`&\`** **${message.author.username}** 💍`,
files: [new Discord.AttachmentBuilder(filePath)]
})

},
};