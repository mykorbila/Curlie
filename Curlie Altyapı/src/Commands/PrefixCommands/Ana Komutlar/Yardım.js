const Discord = require("discord.js")

module.exports = {
name: 'yardım',
description: 'Yardım Menüsüdür.',

async execute(client, message, args) {

const sunucusayacemoji = `🗒️`
const membersayacemoji = `👤`
const gecikmesayacemoji = `⏰`

const buttonlar = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setCustomId("swsayac")
.setLabel(`Sunucu sayısı: ${client.guilds.cache.size}`)
.setEmoji(sunucusayacemoji)
.setDisabled(true)
.setStyle(Discord.ButtonStyle.Danger),
new Discord.ButtonBuilder()
.setCustomId("membersayac")
.setLabel(`Kullanıcı sayısı: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`)
.setEmoji(membersayacemoji)
.setDisabled(true)
.setStyle(Discord.ButtonStyle.Danger),
new Discord.ButtonBuilder()
.setCustomId("gecikmesayac")
.setLabel(`Ping Sayısı: ${client.ws.ping}`)
.setEmoji(gecikmesayacemoji)
.setDisabled(true)
.setStyle(Discord.ButtonStyle.Danger)
)

const selamemoji = `👋`
const yeniemoji = `🆕`
const korumaemoji = `📚`
const ekonomiemoji = `🧾`
const eğlenceemoji = `💎`
const kapatemoji = `🗑️`
const diğeremoji = `🔃`
const popüleremoji = `⭐`

const selectmenu1 = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId("yrdm")
.setPlaceholder(`Bir kategori seç.`)
.addOptions([
{
label: `Koruma Komutları`,
description: `Koruma komutları buradadır.`,
value: 'koruma',
emoji: korumaemoji
},
{
label: `Ekonomi Komutları`,
description: `Ekonomi komutları buradadır.`,
value: 'ekonomi',
emoji: ekonomiemoji
},
{
label: `Eğlence Komutları`,
description: `Eğlence komutları buradadır.`,
value: 'eglence',
emoji: eğlenceemoji
},
{
label: `Diğer Komutlar`,
value: 'diger',
emoji: diğeremoji
},
{
label: `Sil`,
value: 'delete',
emoji: kapatemoji
},
])
)

const embed = new Discord.EmbedBuilder()
.setColor(
process.env.MAINCOLOR
)
.setThumbnail(
message.guild.iconURL({ size : 2048 })
)
.setDescription(
`## ${selamemoji} Selam ${message.author.username}!

Ben **${client.user.username}**, Sana nasıl yardımcı olabilirim?

● **${yeniemoji} Güncellemeler**
> **\`Şuanlık bulunmamaktadır.\`**

${korumaemoji} **\`Koruma Komutları\`**
> **Kanal Koruma**, **Spam Koruma**, **Küfür Koruma** gibi komutlar bu kategoridedir.

${ekonomiemoji} **\`Ekonomi Komutları\`**
> **Soygun**, **Çalış**, **Savaş**, **Ekonomi Bilgi** gibi komutlar bu kategoridedir.

${eğlenceemoji} **\`Eğlence Komutları\`**
> **Aşk Ölçer**, **Sarıl**, **Tokat At**, **Balık Tut** gibi komutlar bu kategoridedir.

${popüleremoji} **\`Popüler Komutlar\`**
\`○\` **${process.env.PREFIX}spam-koruma**
\`○\` **${process.env.PREFIX}kanal-koruma**
\`○\` **${process.env.PREFIX}aşk-ölçer**
\`○\` **${process.env.PREFIX}çalış**
\`○\` **${process.env.PREFIX}soygun**
`
)
.setFooter({
text : `(@${client.user.username}) rolünü üste almaya unutma. | Ping sayısı: ${client.ws.ping}ms`,
iconURL : message.guild.iconURL({ size : 2048 })
})
message.channel.send({ 
embeds : [embed],
components : [selectmenu1, buttonlar]
})

},
};