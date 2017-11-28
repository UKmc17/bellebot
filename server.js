const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
var auth = require('./config.json');
var logger = require('winston');


logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt, client, msg, args)   {

    if (message.substring(0, 1) == '-') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'Test':
                bot.sendMessage({
                    to: channelID,
                    message: 'You was tested for `HIV` and came back positve!'
                });
            break;
			case 'Me':
                bot.sendMessage({
                    to: channelID,
                    message: 'Meh, ur life nearly as boring as my code'
                });
            break;
			case 'Slap':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bitch get out my way!'
                });
            break;
			case 'woof':
                bot.sendMessage({
                    to: channelID,
                    message: 'Woof!'
                });
            break;
			case 'Ily':
                bot.mentions.userID.first();
                bot.sendMessage({
                  to: channelID,
                  message: "I love you ${message.member.username}"
              });
         }
     }
});


client.login(process.env.BOT_TOKEN);
