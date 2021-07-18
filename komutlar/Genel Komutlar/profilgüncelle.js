module.exports = {
  name:"pgüncelle",
  bkz:["Profilinizdeki bazı şeyleri güncellemek için kullanabilirsiniz"],
  code:`
$if[$checkCondition[$message[1]==ekle]$checkCondition[$message[1]==sil]==falsefalse]
Kullanım Hatası
mpgüncelle \`ekle\` yada \`sil\` işlemi yapabilirsiniz 
$onlyIf[$checkContains[$message[2];avatar]!=true;]

$endif

$if[$message[1] $checkCondition[$message[2]==spotify]$checkCondition[$message[2]==youtube]$checkCondition[$message[2]==github]$checkCondition[$message[2]==website]$checkCondition[$message[2]==instagram]$checkCondition[$message[2]==isim]$checkCondition[$message[2]==yaş]$checkCondition[$message[2]==cinsiyet]==ekle falsefalsefalsefalsefalsefalsefalsefalse]
Kullanım Hatası
mpgüncelle ekle yaptıktan sonra \`youtube\` , \`github\` , \`website\` , \`instagram\` ,\`spotify\` , \`isim\` , \`yaş\` yada \`cinsiyet\` kullanabilirsin
$endif

$if[$message[1] $checkCondition[$message[2]==spotify]$checkCondition[$message[2]==youtube]$checkCondition[$message[2]==github]$checkCondition[$message[2]==website]$checkCondition[$message[2]==instagram]==sil falsefalsefalsefalsefalse]
Kullanım Hatası
mpgüncelle sil yaptıktan sonra \`youtube\` , \`github\` , \`website\` , \`instagram\` yada \`spotify\` kullanabilirsin
$endif

$if[$message[1] $message[2]==ekle youtube]
$color[GREEN]
$description[Kanal Adresin

[$message[3]](https://www.youtube.com/channel/$message[3]) Olarak Belirlenmiştir
]
$setGlobalUserVar[youtube;$message[3];$authorID]
$onlyIf[$checkContains[$message;https://www.youtube.com/channel/;channel;www.;.com;/;https]!=true;Sadece https://www.youtube.com/channel/ sonrasındaki yeri yazmalısın]
$onlyIf[$message[3]!=;YouTube kanal adını gir !]
$endif
$if[$message[1] $message[2]==sil youtube]
YouTube kaldırıldı
$setGlobalUserVar[youtube;yok;$authorID]
$endif

$if[$message[1] $message[2]==ekle instagram]
$color[GREEN]
$description[İnstagram Adresin

[$message[3]](https://www.instagram.com/$message[3]) Olarak Belirlenmiştir
]
$setGlobalUserVar[instagram;$message[3];$authorID]
$onlyIf[$checkContains[$message;https://www.instagram.com/;www.;.com;/;https]!=true;Sadece https://www.instagram.com/ sonrasındaki yeri yazmalısın]
$onlyIf[$message[3]!=;İnstagram kullanıcı adını gir !]
$endif
$if[$message[1] $message[2]==sil instagram]
İnstagram kaldırıldı
$setGlobalUserVar[instagram;yok;$authorID]
$endif

$if[$message[1] $message[2]==ekle github]
$color[GREEN]
$description[Github Adresin

[$message[3]](https://www.github.com/$message[3]) Olarak Belirlenmiştir
]
$setGlobalUserVar[github;$message[3];$authorID]
$onlyIf[$checkContains[$message;https://github.com/;www.;.com;/;https]!=true;Sadece https://github.com/ sonrasındaki yeri yazmalısın]
$onlyIf[$message[3]!=;Github adını gir !]
$endif
$if[$message[1] $message[2]==sil github]
Github kaldırıldı
$setGlobalUserVar[github;yok;$authorID]
$endif

$if[$message[1] $message[2]==ekle website]
$color[GREEN]
$description[Site

[$message[3]]($message[3]) Olarak Belirlenmiştir
]
$setGlobalUserVar[website;$message[3];$authorID]
$onlyIf[$checkCondition[$getGlobalUserVar[premium;$authorID]==yok]$checkContains[$message[3];(;)]!=truetrue;Yapmaya çalıştığın şey premium özelliktir.]
$onlyIf[$checkContains[$message;discord]!=true;Discord Linkini koyamazsın zeki jojuk]
$onlyIf[$message[3]!=;Site adresini gir !]
$endif
$if[$message[1] $message[2]==sil website]
Site kaldırıldı
$setGlobalUserVar[website;yok;$authorID]
$endif

$if[$message[1] $message[2]==ekle spotify]
$color[GREEN]
$description[Spotify

[$message[3]](https://open.spotify.com/user/$message[3]) Olarak Belirlenmiştir
]
$setGlobalUserVar[spotify;$message[3];$authorID]
$onlyIf[$checkContains[$filterMessage[$message;$message[1];$message[2]];open]!=true;Sadece https://open.spotify.com/user/ sonrasındaki yeri yazmalısın]
$onlyIf[$message[3]!=;Spotify adresini gir !]
$endif
$if[$message[1] $message[2]==sil spotify]
Spotify kaldırıldı
$setGlobalUserVar[spotify;yok;$authorID]
$endif

$if[$message[1] $message[2]==ekle isim]
$setGlobalUserVar[isimd;$sub[$getGlobalUserVar[isimd;$authorID];1];$authorID]
IC İsmin güncellenmiştir
$setGlobalUserVar[isim;$message[3] $message[4];$authorID]
$wait[1ms]
$setGlobalUserVar[isim;$getGlobalUserVar[isim;$clientID] $message[3] $message[4];$clientID]
$wait[1ms]
$setGlobalUserVar[isim;$filterMessage[$getGlobalUserVar[isim;$clientID];$getGlobalUserVar[isim;$authorID]];$clientID]
$wait[1ms]
$onlyIf[$getGlobalUserVar[isimd;$authorID]!=0;İsim Değiştirme Hakkın Bulunmamaktadır !]
$onlyIf[$checkContains[$getGlobalUserVar[isim;$clientID];$message[3] $message[4]]!=true;Aldığın isim sistemde bulunan başka bir kişiye aittir]
$onlyIf[$message[3]!=;yeni ismini gir !]
$endif

$if[$message[1] $message[2]==ekle yaş]
IC Yaşın güncellenmiştir
$setGlobalUserVar[yaş;$message[3];$authorID]
$onlyIf[$message[3]!=;yaşını gir !]
$onlyIf[$getGlobalUserVar[yaş;$authorID]==yok;Yaşını değiştiremezsin]

$endif

$if[$message[1] $message[2]==ekle cinsiyet]
IC Cinsiyetin Güncellenmiştir
Yeni Cinsiyetin: $replaceText[$replaceText[$message[3];erkek;Erkek :man:];kadın;Kadın :woman:]
$setGlobalUserVar[cinsiyet;$message[3];$authorID]

$onlyIf[$checkCondition[$message[3]==erkek]$checkCondition[$message[3]==kadın]!=falsefalse;Cinsiyet \`erkek\` yada \`kadın\` olmalıdır.]
$onlyIf[$message[3]!=;Cinsiyetini **erkek** yada **kadın** olarak gir !]
$onlyIf[$checkContains[$getGlobalUserVar[cinsiyet;$authorID];erkek;kadın]!=true;Cinsiyet Değiştiremezsin]
$endif

$onlyIf[$checkContains[$message[2];avatar]!=true;]
  `
}