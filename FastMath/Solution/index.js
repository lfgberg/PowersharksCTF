//  This is an example of how you could solve this challenge using the Discord.js library, the same concept is applicable in the python counterpart, and this can be done multiple ways

//  Import libs
const Discord = require('discord.js');

//  Establish a client
const client = new Discord.Client();

//  Import config file
const config = require("./config.json");
client.config = config;

//  Run on message
client.on('message', async message => {

//  Trigger only when the bot owner runs the !flag command
if (message.author.id != client.user.id || message.content != "!flag") return;
console.log("Triggered");

  async function parseProblem() {
    //  waits for a single message from the bot
    //  client.config.botID is the bot's userID copied from discord
    let collector = await message.channel.awaitMessages(msg => {
    if (msg.author.id != client.config.botID) return;
    if (msg.content === "Get ready to do some fast calculations, you will have 2 seconds to answer each problem correctly before the challenge is failed. Respond only with the answer of the question.") return;
    return msg.content;
    }, {max: 1});
    let responses = collector.map(msg => msg.content.toLowerCase());
    if (responses[0].startsWith("<")) return "failed";
    let answer = eval(responses[0].toString());
    return answer;
  }

   for ( var i = 0; i < 5; i++ ){
     var problem = await parseProblem();
     if (problem === "failed") return;
     message.channel.send(problem);
   }

   return;
});

client.login(client.config.token);
