const Discord = require("discord.js");
const client = new Discord.Client();



client.on("message", message => {
if (message.content === "dzq") {
  //client.channels.get("<471245436603072514>").send(message.content);
  message.channel.send(message.content);
  //message.reply(message.content);
  }
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});


client.login(process.env.TOKEN);
