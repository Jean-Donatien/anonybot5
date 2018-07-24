const Discord = require("discord.js");
const client = new Discord.Client();

//var channel = client.guilds.get("361975566120779778").channels.get("471245436603072514");

client.on("message", message => {
if (message.content.startsWith("anon: ")) {
  
  message.delete()
  client.channels.get("471245436603072514").send("Message-anonyme: "+message.content.slice(6, message.content.length));
  
  //client.guilds.get("361975566120779778").channels.get("471245436603072514").send("Ce message m'a été envoyé:"+message.content);
  //message.channel.send("Message-anonyme: "+message.content.slice(6, message.content.length));
  //message.reply(message.content);
  }
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});


client.login(process.env.TOKEN);
