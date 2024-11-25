const { Client, GatewayIntentBits } = require('discord.js');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    AudioPlayerStatus,
} = require('@discordjs/voice');
const play = require('play-dl'); // YouTube ve diğer kaynaklardan ses almak için
require('dotenv').config();
const config = require('./config.json'); // Config dosyanız

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

const TOKEN = config.token; // Discord bot tokeni
const TARGET_CHANNEL_ID = config.sesId; // Ses kanalının ID'si
const YOUTUBE_URL = config.pavyon; // YouTube canlı yayını URL'si

client.once('ready', async () => {
    console.log(`Bot ${client.user.tag} olarak giriş yaptı!`);

    // Hedef ses kanalını al
    const guild = client.guilds.cache.first(); // Botun bağlı olduğu ilk sunucu
    const botChannel = guild.channels.cache.get(TARGET_CHANNEL_ID);

    if (botChannel) {
        const connection = joinVoiceChannel({
            channelId: botChannel.id,
            guildId: botChannel.guild.id,
            adapterCreator: botChannel.guild.voiceAdapterCreator,
        });

        try {
            // Ses çalar oluştur ve sürekli oynatmayı başlat
            const player = createAudioPlayer();

            const playStream = async () => {
                try {
                    const stream = await play.stream(YOUTUBE_URL);
                    const resource = createAudioResource(stream.stream, {
                        inputType: stream.type,
                    });
                    player.play(resource);
                    console.log(`Canlı yayın oynatılıyor: ${YOUTUBE_URL}`);
                } catch (error) {
                    console.error(`Akış hatası: ${error.message}`);
                }
            };

            // İlk akışı başlat
            await playStream();
            connection.subscribe(player);

            // Oynatma durduğunda yeniden başlat
            player.on(AudioPlayerStatus.Idle, async () => {
                console.log('Yayın bitti, yeniden başlatılıyor...');
                await playStream();
            });

            // Hataları ele al
            player.on('error', (error) => {
                console.error(`Ses oynatma hatası: ${error.message}`);
            });
        } catch (error) {
            console.error(`Bağlantı hatası: ${error.message}`);
        }
    } else {
        console.error(`Belirtilen kanal (${TARGET_CHANNEL_ID}) bulunamadı!`);
    }
});

client.login(TOKEN);