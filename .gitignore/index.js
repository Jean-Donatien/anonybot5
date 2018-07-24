const Discord = require("discord.js");
const client = new Discord.Client();



client.on("message", message => {
if (message.content === "ping") {
  //client.channels.get("<471245436603072514>").send(message);
  message.reply(message);
  }
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});


client.login(process.env.TOKEN);
