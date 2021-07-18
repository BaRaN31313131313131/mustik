module.exports = {
    name:"$alwaysExecute",
    code:`
$if[$message[1]!=]
    $sendWebhook[Webhook id;Webhook token;{color:GREEN}
    {author:Komut Kullanıldı:$authorAvatar}{thumbnail:$replaceText[$serverIcon;null;$authorAvatar]}
    {description:Kullanan Kişi: \`$userTag[$authorID]\` | \`$authorID\` | <@$authorID>
    Kullanılan Komut: $message
    Etiketlenen Kişi: $userTag[$mentioned[1]] | $mentioned[1] | <@$mentioned[1]>
    
    Sunucu:
    Sunucu İsmi: \`$serverName\`
    Sunucu Sahibi: \`$userTag[$ownerID]\`
    Sunucu Üyesi: \`$membersCount\`}]
$endif
$suppressErrors[]
$onlyIf[$checkContains[$message[1];profil;pgüncelle;suç;iyilik;gavatar;kişilik;avatar;soygun;deepweb;bankasoy;hesapçal;kumar;banka;gönder;market;satınal;sıralama;öğren;günlük;çal;yardım;davet;bot;sunucu;premium;rozetler;pp;bug;öneri]!=false;{suppress:no}]
    `
}