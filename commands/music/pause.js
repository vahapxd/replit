module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author},Liste de şarkı yok amk neyi durduruyon !. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Şu an çalan müzik adı **${queue.current.title}** has stopped ✅` : `${message.author}, Something went wrong. ❌`);
    },
};