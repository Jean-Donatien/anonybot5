const Discord = require("discord.js");
const client = new Discord.Client();

//var channel = client.guilds.get("361975566120779778").channels.get("471245436603072514");

client.on("message", message => {
if (message.content.startsWith("anon: ")) {
  
  message.delete()
  client.channels.get("471644545038155798").send("Message-anonyme: "+message.content.slice(6, message.content.length));
  }
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});

/*client.on("message", message => {
  var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
  var monfichier=fileSystem.OpenTextFile("messageEnvoye.txt", 2 ,true);
  monfichier.WriteLine(message);
});*/


client.login(process.env.TOKEN);
