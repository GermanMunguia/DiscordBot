const { Client, Attachment } = require('discord.js');

    const attachment = new Attachment('https://www.9bridges.org/wp-content/uploads/2016/02/norules.png');

const commando = require('discord.js-commando');

class SendAttachment extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rules',
            group: 'random',
            memberName: 'rules',
            description: 'Shows Discord chat rules!'
        });
    }
    async run(message, args) {
        message.channel.send(attachment);
        message.channel.send("The Rules");
}
}

module.exports = SendAttachment; 

