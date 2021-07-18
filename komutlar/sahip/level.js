module.exports = {
    name:"$alwaysExecute",
    code:`
    $if[$getGlobalUserVar[evlilik;$authorID]==]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[1;3]]];$authorID]
    $setGlobalUserVar[spuan;$sum[$getGlobalUserVar[spuan;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[1;4]]];$authorID]
    $globalCooldown[30s;]
    $endif
    $if[$channelID==760270355431686195]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$random[0;9]];$authorID]
    $setGlobalUserVar[spuan;$sum[$getGlobalUserVar[spuan;$authorID];$random[1;10]];$authorID]
    $globalCooldown[5s;]
    $endif

    $if[$checkCondition[$getGlobalUserVar[evlilik;$authorID]==-1-]==true]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[0;50]]];$authorID]
    $setGlobalUserVar[spuan;$sum[$getGlobalUserVar[spuan;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[1;50]]];$authorID]
    $globalCooldown[1m;]
    $endif
    $if[$checkCondition[$getGlobalUserVar[evlilik;$authorID]==-2-]==true]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[0;30]]];$authorID]
    $setGlobalUserVar[spuan;$sum[$getGlobalUserVar[spuan;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[1;30]]];$authorID]
    $globalCooldown[2m;]
    $endif
    $if[$checkCondition[$getGlobalUserVar[evlilik;$authorID]==-3-]==true]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[0;15]]];$authorID]
    $setGlobalUserVar[spuan;$sum[$getGlobalUserVar[spuan;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[1;15]]];$authorID]
    $globalCooldown[3m;]
    $endif

    $if[$getGlobalUserVar[spuan;$authorID]>$getGlobalUserVar[skpuan;$authorID]]
    Level Atladın <@$authorID> :tada:
    Yeni Levelin **$getGlobalUserVar[seviye;$authorID]**
    Ödüller **$multi[$getGlobalUserVar[seviye;$authorID];$random[20;55]] Para**
    $wait[1s]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$multi[$getGlobalUserVar[seviye;$authorID];$random[50;150]]];$authorID]
    $wait[1ms]
    $setGlobalUserVar[skpuan;$multi[$getGlobalUserVar[skpuan;$authorID];2];$authorID]
    $setGlobalUserVar[seviye;$sum[$getGlobalUserVar[seviye;$authorID];1];$authorID]
    $setGlobalUserVar[spuan;0;$authorID]
    $onlyIf[$getGlobalUserVar[lmesaj;$authorID]!=yok;]
    $endif


$suppressErrors[]
$onlyIf[$isBot[$authorID]!=true;{suppress:no}]
`,
}