module.exports = {
	name:"bug",
	bkz:["Komudun amacı bug bildiren birisi olduğunda ödül olarak bişiler verio işte sahip komudu"],
	code:`
	$if[$checkCondition[$message[1]==onayla]$checkCondition[$message[1]==reddet]==falsefalse]
	Bug \`onayla\` yada \`reddet\` yazabilirsiniz
	$endif
	$if[$message[1]==onayla]
$setGlobalUserVar[bug;$sum[$getGlobalUserVar[bug;$message[2]];1];$message[2]]

$if[$checkCondition[$getGlobalUserVar[bug;$message[2]]<10]==true]
$reply[$messageID;$userTag[$message[2]] Kişisine Bildirim yolladım;yes]
$wait[1ms]
$sendDM[$message[2];{color:GREEN}{author:Bug Bildirimi Onaylandı:$authorAvatar}
{description:Bildirmiş Olduğunuz Bug Onaylandı.

Kazanıldı = \`+1 Bug Avcısı Puanı\`
Hedef = \`$sum[$getGlobalUserVar[bug;$message[2]];1]/10\`

Açıklama = \`$filterMessage[$message;$message[2];$message[1]]\`}]
$onlyIf[$message[3]!=;Açıklama giriniz]
$onlyIf[$message[2]!=;Bir ID Giriniz]
$endif

$if[$checkCondition[$getGlobalUserVar[bug;$message[2]]==10]==true]
$reply[$messageID;$userTag[$message[2]] Kişisine Bildirim yolladım;yes]
$wait[1ms]
$sendDM[$message[2];{color:GREEN}{author:Bug Bildirimi Onaylandı:$authorAvatar}
{description:Bildirmiş Olduğunuz Bug Onaylandı.

Kazanıldı = \`Bug Avcısı Rozeti\`
$setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$message[2]]bug/;$message[2]]
Açıklama = \`$filterMessage[$message;$message[2];$message[1]]\`}]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$message[2]];bug/]!=true;]
$onlyIf[$message[3]!=;Açıklama giriniz]
$onlyIf[$message[2]!=;Bir ID Giriniz]
$endif

$if[$checkContains[$getGlobalUserVar[rozetler;$message[2]];bug]==true]
$reply[$messageID;$userTag[$message[2]] Kişisine Bildirim yolladım;yes]
$wait[1ms]
$sendDM[$message[2];{color:GREEN}{author:Bug Bildirimi Onaylandı:$authorAvatar}
{description:Bildirmiş Olduğunuz Bug Onaylandı.

Kazanıldı = \`+1 Bug Avcısı Puanı\`
Toplam Puan = \`$getGlobalUserVar[bug;$message[2]]\`

Açıklama = \`$filterMessage[$message;$message[2];$message[1]]\`}]
$onlyIf[$message[3]!=;Açıklama giriniz]
$onlyIf[$message[2]!=;Bir ID Giriniz]
$endif

$endif

$if[$message[1]==reddet]
$reply[$messageID;$userTag[$message[2]] Kişisine Bildirim yolladım;yes]
$sendDM[$message[2];{color:RED}{author:Bug Bildirimi Reddedildi:$authorAvatar}
{description:Bildirmiş Olduğunuz Bug Reddildi.

Reddedilme Sebebi = \`$filterMessage[$message;$message[2];$message[1]]\`}]
$onlyIf[$message[3]!=;Açıklama giriniz]
$onlyIf[$message[2]!=;Bir ID Giriniz]
$endif

$onlyForIDs[$botOwnerID;]
	`
}