```markdown
# Discord YouTube Live Bot 🎵

Bu Discord botu, belirlenen bir YouTube canlı yayını veya videosunu bir ses kanalında oynatır. Bot, bir kullanıcıyı beklemeden otomatik olarak belirtilen ses kanalına bağlanır ve yayını başlatır. Yayın kesilirse, otomatik olarak yeniden oynatılır.

---

## Özellikler 🌟

- 🎧 **Belirtilen ses kanalına otomatik bağlanır.**
- 🔄 **Yayın kesilirse otomatik olarak yeniden başlatır.**
- 🔗 **YouTube canlı yayını ve videolarını destekler.**
- ✅ **Kullanıcıyı beklemeden yayını başlatır.**

---

## Gereksinimler ⚙️

- **Node.js v16 veya üzeri** (Discord.js ve diğer kütüphaneler için)
- Discord bot tokeni
- Hedef bir ses kanalı ID'si
- YouTube canlı yayını veya video bağlantısı

---

## Kurulum 🛠️

### 1. Gerekli Kütüphaneleri Yükleyin
Aşağıdaki komutları terminalde çalıştırarak gerekli kütüphaneleri yükleyin:
```bash
npm install
```

### 2. Bot Tokenini ve Ses Kanalı ID'sini Ayarlayın
`config.json` dosyasını oluşturun ve aşağıdaki yapıyı doldurun:
```json
{
    "token": "YOUR_DISCORD_BOT_TOKEN",
    "sesId": "YOUR_VOICE_CHANNEL_ID",
        "pavyon": "CANLI_YAYIN_LİNK"
}
```

- `token`: Discord geliştirici portalından aldığınız bot tokeni.
- `sesId`: Botun bağlanacağı ses kanalının ID'si.

### 3. Botu Başlatın
Terminalde aşağıdaki komutu çalıştırarak botu başlatın:
```bash
node bot.js
```

---

## Kullanım 📖

1. Bot başlatıldığında, otomatik olarak `config.json` dosyasında belirtilen ses kanalına bağlanır.
2. Belirttiğiniz YouTube bağlantısını ses kanalında çalar.
3. Yayın kesilirse, bot yayını otomatik olarak yeniden başlatır.

---

## Yapılandırma ⚙️


### Hedef Ses Kanalı
Botun bağlanacağı ses kanalını değiştirmek için `config.json` dosyasındaki `sesId` alanını düzenleyin.

---

## Örnek `config.json`
```json
{
    "token": "YOUR_DISCORD_BOT_TOKEN",
    "sesId": "YOUR_VOICE_CHANNEL_ID",
    "pavyon": "CANLI_YAYIN_LİNK"
}
```

---

## Hata Yönetimi 🛠️

- **Hedef kanal bulunamazsa:** 
  Konsolda `Belirtilen kanal bulunamadı!` hatası alırsınız. Bu durumda `sesId` değerini kontrol edin.

- **403 Forbidden hatası:**
  Eğer YouTube akışı yapılamıyorsa, videonun URL'sini kontrol edin ve bağlantının aktif olduğundan emin olun.

---

## Destek 🤝

[![Discord Banner](https://api.weblutions.com/discord/invite/novadev/)](https://discord.gg/novadev)

- [Discord.js Belgeleri](https://discord.js.org/)
- [@discordjs/voice Belgeleri](https://github.com/discordjs/voice)
- [play-dl Belgeleri](https://github.com/Androz2091/play-dl)

---

## Lisans 📜

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına göz atın.
```
