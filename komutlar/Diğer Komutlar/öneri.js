module.exports = {
    name:"öneri",
    bkz:["Botta istediğiniz önerileri sunabilirsiniz."],
    code:`
    $sendWebhook[Webhook id;Webhook token;{color:GREEN}
    {author:Yeni Bir Öneri Geldi:$userAvatar[$clientID]}
{thumbnail:$authorAvatar}
{description:Öneri Veren Kişi: \`$userTag[$authorID]\` | \`$authorID\` | <@$authorID>
Verilen Öneri: \`$message\`

Komutun Kullanıldığı Sunucu Bilgileri:
Sunucu İsmi: \`$serverName\`
Sunucu Üye Miktarı: \`$membersCount\`
Sunucu Sahibi: \`$userTag[$ownerID]\`
}
{image:$replaceText[$serverIcon;null;$authorAvatar]}
]
    $reply[$messageID;Öneriniz başarıyla bildirildi 1 saat sonra tekrar komutu kullanabilirsiniz;yes]
    $argsCheck[>1;Önerinizi yazarmısınız ?]
    $suppressErrors
    
    `
}