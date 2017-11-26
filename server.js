const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")

client.on('ready', function (evt) {

});
client.on('message', function (user, userID, channelID, message, evt, client, msg, args)   {
const commands = {
	'play': (msg) => {
		return msg.channel.sendMessage('You was tested for `HIV` and came back positve!);
                client.sendMessage({
                    to: channelID,
                    message: 'You was tested for `HIV` and came back positve!'
					       
	client.on('message', function (user, userID, channelID, message, evt, client, msg, args)   {
const commands = {
	'play': (msg) => {
		return msg.channel.sendMessage('You was tested for `HIV` and came back positve!);
                client.sendMessage({
                    to: channelID,
                    message: 'You was tested for `HIV` and came back positve!'				       
                });
            break;
			case 'Me':
                client.sendMessage({
                    to: channelID,
                    message: 'Meh, ur life nearly as boring as my code'
                });
            break;
			case 'Slap':
                client.sendMessage({
                    to: channelID,
                    message: 'Bitch get out my way!'
                });
            break;
			case 'woof':
                client.sendMessage({
                    to: channelID,
                    message: 'Woof!'
                });
            break;
			case 'Ily':
                client.mentions.userID.first();
                client.sendMessage({
                  to: channelID,
                  message: "I love you (userID)"
              });
         }
     }
});


client.login(process.env.BOT_TOKEN);
