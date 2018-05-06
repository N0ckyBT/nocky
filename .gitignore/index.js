const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "n!";

client.login("NDQyMzI3NzU0Nzg5MjI0NDU5.Dc9Vjw.UcF3oRZhZwzFgQbJsQmgk3b4XKI");

client.on("ready", () => {
    console.log("Watashi wa junbi ga dekite iru !")
    client.user.setGame("Regarder des animes n!")
});
