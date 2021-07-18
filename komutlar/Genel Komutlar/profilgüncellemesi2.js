module.exports = {
	name:"$alwaysExecute",
	code:`
	$if[$checkCondition[$getGlobalUserVar[spotify;$authorID]!=yok]$checkCondition[$getGlobalUserVar[youtube;$authorID]!=yok]$checkCondition[$getGlobalUserVar[github;$authorID]!=yok]$checkCondition[$getGlobalUserVar[website;$authorID]!=yok]$checkCondition[$getGlobalUserVar[instagram;$authorID]!=yok]==truetruetruetruetrue]
$sendDM[$authorID;{color:GREEN}
{author:Rozet Kazanıldı:$authorAvatar}
{description:Kazanılan Rozet = :busts_in_silhouette: 

*Rozet Açıklaması: **Artık sosyal birisiyim***}]
$setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]sosyal/;$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=true;]
$endif

$if[$checkCondition[$getGlobalUserVar[youtube;$authorID]==yok]==true]
$sendDM[$authorID;{color:RED}
{author:Rozet Kaybedildi:$authorAvatar}
{description:Kaybedilen Rozet = :busts_in_silhouette: 

*Kaybetme sebebi: **Herhangi bir iletişim adresini sildin***}]
$setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];sosyal/];$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=false;]
$endif

$if[$checkCondition[$getGlobalUserVar[spotify;$authorID]==yok]==true]
$sendDM[$authorID;{color:RED}
{author:Rozet Kaybedildi:$authorAvatar}
{description:Kaybedilen Rozet = :busts_in_silhouette: 

*Kaybetme sebebi: **Herhangi bir iletişim adresini sildin***}]
$setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];sosyal/];$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=false;]
$endif

$if[$checkCondition[$getGlobalUserVar[website;$authorID]==yok]==true]
$sendDM[$authorID;{color:RED}
{author:Rozet Kaybedildi:$authorAvatar}
{description:Kaybedilen Rozet = :busts_in_silhouette: 

*Kaybetme sebebi: **Herhangi bir iletişim adresini sildin***}]
$setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];sosyal/];$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=false;]
$endif

$if[$checkCondition[$getGlobalUserVar[instagram;$authorID]==yok]==true]
$sendDM[$authorID;{color:RED}
{author:Rozet Kaybedildi:$authorAvatar}
{description:Kaybedilen Rozet = :busts_in_silhouette: 

*Kaybetme sebebi: **Herhangi bir iletişim adresini sildin***}]
$setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];sosyal/];$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=false;]
$endif

$if[$checkCondition[$getGlobalUserVar[github;$authorID]==yok]==true]
$sendDM[$authorID;{color:RED}
{author:Rozet Kaybedildi:$authorAvatar}
{description:Kaybedilen Rozet = :busts_in_silhouette: 

*Kaybetme sebebi: **Herhangi bir iletişim adresini sildin***}]
$setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];sosyal/];$authorID]
$onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];sosyal/]!=false;]
$endif
	`
}