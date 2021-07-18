module.exports = {
  name:"eval",
  bkz:["Bazı kolay kodları denemek için sahibe özel komut"],
  code:`
  $if[$message!=ksıfırla]
  $eval[$message]
  $endif
  $if[$message==dur]
  $shutdown
  ok
  $endif
  $if[$message==ksıfırla]
  $setGlobalUserVar[kişilik;yok;$authorID] Kişilik sıfırlandı
  $endif
  $if[$message[1]==rozet]
  $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$mentioned[1;yes]]$filterMessage[$noMentionMessage;$noMentionMessage[1]]/;$mentioned[1;yes]]
  ok
  $endif
  $onlyForIDs[$botOwnerID;]
  `
}