// Enabling intents for bot
const { Client, GatewayIntentBits } = require('discord.js');
const { message } = require('prompt');
const path = require("path")
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});



// debugger
client.on('ready', readybot)

function readybot() {
    console.log("works")
}


// send messages to bot from first section, type ur answer to second one 

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '!paycheck') {
        message.reply('yes this is something else!');
    }
});

// you can duplicate this as much as you want ask/answer 

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '') {
        message.reply('');
    }
});


// enter your token

client.login('token here')
