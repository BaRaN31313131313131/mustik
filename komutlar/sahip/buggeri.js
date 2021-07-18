module.exports = {
 name:"dm",
 code:`
 $dm[$message[1]]
 $color[GREEN]
 $author[Bot Sahibinden Mesaj;$authorAvatar]
 $description[$thumbnail[$userAvatar[$message[1]]]
 Selam $username[$message[1]]

 $filterMessage[$message;$message[1]]
]
 $reply[$messageID;$userTag[$message[1]] Kişisine DM Atıldı;yes]
 $onlyForIDs[$botOwnerID;]
 `   
}