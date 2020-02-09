//connect to discord, commands: npm install discord.js --save
//npm discord.js-commando --save

//commando Commands
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();

//group commands
bot.registry.registerGroup('random','Random :)');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//TOKEN
bot.login('TOKEN HERE');

//reply simple command
bot.on('message',(message) =>{
  //stop bot from looping own messagues 
  if(message.author.equals(bot.user)) {
    return; 
  }

  var text = message.content.toLowerCase(); 
  //deletes message if it contains certain words which are not allowed
  if(text.includes('12345') || text.includes('bannedword') ) {
    message.reply("your message has been deleted");
    
    //delete their message
    message.delete();
    
    return; 
  }

  //not a command
  if(text.charAt(0) != "?") {
    return; 
  }
  
  var textArray = text.split('');
  //message.reply(textArray);
  var i;
  var newString = ""; 
  for(i = 0; i < textArray.length -1; i++) {

    if(i%2 != 0) {
      newString += textArray[i+1].toUpperCase();
      continue;   
    }

    newString += textArray[i+1]; 
  }

  //vertical version
  if(text.charAt(1) == '?') {
    var long = newString.substring(1).split('');
    message.channel.send(long);
    return; 
  }

  message.reply(newString); 
  

});
