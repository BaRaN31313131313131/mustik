module.exports = {
    name:"suç",
    code:`
    $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];$random[1;5]];$authorID]
    $wait[1ms]
    $editMessage[$get[mesaj2];$randomText[Sokaktaki insanları kışkırttın;Binaların zillerine basıp kaçtın;Görme engelli birinin yolunu değiştirdin;Bakkalların içine torpil attın;Yoldan geçen birinin keline vurup kaçtın;İnsanların saçlarını çekip kaçtın;Kediyi ağacın tepesine bıraktın;Bitane veledin elindeki şekeri yere attın;Yoldan geçen yaşlı birinin elindeki bastonu aldın;Evin kapısına giren kişinin anahtarını alıp kanalizasyona attın;Dondurmacının aracına 300 Derece bir sıcaklık tuttun]]
    $wait[1s]
    $let[mesaj2;$channelSendMessage[$channelID;Suç işliyorsun :mag:;yes]]
    $globalCooldown[30s;**$replaceText[$replaceText[$getCooldownTime[30s;globalUser;suç;$authorID];econd;Saniye];s;]** Sonra Deneyebilirsin !{delete:30s}]
    $onlyIf[$getGlobalUserVar[durum;$authorID]==kötü;]
    `
  }