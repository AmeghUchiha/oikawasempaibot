const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ0ODQ4ODI0NjMxMDMzODc2.XzpMhg.Vo-74kLYveYpP3jW0abvaa8b2M0';

bot.on('ready', () =>{
        console.log('Oikawa is now online!');
        bot.user.setActivity('with Iwa-Chan :3')
})

bot.login(token);