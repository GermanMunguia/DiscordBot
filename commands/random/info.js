const commando = require('discord.js-commando');

class WebsiteInfo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'random',
            memberName: 'info',
            description: 'Shows extra information about the server.'
        });
    } 

    async run(message, args) {
        message.reply("This server was made on 01/10/2020, find more info contact us.");

    }

}

module.exports = WebsiteInfo; 