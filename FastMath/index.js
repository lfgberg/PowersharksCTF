//  Import libs
const Discord = require('discord.js');

//  Establish a client
const client = new Discord.Client();

//  Import config file
const config = require("./config.json");
client.config = config;

// On logon, set prescence + log success
client.on('ready', () => {
  client.user.setPresence({game: {name: 'starvpn.org'}, status: 'online'});
  console.log(`Logged in as ${client.user.tag}!`);
});

//  Run on message
client.on('message', async message => {

//  Ensure the message starts with the prefix + not a bot
 if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

//  Fetch input
let command = message.content.slice(client.config.prefix.length);

if (command === "ctf"){
  var embed = new Discord.RichEmbed()
    .setColor('#005DFF')
    .setURL('https://www.starvpn.org')
    .setTimestamp()
    .setFooter(`Lfgberg#1921 @${client.user.tag}`)
  embed.setAuthor("CTF Website")
  embed.setDescription('To participate in the CTF, please go [here](https://www.starvpn.org)');
  message.channel.send(embed);
  return;
}
else if (command === "flag"){

  //  Problem generator
  async function askProblem(){
    var output = null;
    //  Generate a problem
    var operators = '+*-';
    var operation = operators.charAt(Math.floor(Math.random() * operators.length));
    var num1 = Math.floor(Math.random() * 10001);
    var num2 = Math.floor(Math.random() * 10001);
    var answer = eval(num1 + operation + num2);
    //  Ask the problem, wait two seconds for a response
    message.channel.send(num1 + operation + num2);
    let collector = await message.channel.awaitMessages(msg => {
    if (msg.author.id != message.author.id)return;
    return msg.content;
  }, {time: 2000});
    let responses = collector.map(msg => msg.content.toLowerCase())
    if (responses[0] != answer){
      var output = false;
      message.reply("You've failed to answer correctly in the alotted time");
    }
    else { var output = true };
    return output;
  }

  message.channel.send("Get ready to do some fast calculations, you will have 2 seconds to answer each problem correctly before the challenge is failed. Respond only with the answer of the question.");

  //  Challenge time baby!
  for ( var i = 0; i < 5; i++ ){
    var question = await askProblem();
    if (question === false) return;
  }
  message.reply("Congrats, you won!");
  message.author.send(`The flag is: "${client.config.flag}"`);
  return;
}
else if (command === "rules"){
  var embed = new Discord.RichEmbed()
    .setColor('#005DFF')
    .setURL('https://www.starvpn.org')
    .setTimestamp()
    .setFooter(`Lfgberg#1921 @${client.user.tag}`)
    .addField("**Server Rules:**", `1.  Do not share answers regarding the CTF, or discuss challenges in detail with other members
2.  Use channels for their appropriate purpose
3.  Keep things PG-13, refrain from inappropriate language`)
    .addBlankField()
    .addField("**CTF Registration Rules:**", `1.  Do not have an inappropriate username or team name
2.  List your "affiliation" as your ATC class and year ex: CSNA2`)
    .addBlankField( )
    .addField("Other information", `If you need help registering for the CTF, using the platform, resetting a password, etc please use #support and someone will get to you in a timely fashion
      If you have a bonus flag to submit, DM it to an organizer, they will verify the flag and award you your points`)
    .setAuthor("Server/CTF information + Rules");
  message.channel.send(embed);
  return;
}
else if (command === "help"){
  var embed = new Discord.RichEmbed()
    .setColor('#005DFF')
    .setURL('https://www.starvpn.org')
    .setTimestamp()
    .setFooter(`Lfgberg#1921 @${client.user.tag}`)
    .setAuthor("List of commands")
    .setDescription("ctf, rules, flag, help");
  message.channel.send(embed);
  return;
}
else {
  message.reply("I'm sorry, but you have not entered a valid command. Please do " + client.config.prefix + "help for more information");
  return;
}

});

client.login(client.config.token);
