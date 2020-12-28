const Discord = require("discord.js"); //installing discord.js module and requiring it
const config = require("./Storage/config.json"); // config files
const db = require("quick.db");

const bot = new Discord.Client({
  disableEveryone: true,
  autoReconnect: true,
  disabledEvents: ["TYPING_START"],
  partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION"],
});
bot.on("message", async (message) => {
  if (
    message.mentions.has(bot.user) &&
    !message.mentions.has(message.guild.id)
  ) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("t.help!")
      .setURL("https://www.thisworldthesedays.com/ssdasdsadasds.html")
      .setFooter("Powered by: JamesDev#0001!");
    return message.channel.send(embed);
  }
});
  bot.commands = new Discord.Collection();
  bot.aliases = new Discord.Collection();
  bot.event = new Discord.Collection();

 

  bot.on('message', async message => {
    let prefix;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageFetch = db.fetch(`guildMessages_${message.guild.id}`)
    if (messageFetch === null) return;

    db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
    let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

    let messages;
    if (messagefetch == 0) messages = 0; //Level 0
    else if (messagefetch == 100) messages = 100; // Level 1
    else if (messagefetch == 200) messages = 200; // Level 2
    else if (messagefetch == 300) messages = 300; // Level 3
    else if (messagefetch == 400) messages = 400; // Level 4
    else if (messagefetch == 500) messages = 500; // Level 5
    else if (messagefetch == 600) messages = 600; // Level 6
    else if (messagefetch == 700) messages = 700; // Level 7
    else if (messagefetch == 800) messages = 800; // Level 8
    else if (messagefetch == 900) messages = 900; // Level 9
    else if (messagefetch == 1000) messages = 1000; // Level 10
    else if (messagefetch == 1100) messages = 1100; // Level 11
    else if (messagefetch == 1200) messages = 1200; // Level 12
    else if (messagefetch == 1300) messages = 1300; // Level 13
    else if (messagefetch == 1400) messages = 1400; // Level 14
    else if (messagefetch == 1500) messages = 1500; // Level 15
    else if (messagefetch == 1600) messages = 1600; // Level 16
    else if (messagefetch == 1700) messages = 1700; // Level 17
    else if (messagefetch == 1800) messages = 1800; // Level 18
    else if (messagefetch == 1900) messages = 1900; // Level 19
    else if (messagefetch == 2000) messages = 2000; // Level 20
    else if (messagefetch == 2100) messages = 2100; // Level 21
    else if (messagefetch == 2200) messages = 2200; // Level 22
    else if (messagefetch == 2300) messages = 2300; // Level 23
    else if (messagefetch == 2400) messages = 2400; // Level 24
    else if (messagefetch == 2500) messages = 2500; // Level 25
    else if (messagefetch == 2600) messages = 2600; // Level 26
    else if (messagefetch == 2700) messages = 2700; // Level 27
    else if (messagefetch == 2800) messages = 2800; // Level 28
    else if (messagefetch == 2900) messages = 2900; // Level 29
    else if (messagefetch == 3000) messages = 3000; // Level 30
    else if (messagefetch == 3100) messages = 3100; // Level 31
    else if (messagefetch == 3200) messages = 3200; // Level 32
    else if (messagefetch == 3300) messages = 3300; // Level 33
    else if (messagefetch == 3400) messages = 3400; // Level 34
    else if (messagefetch == 3500) messages = 3500; // Level 35
    else if (messagefetch == 3600) messages = 3600; // Level 36
    else if (messagefetch == 3700) messages = 3700; // Level 37
    else if (messagefetch == 3800) messages = 3800; // Level 38
    else if (messagefetch == 3900) messages = 3900; // Level 39
    else if (messagefetch == 4000) messages = 4000; // Level 40
    else if (messagefetch == 4100) messages = 4100; // Level 41
    else if (messagefetch == 4200) messages = 4200; // Level 42
    else if (messagefetch == 4300) messages = 4300; // Level 43
    else if (messagefetch == 4400) messages = 4400; // Level 44
    else if (messagefetch == 4500) messages = 4500; // Level 45
    else if (messagefetch == 4600) messages = 4600; // Level 46
    else if (messagefetch == 4700) messages = 4700; // Level 47
    else if (messagefetch == 4800) messages = 4800; // Level 48
    else if (messagefetch == 4900) messages = 4900; // Level 49
    else if (messagefetch == 5000) messages = 5000; // level 50
	else if (messagefetch == 5100) messages = 5100; // level 51
	else if (messagefetch == 5200) messages = 5200; // level 52
	else if (messagefetch == 5300) messages = 5300; // level 53
	else if (messagefetch == 5400) messages = 5400; // level 54
	else if (messagefetch == 5500) messages = 5500; // level 55
	else if (messagefetch == 5600) messages = 5600; // level 56
	else if (messagefetch == 5700) messages = 5700; // level 57
	else if (messagefetch == 5800) messages = 5800; // level 58
	else if (messagefetch == 5900) messages = 5900; // level 59
	else if (messagefetch == 6000) messages = 6000; // level 60
	else if (messagefetch == 6100) messages = 6100; // level 61	
    else if (messagefetch == 6200) messages = 6200; // level 62
	else if (messagefetch == 6300) messages = 6300; // level 63
	else if (messagefetch == 6400) messages = 6400; // level 64
	else if (messagefetch == 6500) messages = 6500; // level 65
	else if (messagefetch == 6600) messages = 6600; // level 66
	else if (messagefetch == 6700) messages = 6700; // level 67	
    else if (messagefetch == 6800) messages = 6800; // level 68
    else if (messagefetch == 6900) messages = 6900; // level 69
    else if (messagefetch == 7000) messages = 7000; // level 70
    else if (messagefetch == 7100) messages = 7100; // level 71
    else if (messagefetch == 7200) messages = 7200; // level 72
    else if (messagefetch == 7300) messages = 7300; // level 73
    else if (messagefetch == 7400) messages = 7400; // level 74
    else if (messagefetch == 7500) messages = 7500; // level 75
    else if (messagefetch == 7600) messages = 7600; // level 76
    else if (messagefetch == 7700) messages = 7700; // level 77
    else if (messagefetch == 7800) messages = 7800; // level 78
    else if (messagefetch == 7900) messages = 7900; // level 79
    else if (messagefetch == 8000) messages = 8000; // level 80
    else if (messagefetch == 8100) messages = 8100; // level 81
    else if (messagefetch == 8200) messages = 8200; // level 82
    else if (messagefetch == 8300) messages = 8300; // level 83
    else if (messagefetch == 8400) messages = 8400; // level 84
    else if (messagefetch == 8500) messages = 8500; // level 85
    else if (messagefetch == 8600) messages = 8600; // level 86
    else if (messagefetch == 8700) messages = 8700; // level 87
    else if (messagefetch == 8800) messages = 8800; // level 88
    else if (messagefetch == 8900) messages = 8900; // level 89
    else if (messagefetch == 9000) messages = 9000; // level 90
    else if (messagefetch == 9100) messages = 9100; // level 91
    else if (messagefetch == 9200) messages = 9200; // level 92
    else if (messagefetch == 9300) messages = 9300; // level 93
    else if (messagefetch == 9400) messages = 9400; // level 94
    else if (messagefetch == 9500) messages = 9500; // level 95
    else if (messagefetch == 9600) messages = 9600; // level 96
    else if (messagefetch == 9700) messages = 9700; // level 97
    else if (messagefetch == 9800) messages = 9800; // level 98
    else if (messagefetch == 9900) messages = 9900; // level 99
    else if (messagefetch == 10000) messages = 10000; // level 100

    if (!isNaN(messages)) {
        db.add(`level_${message.guild.id}_${message.author.id}`, 1)
        let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

        let levelembed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**${message.author}, You Have Leveled Up To Level ${levelfetch}**`)
            .setFooter(`${prefix}disablexp To Disable Level Up Messages`)
        message.channel.send(levelembed);
    };
});


  const loadCommands = require("./functions/commands.js");
  const loadEvents = require("./functions/events.js");

  const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
  };

  bot.on("guildCreate", () => {
    console.log(`I was just added to ${guild.name}`)
    const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .addField(`:wave: Welcome!`, `Thanks for adding Thickets to your server.`)
        .addField(`Getting Started`, `First of all, this bot is still under development and is getting frequent changes. We are looking for developers.`)
        .addField(`Use the command t.help to view all the commands!`)
        .setColor(0x00ff00)
        .setFooter(`Thanks for adding ${bot.user.username}, I wish you luck!`)
    
    guild.owner.send(embed)
  })
  load(); // load commands :D
  bot.login(process.env.TOKEN);