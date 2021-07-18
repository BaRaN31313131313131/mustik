module.exports = {
  name:"pp",
  bkz:["Etiketlenen kişinin profil resmini yada sizin profil resminizi atar"],
  code:`
  $reply[$messageID;$userAvatar[$mentioned[1;yes]];yes]
  $suppressErrors[Dosya ekleme yetkim yok]
  `
}