const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'هلا احبك والله  :) ',
     details: `I'm : YOuseF`,
     url: 'http://twitch.tv/Streammingg',
     state: `احبكم تعال سولف معي`,
    application_id: '281376075802476544',
     assets: {
        small_image: `3668354310373376`,
        small_text: ' Take This ! ' ,
        large_image: `37045127113342976`,
        large_text: `مكن كيب ابتفاين ` }

  }
    });
});




client.login("NDU5MzA1MTQ3NjIxOTY1ODI2.DsIReg.c5ZFPO_QgP4oIkcU3yppejlFKv8");﻿