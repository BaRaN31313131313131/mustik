module.exports = {
    name:"kullan",
    bkz:["Elinizdeki itemleri kullanmak için"],
    code:`
    $if[$checkCondition[$message[1]==a1]$checkCondition[$message[1]==a2]$checkCondition[$message[1]==a3]$checkCondition[$message[1]==a4]$checkCondition[$message[1]==a5]$checkCondition[$message[1]==s1]$checkCondition[$message[1]==s2]$checkCondition[$message[1]==s3]$checkCondition[$message[1]==s4]==falsefalsefalsefalsefalsefalsefalsefalsefalse]
> Aldığınız Avatarı Kullanmak İçin **a1** , **a2** , **a3** , **a4** yada **a5** yazınız

> Sandığınızı açmak için **s1** , **s2** , **s3** , **s4** yazınız
    $endif

$if[$message==s1]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[ödül]];$authorID]
$sendMessage[Ödülün **$username** - **$get[ödül]** Para;no]
$wait[1s]
$editMessage[$get[mesaj];<:msandik1:862736934744752159> Gümüş sandığını açıyorsun **$username** - **1**{delete:2s}]
$wait[1s]
$editMessage[$get[mesaj];<:msandik1:862736934744752159> Gümüş sandığını açıyorsun **$username** - **2**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik1:862736934744752159> Gümüş sandığını açıyorsun **$username** - **3**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik1:862736934744752159> Gümüş sandığını açıyorsun **$username** - **4**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik1:862736934744752159> Gümüş sandığını açıyorsun **$username** - **5**]
$wait[1s]
$let[mesaj;$sendMessage[<:msandik1:862736934744752159> Gümüş sandığını açıyorsun.;yes]]
$let[ödül;$random[500;2000]]
$setGlobalUserVar[s1;$sub[$getGlobalUserVar[s1;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[s1;$authorID]!=0;<:msandik1:862736934744752159> Gümüş Sandığınız yok !]
$endif

$if[$message==s2]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[ödül]];$authorID]
$sendMessage[Ödülün **$username** - **$get[ödül]** Para;no]
$wait[1s]
$editMessage[$get[mesaj];<:msandik2:862736990708432946> Altın sandığını açıyorsun **$username** - **1**{delete:2s}]
$wait[1s]
$editMessage[$get[mesaj];<:msandik2:862736990708432946> Altın sandığını açıyorsun **$username** - **2**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik2:862736990708432946> Altın sandığını açıyorsun **$username** - **3**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik2:862736990708432946> Altın sandığını açıyorsun **$username** - **4**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik2:862736990708432946> Altın sandığını açıyorsun **$username** - **5**]
$wait[1s]
$let[mesaj;$sendMessage[<:msandik2:862736990708432946> Altın sandığını açıyorsun.;yes]]
$let[ödül;$random[750;4500]]
$setGlobalUserVar[s1;$sub[$getGlobalUserVar[s1;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[s2;$authorID]!=0;<:msandik2:862736990708432946> Altın Sandığınız yok !]
$endif

$if[$message==s3]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[ödül]];$authorID]
$sendMessage[Ödülün **$username** - **$get[ödül]** Para;no]
$wait[1s]
$editMessage[$get[mesaj];<:msandik3:862737037676380161> Elmas sandığını açıyorsun **$username** - **1**{delete:2s}]
$wait[1s]
$editMessage[$get[mesaj];<:msandik3:862737037676380161> Elmas sandığını açıyorsun **$username** - **2**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik3:862737037676380161> Elmas sandığını açıyorsun **$username** - **3**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik3:862737037676380161> Elmas sandığını açıyorsun **$username** - **4**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik3:862737037676380161> Elmas sandığını açıyorsun **$username** - **5**]
$wait[1s]
$let[mesaj;$sendMessage[<:msandik3:862737037676380161> Elmas sandığını açıyorsun.;yes]]
$let[ödül;$random[1000;7500]]
$setGlobalUserVar[s1;$sub[$getGlobalUserVar[s1;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[s3;$authorID]!=0;<:msandik3:862737037676380161> Elmas Sandığınız yok !]
$endif

$if[$message==s4]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[ödül]];$authorID]
$sendMessage[Ödülün **$username** - **$get[ödül]** Para;no]
$wait[1s]
$editMessage[$get[mesaj];<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun **$username** - **1**{delete:2s}]
$wait[1s]
$editMessage[$get[mesaj];<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun **$username** - **2**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun **$username** - **3**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun **$username** - **4**]
$wait[1s]
$editMessage[$get[mesaj];<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun **$username** - **5**]
$wait[1s]
$let[mesaj;$sendMessage[<:msandik4:862737083574517770> Zümrüt sandığını açıyorsun.;yes]]
$let[ödül;$random[1500;15000]]
$setGlobalUserVar[s1;$sub[$getGlobalUserVar[s1;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[s4;$authorID]!=0;<:msandik4:862737083574517770> Zümrüt Sandığınız yok !]
$endif



    $if[$message==a1]
    $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/858277684185661501/860091451089879050/avataaars_7.png;$authorID]
    $color[GREEN]
    $image[https://cdn.discordapp.com/attachments/858277684185661501/860091451089879050/avataaars_7.png]
    $description[Yeni Avatarınız]
        $onlyIf[$getGlobalUserVar[a1;$authorID]!=yok;Bu avatar sizde bulunmuyor]
    $endif
    $if[$message==a2]
    $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/858277684185661501/860091994524352522/avataaars_8.png;$authorID]
    $color[GREEN]
    $image[https://cdn.discordapp.com/attachments/858277684185661501/860091994524352522/avataaars_8.png]
    $description[Yeni Avatarınız]
    $onlyIf[$getGlobalUserVar[a2;$authorID]!=yok;Bu avatar sizde bulunmuyor]
    $endif
    $if[$message==a3]
    $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/858277684185661501/860092416429260800/avataaars_9.png;$authorID]
    $color[GREEN]
    $image[https://cdn.discordapp.com/attachments/858277684185661501/860092416429260800/avataaars_9.png]
    $description[Yeni Avatarınız]
        $onlyIf[$getGlobalUserVar[a3;$authorID]!=yok;Bu avatar sizde bulunmuyor]

    $endif
    $if[$message==a4]
    $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/858277684185661501/860093026016690176/avataaars_10.png;$authorID]
    $color[GREEN]
    $image[https://cdn.discordapp.com/attachments/858277684185661501/860093026016690176/avataaars_10.png]
    $description[Yeni Avatarınız]
        $onlyIf[$getGlobalUserVar[a4;$authorID]!=yok;Bu avatar sizde bulunmuyor]

    $endif
    $if[$message==a5]
    $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/858277684185661501/860093364689960970/avataaars_11.png;$authorID]
    $color[GREEN]
    $image[https://cdn.discordapp.com/attachments/858277684185661501/860093364689960970/avataaars_11.png]
    $description[Yeni Avatarınız]
        $onlyIf[$getGlobalUserVar[a5;$authorID]!=yok;Bu avatar sizde bulunmuyor]

    $endif
    $globalCooldown[5s;Biraz bekle dostum !]
    `
}