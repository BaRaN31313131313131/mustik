module.exports = {
    name:"bot",
    bkz:["Botun istatistiklerini gösterir"],
    aliases: ["istatistik","i"],
    code:`
    $color[GREEN]
    $thumbnail[$userAvatar[$clientID]]
    $author[Mustik İstatikstik;$authorAvatar]
    $addField[Veri Bilgilendirme;Toplam Ram Miktarı: **$maxRammb**
    Kullanılan Ram Miktarı: **$rammb**]
    $addField[Genel Bİlgilendirme;Toplam Sunucu: **$serverCount**
    Toplam Üye: **$allMembersCount**

    Kanal Miktarı: **$allChannelsCount** | **$allChannelsCount[category]** Kategori | **$allChannelsCount[text]** Metin Kanalı | **$allChannelsCount[voice]** Yazı Kanalı
    Ping: **$ping**
    Açık Kalma Süresi: **$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye];m; Dakika];h; Saat];d; Gün]**
    Geliştirici ve Bot Sahibi: **$userTag[$botOwnerID]** | **$botOwnerID**]
    $addField[Sürüm Bilgilendirme;AOI.js Sürümü: **$packageVersion**]
    $onlyIf[$message==;]
    `
}