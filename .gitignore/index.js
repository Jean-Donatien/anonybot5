const Discord = require("discord.js");
const client = new Discord.Client();



client.on("message", message => {
if (message.startwith === "ping") {
  client.channels.get("<471245436603072514>").send(message);
  }
});

client.login(process.env.TOKEN);
