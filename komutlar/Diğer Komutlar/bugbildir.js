module.exports = {
    name:"bug",
    bkz:["Botta bulduğunuz bugları bize bildirebilirsiniz"],
    code:`
    $sendWebhook[Webhook id;Webhook token;{color:GREEN}
    {author:Yeni Bir Bug Bildirildi:$userAvatar[$clientID]}
{thumbnail:$authorAvatar}
{description:Bugu Bildiren Kişi: \`$userTag[$authorID]\` | \`$authorID\` | <@$authorID>
Bulunan Bug: \`$message\`

Komutun Kullanıldığı Sunucu Bilgileri:
Sunucu İsmi: \`$serverName\`
Sunucu Üye Miktarı: \`$membersCount\`
Sunucu Sahibi: \`$userTag[$ownerID]\`
}
{image:$replaceText[$serverIcon;null;$authorAvatar]}
]
$suppressErrors
    $reply[$messageID;Bug bildirdiğiniz için teşekkürler 1 Saat sonra tekrar komutu kullanabilirsiniz;yes]
    $argsCheck[>1;Bug sebebiniz yazarmısınız ?]
$onlyIf[$authorID!=$botOwnerID;]
    `
}