module.exports = {
    name:"yardım",
    bkz:["Cidden bunu arattın mı ?"],
    aliases: ["help"],
    code:`

    $if[$message==]
    $reply[$messageID;    {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]}
{description:
        Selam sana $replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;kötü adam];kahraman;kahramanımız];yok;maceracı]
    
    *Eğer Komut Hakkında Bilgi İstersen Lütfen \`myardım <komut ismi>\` kullan*
    }
      {field:Diğer Komutlar:\`mpp @kişi\` , \`mbug\` , \`möneri\` , \`mhatırlat\`, \`mlevelmesaj\` , \`mping\`}
      {field:Bilgi Komutları:\`myardım\` , \`mdavet\` , \`mbot\` , \`msunucu\` , \`mpremium\` , \`mrozetler\` , \`mrehber\`}
    {field:Finansal Komutlar:\`mbanka\` , \`mgönder\` , \`mmarket\` , \`msatınal\` , \`möğren\` , \`mgünlük\` , \`mparam\` , \`mkurallar\`}
{field:Genel Komutlar:\`mprofil\` , \`mpgüncelle\` , \`msuç\` , \`miyilik\` , \`mgavatar\` , \`mkişilik\` , \`mavatar\` , \`msoygun\`
\`mdeepweb\` , \`mbankasoy\` , \`mhesapçal\` , \`mkumar\` , \`miphackle\` , \`mamarket\` , \`mkullan\`
\`mgiy\` , \`mevlilik\` , \`mboşan\`}
{field:Birlik Komutları:\`mbirlikkur\` , \`mbirlikkatıl\` , \`mbirlikayrıl\` , \`mbirlikreddet\` , \`mbirlikkabul\` , \`mbirlikat\` , \`mbirliğim\` , \`mbirlikkurallar\` , \`mbirlikgüncelle\` , \`mbirlikyatır\` , \`mbirlikçek\`}
;yes]
    $endif
    
    $if[$message!=]
    $reply[$messageID;{color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]}
    {thumbnail:$authorAvatar}
    {description:
    **Aranan Komut:** \`$message\`
    **Komut Açıklaması:** \`$commandInfo[$message[1];bkz]\`
    };yes]
    $onlyIf[$commandInfo[$message[1];name]!=;$username Üzgünüm komut listesinde böyle bişi yok]
    $endif
    `
}