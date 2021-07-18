module.exports = {
  name:"suç",
  bkz:["Kötülük yapabilirsiniz ama kahraman iseniz bu bir süre sonra sıkıntı verebilir"],
  code:`  
  $if[$getGlobalUserVar[kişilik;$authorID]==kötü]
  
  $wait[1ms]
  $editMessage[$get[mesaj2];$randomText[Sokaktaki insanları kışkırttın;Binaların zillerine basıp kaçtın;Görme engelli birinin yolunu değiştirdin;Bakkalların içine torpil attın;Yoldan geçen birinin keline vurup kaçtın;İnsanların saçlarını çekip kaçtın;Kediyi ağacın tepesine bıraktın;Bitane veledin elindeki şekeri yere attın;Yoldan geçen yaşlı birinin elindeki bastonu aldın;Evin kapısına giren kişinin anahtarını alıp kanalizasyona attın;Dondurmacının aracına 300 Derece bir sıcaklık tuttun]]
  $if[$getGlobalUserVar[kapuan;$authorID]==0]
  
  $sendDM[$authorID;{color:RED}{author:Rozet Kazanıldı;$authorAvatar}{description:Kazanılan Rozet = 😈

  *Rozet Açıklaması = **İlk kötülük maceram***}]
  $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]ilk/;$authorID]
  $onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];ilk]!=true;]

  $endif
  $endif
  $wait[1s]
  $let[mesaj2;$channelSendMessage[$channelID;Suç işliyorsun :mag:;yes]]
  
  $globalCooldown[1m;**$replaceText[$replaceText[$getCooldownTime[60s;globalUser;suç;$authorID];second;Saniye];s;]** Sonra Deneyebilirsin !{delete:1m}]
  $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[kişilik;$authorID]==kötü;]
  $onlyIf[$getGlobalUserVar[kişilik;$authorID]!=yok;Kişiliğini seç ve komutlara erişim sağla ! \`mkişilik\`]
  $onlyIf[$checkContains[$getGlobalUserVar[durum;$authorID];kahraman;kötü]!=true;]  `
}