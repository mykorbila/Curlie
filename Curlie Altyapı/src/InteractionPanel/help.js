const Discord = require("discord.js")

module.exports = (client) => {

client.on("interactionCreate", async (i) => {

const collector = i.channel.createMessageComponentCollector({ 
filter: (interaction) => interaction.user.id === i.user.id, 
time: 15000 
});
        
const menu = i.values[0]
if (menu === 'koruma') {

const embed = new Discord.EmbedBuilder()
.setColor(
process.env.MAINCOLOR
)
.setThumbnail(
i.guild.iconURL({ size : 2048 })
)
.setDescription(
`## 🧊 ${i.client.user.username} Koruma Komutları

\`●\` ${process.env.PREFIX}küfür-koruma [**#LogKanalEtiket**] **aç/kapat**
\`●\` ${process.env.PREFIX}spam-koruma [**#LogKanalEtiket**] **aç/kapat**
\`●\` ${process.env.PREFIX}caps-koruma [**#LogKanalEtiket**] **aç/kapat**
\`●\` ${process.env.PREFIX}kanal-koruma [**#LogKanalEtiket**] **aç/kapat**
\`●\` ${process.env.PREFIX}rol-koruma [**#LogKanalEtiket**] **aç/kapat**
## ⭐ ${i.client.user.username} Premium Koruma Komutları

\`●\` ${process.env.PREFIX}url-koruma [**#LogKanalEtiket**] **aç/kapat** (*Yakında*)
\`●\` ${process.env.PREFIX}sunucuisim-koruma [**#LogKanalEtiket**] **aç/kapat**  (*Yakında*)
\`●\` ${process.env.PREFIX}mesaj-koruma [**#LogKanalEtiket**] **aç/kapat** (*Yakında*)
`
)
.setFooter({
text : `(@${client.user.username}) rolünü üste almaya unutma. | Ping sayısı: ${client.ws.ping}ms`,
iconURL : i.guild.iconURL({ size : 2048 })
})
i.reply({ 
embeds : [embed],
ephemeral: true
})

} else if (menu === 'eglence') {

const embed = new Discord.EmbedBuilder()
.setColor(
process.env.MAINCOLOR
)
.setThumbnail(
i.guild.iconURL({ size : 2048 })
)
.setDescription(
`## 🐺 ${i.client.user.username} Eğlence Komutları

\`●\` ${process.env.PREFIX}öp [**@KullanıcıEtiket**]
\`●\` ${process.env.PREFIX}ship [**@KullanıcıEtiket**]
\`●\` ${process.env.PREFIX}zar-at [**@KullanıcıEtiket**]
\`●\` ${process.env.PREFIX}tokat-at [**@KullanıcıEtiket**]
\`●\` ${process.env.PREFIX}kaç-cm
`
)
//\`●\` ${process.env.PREFIX}
.setFooter({
text : `(@${client.user.username}) rolünü üste almaya unutma. | Ping sayısı: ${client.ws.ping}ms`,
iconURL : i.guild.iconURL({ size : 2048 })
})
i.reply({ 
embeds : [embed],
ephemeral: true
})

} else if (menu === 'delete') {

setTimeout(async () => {
try {

await i.message.delete();
} catch (error) {
if (error.code === 10008) {
} else {
}
}
}, 2300);

}
}
)

}