const aoi = require("aoi.js")
const bot = new aoi.Bot({
token:"TOKEN GİRİNİZ", 
prefix: "PREFİXİNİ GİRİNİZ",
})

 
bot.onMessage({
  guildOnly: false
})
bot.loadCommands(`./komutlar/`)

bot.onGuildLeave()
bot.onGuildJoin()

bot.variables({
  prefix:"",
  kişilik:"yok",
  rozetler:"",
  isim:"yok",
  yaş:"yok",
  cinsiyet:"yok",
  instagram:"yok",
  github:"yok",
  youtube:"yok",
  website:"yok",
  spotify:"yok",
  coin:0,
  bcoin:0,
  bsınır:1000,
  bankasınır2:500,
  bücret:1000,
  padlock:"yok",
  seviye: 1,
  skpuan:1000,
  spuan:0,
  kpuan:0,
  kapuan:0,
  avatar:"",
  premium:"yok",
  isimd:1,
  sunucu:0,
  durum:"",
  silah:"yok",
  eldiven:"yok",
  maske:"yok",
  hacker:"yok",
  hackerlik:"Yok",
  hesap:"yok",
  hesapb:"",
  lmesaj:"var",
  savun:"yok",
  bıçak:"yok",
  ip:0,
  savun2:"yok",
  hırsız:"",
  bug:0,
  cooldown:"",
  a1:"yok",
  a2:"yok",
  a3:"yok",
  a4:"yok",
  a5:"yok",
  pc:"yok",
  taramalı:"yok",
  çuval:"yok",
  telafi:"",
  kurallar:0,
  kural:"yok",
  aranma:"yok",
  şans:"",
  seçim:"yok",
  evlilik:"",
  1:"yok",
  2:"yok",
  3:"yok",
  birlik:"yok",
  birliky:"",
  birlikm:"",
  birlikü:"",
  birliküye:"25",
  birliksınır:"100000",
  birlikpara:"0",
  birlikler:"",
  istek:"",
  bkurallar:"yok",
  koruma:"yok",
  gem:0,
  halat:"yok",
  karate:"",
  boks:"",
  s1:0,
  s2:0,
  s3:0,
  s4:0
})

//DURUMLAR
bot.status({
  text: "Mustik Ekonomi ve RolePlay Botu",
  type: "PLAYING",
  time: 13
})
bot.status({
  text: "$serverCount Sunucu | $allMembersCount Üye",
  type: "PLAYING",
  time: 13
})
bot.status({
  text: "myardım | mprofil | mkişilik ve Daha Fazlası",
  type: "PLAYING",
  time: 13
})
bot.status({
  text: "$serverCount Sunucu | $allMembersCount Üye",
  type: "PLAYING",
  time: 13
})
bot.status({
  text: "Mustik Version: 0.0.1",
  type: "PLAYING",
  time: 13
})
//DURUMLAR



//KİŞİLİK SEÇME
bot.command({
  name:"kişilik",
  bkz:["Kahraman yada kötü bir adam olmanın ilk adımı"],
  code:`
  $reactionCollector[$splitText[1];$authorID;1m;🦸‍♂️,🦹‍♂️;kahraman,kötü;yes]
  $textSplit[$sendMessage[{title:$username[$clientID] Kişilik Seçme}{thumbnail:$userAvatar[$clientID]}{description:
Hem iyi hemde kötü olmak zor bir iştir.
Hem katil yada hem iyilik yapan bir adam / kadın olamazsın.

Tek bir safta yer alabilirsin.
Sen nereyi tercih edeceksin ?

Kötü bir adam olup kahramanları yokedip bu sefil dünyayı mı yönetmek istersin
Yada böyle kötüleri haklayıp adalet dağıtan bir kahraman mı ?
Seçimini asla değiştiremezsin $username

🦸‍♂️= Kahraman
🦹‍= Kötü Adam}
{color:BLUE};yes]]
   
  $onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;]
  $onlyIf[$guildID!=;]
  `
})
bot.awaitedCommand({
  name:"kahraman",
  code:`
  $channelSendMessage[$channelID;Kötüleri haklamakta bol şans dostum...{delete:5s}]
  $wait[1s]
  $botTyping
  $channelSendMessage[$channelID;Demek kahraman olmayı seçtin...{delete:6s}]
  $clearReactions[$channelID;$message[1];all]
  $setGlobalUserVar[kişilik;kahraman;$authorID]  
  $suppressErrors
  $deleteMessage[$channelID;$message[1]]
  $sendDM[$authorID;{color:GREEN}{author:Rozet Kazanıldı.:$authorAvatar}
  {description:Kazanılan Rozet - $customEmoji[mkahraman;856156367891070976]
  
  *Rozet Açıklaması = **Sende bir kahraman olabilirsin...***}]
$setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]kahraman/;$authorID]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;Çakal 1 kişilik alabilirsin]

  `
}) 
bot.awaitedCommand({
  name:"kötü",
  code:`
$channelSendMessage[$channelID;Dünyayı ele geçirmede bol şans.{delete:5s}]
  $wait[1s]
  $botTyping
  $channelSendMessage[$channelID;Kahramanları yokedip...{delete:6s}]
  $clearReactions[$channelID;$message[1];all]
  $suppressErrors
  $setGlobalUserVar[kişilik;kötü;$authorID]  
    $deleteMessage[$channelID;$message[1]]
 $sendDM[$authorID;{color:RED}{author:Rozet Kazanıldı.:$authorAvatar}
  {description:Kazanılan Rozet - $customEmoji[mkotu;856156367891070976]
  
  *Rozet Açıklaması = **Dünya sahtekar ve buna ayak uydurman gerekiyor***}]
  $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]kötü/;$authorID]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;Çakal 1 kişilik alabilirsin]
  `
})
//KİŞİLİK SEÇME


//EKLENDİM ATILDIM
bot.botJoinCommand({
channel: "kanal id",
code: `
$sendWebhook[Webhook id;Webhook token;{color:GREEN}
{author:Yeni bir sunucuya eklendim !:$authorAvatar}
{thumbnail:$replaceText[$serverIcon;null;$authorAvatar]}
{description:Ekleyen Sunucunun İsmi = $serverName
Sunucunun Üye Sayısı = $membersCount
Sunucu ID'si = $guildID

Sunucu Sahibi = $userTag[$ownerID[$guildID]]
Ekleyen Kişi = $userTag[$authorID]}
{footer:Toplam $serverCount sunucu olduk !:$userAvatar[$clientID]}]

$if[$membersCount>99]
$setGlobalUserVar[sunucu;$sum[$getGlobalUserVar[sunucu;$authorID];1];$authorID]
$endif
$sendDM[$ownerID;\`$serverName\` Sunucusuna eklediğin için teşekkürler :)
$if[$membersCount>99]
Sunucu Üyesi 100 üzeri olduğu için 1 puan ekledim $sum[1;$getGlobalUserVar[sunucu;$authorID]]/10
$endif
]
`
})
bot.botLeaveCommand({
channel: "kanal id",
code: `
$sendWebhook[Webhook id;Webhook token;{color:RED}
{author:Yeni bir sunucudan atıldım !:$authorAvatar}
{thumbnail:$replaceText[$serverIcon;null;$authorAvatar]}
{description:Atan Sunucunun İsmi = $serverName
Sunucunun Üye Sayısı = $membersCount
Sunucu ID'si = $guildID

Sunucu Sahibi = 
Atan Kişi = $userTag[$authorID]}
{footer:Toplam $serverCount sunucu kaldık !:$userAvatar[$clientID]}]

$if[$membersCount>99]
$setGlobalUserVar[sunucu;$sub[$getGlobalUserVar[sunucu;$authorID];1];$authorID]
$endif
`
})
//EKLENDİM ATILDIM

//AVATAR SEÇME
bot.command({
  name:"avatar",
  bkz:["Standart avatarları sıralar"],
  code:`
  $reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣;1,2,3,4,5,6,7;yes]
  $textSplit[$sendMessage[{color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle};yes]]
`
})
bot.awaitedCommand({
  name:"7",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`7\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648048347119646/avataaars.png}]
`
}) 
bot.awaitedCommand({
  name:"6",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Kadın\`
  Avatar Kodu: \`6\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648047546531840/avataaars_2.png}]
`
})
bot.awaitedCommand({
  name:"5",
  code:`$editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`5\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648047320170526/avataaars_1.png}]
`
}) 
bot.awaitedCommand({
  name:"4",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Kadın\`
  Avatar Kodu: \`4\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648044585222174/avataaars_3.png}]
`
})
bot.awaitedCommand({
  name:"3",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`3\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648043041587200/avataaars_4.png}]
`
}) 
bot.awaitedCommand({
  name:"2",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`2\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648041015083049/avataaars_5.png}]
`
})
bot.awaitedCommand({
  name:"1",
  code:`
  $editMessage[$message[1];{author:Avatar Seçme:$authorAvatar}
  {color:GREEN}{description:Selam Avatar Seçmek İçin Numaraya Bas ve Uygun olanı mgavatar <kod> ile güncelle
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`1\`}
  {image:https://cdn.discordapp.com/attachments/828885521874288650/858648039858241536/avataaars_6.png}]
`
})
//AVATAR SEÇME

//MARKET SİSTEMİ
bot.command({
  name:"market",
  bkz:["Marketten güzel şeyler alabilirsin"],
  aliases:["shop"],
  code:`
  $reactionCollector[$splitText[1];$authorID;2m;1️⃣,2️⃣,3️⃣;one,two,three;yes]
  $textSplit[$sendMessage[{author:Mustik - Market:$authorAvatar}
  {color:GREEN}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/858938697452748820/duke.gif}
  {description:DUKE : Ne Almak İstersiniz};yes]`  
})
bot.awaitedCommand({
  name:"one",
  code:`
  $editMessage[$message[1];{author:Mustik - Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  🔒 Padlock: Bunu Alarak Bankanı Süresiz Olarak Koruyabilirsin : Fiyatı \`5000\` | Kod: **1**
  <:myukseltme:859357225163816970> Banka Kapasitesi: Bunun alarak banka kapasitenizi yükseltebilirsiniz: Fiyatı \`5000\` | Kod: **2**
  🔪 Bıçak: Kendini sokaktaki hırsızlardan korumak için alman gereklidir. : Fiyatı: \`50\` | Kod: **3**
  
  <:mkarmaskesi:860079981392035851> Kar Maskesi: Yüzünü gizlemek için lazım olabilir. : Fiyatı: \`50\` | Kod: **4**
  💻 Bilgisayar: İşlerini yapmakta yardımcı olabilir. : Fiyatı: \`10000\` | Kod: **5**
  💰 Çuval: Belki içine birşey koyarsın zamanında. : Fiyatı: \`15\` | Kod: **6**

  <:mgyuzuk:860824533405401108> Gümüş Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`3000\` | Kod: **7**
  <:mayuzuk:860824915551453215> Altın Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`8000\` | Kod: **8**
  <:meyuzuk:860824583330332752> Elmas Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`15000\` | Kod: **9**
 
 <:mgardiyan:861319500585369640> Koruma: Sokaktaki kötü hırsızlardan korumak için alabilirsin belki : Fiyatı: \`10000\` (24 Saatliktir) | Kod: **10**
 <:mhalat:862023703676321822> Halat: Kahramanların işine yarayabilir : Fiyatı: \`50\` | Kod: **11**
  }{footer:Sayfa 1/3 | Satın Almak İçin msatınal <item kodu>:$authorAvatar}]
`})
bot.awaitedCommand({
  name:"two",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  Avatar 1: <:avatar1:860093837014597632> | Fiyat: **2500** | Kod: **a1**
  Avatar 1: <:avatar2:860093885493149706> | Fiyat: **2500** | Kod: **a2**
  Avatar 1: <:avatar3:860093925645221898> | Fiyat: **2500** | Kod: **a3**
  Avatar 1: <:avatar4:860093961062318111> | Fiyat: **2500** | Kod: **a4**
  Avatar 1: <:avatar5:860093988894670868> | Fiyat: **2500** | Kod: **a5**

*Avatarların tam listesi için **mavatarmarket***

  }
{footer:Sayfa 2/3 | Satın Almak İçin msatınal <item kodu>:$authorAvatar}]
`})
bot.awaitedCommand({
  name:"three",
  code:`
  $editMessage[$message[1];{author:Mustik Boost - Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  **3 Saatlik 2x Kazanç** : 10 Mücevher 💎 | Kod: **m1**
  **1 Haftalık Koruma** : 5 Mücevher 💎 | Kod: **m2**

  
  }
{footer:Sayfa 3/3 | Satın Almak İçin msatınal <item kodu>:$authorAvatar}]
`})
//MARKET SİSTEMİ

//PROFİL SİSTEMİ
bot.command({
  name:"profil",
  bkz:["Profilinize Bakabilirsiniz"],
  code:`
  $reactionCollector[$splitText[1];$authorID;2m;1️⃣,2️⃣,3️⃣,4️⃣;bir,iki,üç,dört;yes]
  $textSplit[$sendMessage[{footer:Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Profili:$userAvatar[$mentioned[1]]}
  {description:$if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]==]
    *Maalesef rozetin hiç yok.İlk rozetini mkişilik yazarak alabilirsin !*
    $endif
    $if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]!=]
    **Sahip Olunan Rozetler =** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rozetler;$mentioned[1;yes]];/; ];kahraman;<:mkahraman:857623416071913482>];kötü;<:mkotu:857623904733626398>];evilhero;:persevere:];ilk;:smiling_imp:];one;:slight_smile:];two;:confused:];old;☠️];developer;<:mdeveloper:859177958912163860>];hacker;🎩];sosyal;👥];bug;<:mbug:859788254794350622>];star;⭐]
    $endif
    **Senin Hakkında Bilgiler (IC)**
    $if[$getGlobalUserVar[durum;$mentioned[1;yes]]==kötü] \`Lakap: Kötü Kahraman\` $endif
    *İsmin:* **$replaceText[$getGlobalUserVar[isim;$mentioned[1;yes]];yok;Belirtilmemiş]**
    *Yaşın:* **$replaceText[$getGlobalUserVar[yaş;$mentioned[1;yes]];yok;Belirtilmemiş]**
    *Cinsiyet:* **$replaceText[$replaceText[$replaceText[$getGlobalUserVar[cinsiyet;$mentioned[1;yes]];yok;Belirtilmemiş];erkek;Erkek :man:];kadın;Kadın :woman:]**
    
    *Aranma:* $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[aranma;$mentioned[1;yes]];yok;<:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];biraz;<:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];orta;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];çok;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915>];fazla;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460>]
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[birlik;$mentioned[1;yes]]==yok];true;];false;*Birliğin:* **$getGlobalUserVar[birlik;$mentioned[1;yes]]**]

    *Seviye Bilgi:* **$getGlobalUserVar[seviye;$mentioned[1;yes]] |  $getGlobalUserVar[spuan;$mentioned[1;yes]]/$getGlobalUserVar[skpuan;$mentioned[1;yes]]** 
    *Paran:* **$truncate[$getGlobalUserVar[coin;$mentioned[1;yes]]]** | *Bankadaki Paran:* **$truncate[$getGlobalUserVar[bcoin;$mentioned[1;yes]]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]**
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[evlilik;$mentioned[1;yes]]==];true;];false;*Evlilik: $replaceText[$replaceText[$replaceText[$splitText[1];-1-;<:meyuzuk:860824583330332752>];-2-;<:mayuzuk:860824915551453215>];-3-;<:mgyuzuk:860824533405401108>] $userTag[$splitText[2]]*]
    *Mücevherin:* **$getGlobalUserVar[gem;$mentioned[1;yes]]** 💎

    *Kahraman Puanın:* **$getGlobalUserVar[kpuan;$mentioned[1;yes]]**
    \`Kötülük Puanın: $getGlobalUserVar[kapuan;$mentioned[1;yes]]\`
    *Hackerlik Bilgisi:* **$getGlobalUserVar[hackerlik;$mentioned[1;yes]]**
    
  }

  ;yes]
  $textSplit[$getGlobalUserVar[evlilik;$mentioned[1;yes]];/]
`  
})
bot.awaitedCommand({
  name:"bir",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 1/4 | Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin IC Bilgileri:$userAvatar[$mentioned[1]]}
{description:$if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]==]
  *Maalesef rozetin hiç yok.İlk rozetini mkişilik yazarak alabilirsin !*
  $endif
  $if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]!=]
  **Sahip Olunan Rozetler =** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rozetler;$mentioned[1;yes]];/; ];kahraman;<:mkahraman:857623416071913482>];kötü;<:mkotu:857623904733626398>];evilhero;:persevere:];ilk;:smiling_imp:];one;:slight_smile:];two;:confused:];old;☠️];developer;<:mdeveloper:859177958912163860>];hacker;🎩];sosyal;👥];bug;<:mbug:859788254794350622>];star;⭐]
  $endif
  **Senin Hakkında Bilgiler (IC)**
  
  *İsmin:* **$replaceText[$getGlobalUserVar[isim;$mentioned[1;yes]];yok;Belirtilmemiş]**
  *Yaşın:* **$replaceText[$getGlobalUserVar[yaş;$mentioned[1;yes]];yok;Belirtilmemiş]**
  *Cinsiyet:* **$replaceText[$replaceText[$replaceText[$getGlobalUserVar[cinsiyet;$mentioned[1;yes]];yok;Belirtilmemiş];erkek;Erkek :man:];kadın;Kadın :woman:]**
  
  *Aranma:* $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[aranma;$mentioned[1;yes]];yok;<:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];biraz;<:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];orta;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915><:mbosyildiz:860458237127163915>];çok;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mbosyildiz:860458237127163915>];fazla;<:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460><:mdoluyildiz:860458305604157460>]
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[birlik;$mentioned[1;yes]]==yok];true;];false;*Birliğin:* **$getGlobalUserVar[birlik;$mentioned[1;yes]]**]

  *Seviye Bilgi:* **$getGlobalUserVar[seviye;$mentioned[1;yes]] |  $getGlobalUserVar[spuan;$mentioned[1;yes]]/$getGlobalUserVar[skpuan;$mentioned[1;yes]]** 
  *Paran:* **$truncate[$getGlobalUserVar[coin;$mentioned[1;yes]]]** | *Bankadaki Paran:* **$truncate[$getGlobalUserVar[bcoin;$mentioned[1;yes]]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]**
  $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[evlilik;$mentioned[1;yes]]==];true;];false;*Evlilik: $replaceText[$replaceText[$replaceText[$splitText[1];-1-;<:meyuzuk:860824583330332752>];-2-;<:mayuzuk:860824915551453215>];-3-;<:mgyuzuk:860824533405401108>] $userTag[$splitText[2]]*]

  *Kahraman Puanın:* **$getGlobalUserVar[kpuan;$mentioned[1;yes]]**
  \`Kötülük Puanın: $getGlobalUserVar[kapuan;$mentioned[1;yes]]\`
  *Hackerlik Bilgisi:* **$getGlobalUserVar[hackerlik;$mentioned[1;yes]]**}

]
$textSplit[$getGlobalUserVar[evlilik;$mentioned[1;yes]];/]
`})
bot.awaitedCommand({
  name:"iki",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 2/4 | Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin OOC Bilgileri:$userAvatar[$mentioned[1]]}
  {description:    **Senin Hakkında Bilgiler (OOC)**
  
    *Discord İsmin:* **$username[$mentioned[1;yes]]**
    *Discord Etiketin:* **#$discriminator[$mentioned[1;yes]]**
    *Discord Kimliğin (ID):* **$mentioned[1;yes]**
    
    *İletişim Linkleri:*}
    $if[$getGlobalUserVar[spotify;$mentioned[1;yes]]==yok]
    {field:Spotify Girilmemiş:mpgüncelle ekle spotify <spotify adresiniz> ile güncelleyebilirsiniz:yes}
    $endif
    $if[$getGlobalUserVar[spotify;$mentioned[1;yes]]!=yok]
    {field:Spotify :[Tıkla](https://open.spotify.com/user/$getGlobalUserVar[spotify;$mentioned[1;yes]]):yes}
    $endif
  
    $if[$getGlobalUserVar[instagram;$mentioned[1;yes]]==yok]
    {field:İnstagram Girilmemiş:mpgüncelle ekle instagram <instagram adresiniz> ile güncelleyebilirsiniz:yes}
    $endif
    $if[$getGlobalUserVar[instagram;$mentioned[1;yes]]!=yok]
    {field:Instagram :[Tıkla](https://www.instagram.com/$getGlobalUserVar[instagram;$mentioned[1;yes]]):yes}
    $endif
    
    $if[$getGlobalUserVar[youtube;$mentioned[1;yes]]==yok]
    {field:YouTube Girilmemiş:mpgüncelle ekle youtube <youtube adresiniz> ile güncelleyebilirsiniz:yes}
    $endif
    $if[$getGlobalUserVar[youtube;$mentioned[1;yes]]!=yok]
    {field:YouTube :[Tıkla](https://www.youtube.com/channel/$getGlobalUserVar[youtube;$mentioned[1;yes]]):yes}
    $endif
    
    $if[$getGlobalUserVar[github;$mentioned[1;yes]]==yok]
    {field:GitHub Girilmemiş:mpgüncelle ekle github <github adresiniz> ile güncelleyebilirsiniz:yes}
    $endif
    $if[$getGlobalUserVar[github;$mentioned[1;yes]]!=yok]
    {field:GitHub :[Tıkla](https://github.com/$getGlobalUserVar[github;$mentioned[1;yes]]):yes}
    $endif
    
    $if[$getGlobalUserVar[website;$mentioned[1;yes]]==yok]
    {field:Site Girilmemiş:mpgüncelle ekle website <site adresiniz> ile güncelleyebilirsiniz:yes}
    $endif
    $if[$getGlobalUserVar[website;$mentioned[1;yes]]!=yok]
    {field:Site :[Tıkla]($getGlobalUserVar[website;$mentioned[1;yes]]):yes}
    $endif

]
`})
bot.awaitedCommand({
  name:"üç",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 3/4 | Sorgulayan $username:$authorAvatar}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Envanteri:$userAvatar[$mentioned[1]]}
  {description:
    $if[$getGlobalUserVar[bıçak;$mentioned[1;yes]]$getGlobalUserVar[pc;$mentioned[1;yes]]$getGlobalUserVar[maske;$mentioned[1;yes]]$getGlobalUserVar[padlock;$mentioned[1;yes]]==yokyokyokyok]
*Kişinin envanteri boş*
$endif  
$replaceText[$replaceText[$getGlobalUserVar[padlock;$mentioned[1;yes]];yok;];var;🔒 Padlock]
$replaceText[$replaceText[$getGlobalUserVar[pc;$mentioned[1;yes]];yok;];var;💻 Bilgisayar]
$replaceText[$replaceText[$getGlobalUserVar[halat;$mentioned[1;yes]];yok;];var;<:mhalat:862023703676321822> Halat]

$replaceText[$replaceText[$getGlobalUserVar[maske;$mentioned[1;yes]];yok;];var;<:mkarmaskesi:860079981392035851> Kar Maskesi]
$replaceText[$replaceText[$replaceText[$getGlobalUserVar[eldiven;$mentioned[1;yes]];yok;];giydi;🧤 Eldiven];var;🧤 Eldiven]
$replaceText[$replaceText[$getGlobalUserVar[çuval;$mentioned[1;yes]];yok;];var;💰 Çuval]

$replaceText[$replaceText[$getGlobalUserVar[bıçak;$mentioned[1;yes]];yok;];var;🔪 Bıçak]
$replaceText[$replaceText[$getGlobalUserVar[silah;$mentioned[1;yes]];yok;];var;<:msilah:860076464169680897> Desert Eagle]
$replaceText[$replaceText[$getGlobalUserVar[taramalı;$mentioned[1;yes]];yok;];var;<:mak47:860190567610449951> AK-47]

$replaceText[$replaceText[$getGlobalUserVar[1;$mentioned[1;yes]];yok;];var;<:meyuzuk:860824583330332752> Elmas Yüzük]
$replaceText[$replaceText[$getGlobalUserVar[2;$mentioned[1;yes]];yok;];var;<:mayuzuk:860824915551453215> Altın Yüzük]
$replaceText[$replaceText[$getGlobalUserVar[3;$mentioned[1;yes]];yok;];var;<:mgyuzuk:860824533405401108> Gümüş Yüzük]

  }


]
`})
bot.awaitedCommand({
  name:"dört",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 4/4 | Sorgulayan $username:$authorAvatar}
  {image:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Avatarı (boş ise eklememiştir):$userAvatar[$mentioned[1]]}


]
`})
//PROFİL SİSTEMİ

//HATIRLAT
bot.command({
  name: "hatırlat",
  bkz:["Yazdığınız şeyi yazdığınız süre sonra hem dmden hemde kanaldan hatırlatma mesajı gönderir"], 
  code: `\`$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; Saniye];m; Dakika];h; Saat];d; Gün]\` Süre sonra \`$messageSlice[1]\` Hatırlatması eklendi.
$setTimeout[$message[1];userID: $authorID
message: $messageSlice[1]
kanal: $channelID]
$suppressErrors[Zaman biçimi yanlış. Lütfen düzeltin !]
$onlyIf[$message[2]!=;Hatırlatma sebebini giriniz]
$onlyIf[$checkContains[$message[1];.;,]!=true;Küsüratlı sayılar yazamazsınız !]
$onlyIf[$checkContains[$message[1];m;h;d]!=false;Süre cinsi ingilizce yani
Dakika = m
Saat = h
Gün = d]
$onlyIf[$message[1]!=;Süreyi giriniz]`
});

bot.timeoutCommand({
  channel: "$channelID",
  code: `$sendDM[$timeoutData[userID];{color:GREEN}{author:Hatırlatma Geldi:$authorAvatar}
  {description:$timeoutData[message]}
  {footer:Hatırlatmamı istemiştiniz:$authorAvatar}
]
$channelSendMessage[$timeoutData[kanal];<@$timeoutData[userID]>
{color:GREEN}{author:Hatırlatma Geldi:$authorAvatar}
{description:$timeoutData[message]}
{footer:Hatırlatmamı istemiştiniz:$authorAvatar};no]
  `
});
//HATIRLAT

//ÇEVRİMİÇİ SOYGUN
bot.command({
  name:"soygun",
  bkz:["Etiketlediğin kişiyi soyabilirsin. Eğer kişi aktif ise üstündeki parayı eğer değilse bankasındaki parayı soyacaksın"],
  code:`
  $if[$status[$mentioned[1]]==offline]
    $if[$getGlobalUserVar[kişilik;$authorID]==kahraman]
    $sendDM[$author;Arada Kahraman olduğunu unutma ?]
    $endif

    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[bcoin;$authorID];$get[random2]];$authorID]
    $wait[1ms]
    $setGlobalUserVar[bcoin;$sub[$getGlobalUserVar[bcoin;$mentioned[1]];$get[random2]];$mentioned[1]]
    $wait[1ms]
    $sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden \`$get[random2]\` Miktarı çalındı.;no]
    $deletecommand
    $suppressErrors
    $let[random2;$truncate[$divide[$random[1;$getGlobalUserVar[bcoin;$mentioned[1]]];3]]]


    $onlyIf[$checkCondition[$getGlobalUserVar[bcoin;$mentioned[1]]<1]!=true;Bu kişi fakir onunla uğraşma boşver.]  
    $onlyIf[$getGlobalUserVar[padlock;$mentioned[1]]!=var;Kişinin Banka Sisteminde PadLock bulunmaktadır.]
    
    $endif
  
    $if[$status[$mentioned[1]]!=offline]

    $if[$getGlobalUserVar[koruma;$mentioned[1]]==var]

$if[$getGlobalUserVar[coin;$authorID]>10]
$setGlobalUserVar[coin;0;$authorID]
$wait[1ms]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1]];$get[apara]];$mentioned[1]]
$endif

$if[$getGlobalUserVar[coin;$authorID]>10]
$editMessage[$get[mesaj];$userTag[$mentioned[1]]: Tamam gidelim]
$wait[2s]
$editMessage[$get[mesaj];Arkandan bir <:mgardiyan:861319500585369640> koruma gelip senin cüzdanındaki paraları aldı]
$wait[2s]
$endif
$wait[1s]

$if[$getGlobalUserVar[coin;$authorID]<10]
$editMessage[$get[mesaj];$userTag[$mentioned[1]]: Tamam bırakalım fakiri bidaha çalmaz enayi]
$wait[2s]
$editMessage[$get[mesaj];Gardiyan: Efendim bu fakir]
$wait[2s]
$editMessage[$get[mesaj];Arkandan bir <:mgardiyan:861319500585369640> koruma gelip cüzdanını inceledi]
$endif

$wait[2s]
$editMessage[$get[mesaj];$userTag[$mentioned[1]] sana dönüp gülmeye başladı]
$wait[2s]
$editMessage[$get[mesaj];Yüzüstü yere düştün]
$wait[2s]
$editMessage[$get[mesaj];Tam yaklaşırken birden arkandan silahla vuruldun]
$wait[2s]
$let[mesaj;$sendMessage[$userTag[$mentioned[1]] Kişisinin arka cebindeki cüzdana göz koydun.;yes]]

$if[$getGlobalUserVar[coin;$authorID]>10]
$let[apara;$truncate[$divide[$get[para];3]]]
$let[para;$getGlobalUserVar[coin;$authorID]]
$endif

$endif

$if[$getGlobalUserVar[koruma;$mentioned[1]]==yok]

  $if[$getGlobalUserVar[savun;$mentioned[1]]==yok]
  $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[random]];$authorID]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$mentioned[1]];$get[random]];$mentioned[1]]
  $editMessage[$get[mesaj];Kişinin savunmak için eşyası olmadığı için \`$get[random]\` çalınmıştır]
  $wait[1s]
  $let[mesaj;$sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden para çalınıyor.;yes]]
  $endif

  $if[$getGlobalUserVar[savun;$mentioned[1]]==var]
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[random]];$authorID]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$mentioned[1]];$get[random]];$mentioned[1]]
  $editMessage[$get[mesaj];Kişi savunmadığı için \`$get[random]\` çalınmıştır]
  $wait[1s]
  $endif

  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 1 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 2 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 3 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif

  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 4 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif

  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 5 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $awaitMessages[$mentioned[1];6s;savun;savun;]
  $let[mesaj;$sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden para çalınıyor.;yes]]
  $setGlobalUserVar[hırsız;$authorID;$mentioned[1]]
  $endif

  $suppressErrors
  $let[random;$truncate[$divide[$random[1;$getGlobalUserVar[coin;$mentioned[1]]];3]]]
  $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$mentioned[1]]<1]!=true;Adam fakir usta soyma bi zahmet]  
  $endif
    $endif
  $deletecommand

$globalCooldown[2h;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[2h;globalUser;soygun;$authorID];s;];hour;Saat];minute;Dakika];econd;Saniye];and;]** sonra deneyebilirsiniz]
    $onlyIf[$isBot[$mentioned[1]]!=true;Bot'u niye soymaya çalışırsın ki ?]
  $onlyIf[$mentioned[1]!=$authorID;Deneme bence]
    $onlyIf[$mentioned[1]!=;Kimi soyacaksan onu etiketlemelisin]
    $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
  `
})
bot.awaitedCommand({
  name: "savun",
  code: `
  $setGlobalUserVar[savun2;yok;$authorID]
  $setGlobalUserVar[hırsız;;$authorID]
  $wait[10s]
  $sendMessage[Paranı başarıyla savundun $username.
  Seni soyan kişi para cezası olarak -2500 parasından eksildi;no]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$getGlobalUserVar[hırsız;$authorID]]
  $setGlobalUserVar[savun2;var;$authorID]
`
})
//ÇEVRİMİÇİ SOYGUN

//GARDİYAN SATIN AL
bot.command({
  name: "satınal",
  code: `
$setGlobalUserVar[koruma;var;$authorID]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];10000];$authorID]
$sendMessage[\`24 Saatlik\` Korumanız başladı.
Bittiğinde bu kanala bildirim gelecektir.;no]

$setTimeout[24h;kid: $authorID
mesaj: <@$authorID> korumanız bitti. Tekrar almak için \`msatınal 10\` yazabilirsiniz.
kanal: $channelID]

$onlyIf[$checkCondition[9999>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinde \`10000\` Para yok]
$onlyIf[$getGlobalUserVar[koruma;$authorID]!=var;Zaten korunma almışsınız !]
$onlyIf[$message==10;]`
});
bot.timeoutCommand({
code: `
$setGlobalUserVar[koruma;yok;$timeoutData[kid]]
$channelSendMessage[$timeoutData[kanal];<@$timeoutData[kid]>
{color:RED}{author:Koruma gitti:$authorAvatar}
{description:$timeoutData[mesaj]}
{footer:Koruma Bitti !:$authorAvatar};no]
  `
});
//GARDİYAN SATIN AL

//AVATAR MARKET
bot.command({
  name:"avatarmarket",
  bkz:["Satılan avatarları tam haliyle görebilirsiniz"],
  aliases:["amarket"],
  code:`
  $reactionCollector[$splitText[1];$authorID;2m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;a1,a2,a3,a4,a5;yes]
  $textSplit[$sendMessage[
  {author:Mustik - Avatar Market:$authorAvatar}
  {color:$replaceText[$replaceText[$getGlobalUserVar[a1;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860091451089879050/avataaars_7.png}
  {description:Avatar Kodu: **a1**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a1;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 1/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ;yes]`  
})
bot.awaitedCommand({
  name:"a1",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}
  {color:$replaceText[$replaceText[$getGlobalUserVar[a1;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860091451089879050/avataaars_7.png}
  {description:Avatar Kodu: **a1**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a1;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 1/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ]
`})
bot.awaitedCommand({
  name:"a2",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}
  {color:$replaceText[$replaceText[$getGlobalUserVar[a2;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860091994524352522/avataaars_8.png}
  {description:Avatar Kodu: **a2**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a2;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 2/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ]
`})
bot.awaitedCommand({
  name:"a3",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}
  {color:$replaceText[$replaceText[$getGlobalUserVar[a3;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860092416429260800/avataaars_9.png}
  {description:Avatar Kodu: **a3**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a3;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 3/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ]
`})
bot.awaitedCommand({
  name:"a4",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}
  {color:$replaceText[$replaceText[$getGlobalUserVar[a4;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860093026016690176/avataaars_10.png}
  {description:Avatar Kodu: **a4**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a4;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 4/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ]
`})
bot.awaitedCommand({
  name:"a5",
  code:`
  $editMessage[$message[1];{author:Mustik - Avatar Market:$authorAvatar}
 {color:$replaceText[$replaceText[$getGlobalUserVar[a5;$authorID];var;GREEN];yok;RED]}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/860093364689960970/avataaars_11.png}
  {description:Avatar Kodu: **a5**
  Fiyatı: **2500**
  Durum: $replaceText[$replaceText[$getGlobalUserVar[a5;$authorID];var;Sizde Bulunuyor];yok;Alınmamış]
  }
  {footer:Sayfa 5/5 | Almak İçin msatınal <avatar kodu>:$authorAvatar}
  ]
`})
//AVATAR MARKET


//KURALLAR
bot.command({
  name:"kurallar",
  bkz:["Botun kurallarını listeler"],
  code:`
  $color[GREEN]
  $author[Mustik - Kurallar;$userAvatar[$clientID]]
  $thumbnail[$userAvatar[$clientID]]
  $title[Kural ihlalinde hesabınız sıfırlanabilir/karalisteye alınabilirsiniz.]
  $footer[$getGlobalUserVar[kurallar;$clientID] Kişi kuralları kabul etti;$authorAvatar]
  $description[
1 - Para hesabı açarak hesabınızı saklamayın.

2 - Bottaki buglardan (açıklardan) yararlanmayın.

3- Bottaki komutları çalmayın/kopyalamayın

4 - Alt hesap ile para kasmayın (Max 1 Alt hesap)

5 - Bot üzerinden ticaret yapmayın.

6 - Soygun komudundan kaçmak için **aktif** iken **çevrimdışı** durumuna geçmeyin.

*Kabul et yazmanız önemli değildir botu kullanan herkes bu kuralları kabul etmiş **__sayılacaktır__***
$replaceText[$replaceText[$getGlobalUserVar[kural;$authorID];yok;*kabul etmek için **kabulet** yazınız*];etti;]]
$awaitMessages[$authorID;5m;kabulet;kabulet;] 
  `
})
bot.awaitedCommand({
    name: "kabulet",
    code: `
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];25000];$authorID]
    Kuralları kabul ettiniz
    $setGlobalUserVar[kurallar;$sum[$getGlobalUserVar[kurallar;$clientID];1];$clientID]
$setGlobalUserVar[kural;etti;$authorID]
$onlyIf[$getGlobalUserVar[kural;$authorID]!=etti;]`
})
//KURALLAR

//EVLİLİK
bot.command({
  name:"evlilik",
  aliases:["evlen"],
  bkz:["Başkasıyla aşk yaşayabilirsin"],
  code:`
<@$mentioned[1]> sana <@$authorID>'den evlenme teklifi geldi. $replaceText[$replaceText[$replaceText[-$message[2]-;-1-;$customEmoji[meyuzuk;856156367891070976]];-2-;$customEmoji[mayuzuk;856156367891070976]];-3-;$customEmoji[mgyuzuk;856156367891070976]]
1 dakika içinde cevap vermelisin.
*kabul* , *reddet*
$attachment[$replaceText[https://api.cool-img-api.ml/ship?user=$authorAvatar&user2=$userAvatar[$mentioned[1]];webp;png]]
$awaitMessages[$mentioned[1];1m;kabul,reddet;kabul,reddet;*Maalesef evlilik teklifin reddedili <@$authorID> :(*.]

$onlyIf[$getGlobalUserVar[$message[2];$authorID]!=yok;Bu yüzük sende yok !]
$onlyIf[$checkCondition[$message[2]==1]$checkCondition[$message[2]==2]$checkCondition[$message[2]==3]!=falsefalsefalse;Yüzük Numarası 1,2 yada 3 olmalıdır.]
$onlyIf[$message[2]!=;Yüzük Numarasını gir]
$setGlobalUserVar[evlilik;$message[2]/$authorID;$mentioned[1]]
$onlyIf[$mentioned[1]!=$authorID;Kendine evlilik teklifi edemezsin]
$onlyIf[$isBot[$mentioned[1]]!=true;Bota evlilik teklifi edemezsin]
$onlyIf[$mentioned[1]!=;Birini etiketlermisin ?]
$onlyIf[$getGlobalUserVar[evlilik;$authorID]==;Başkasıyla evlisin !]
$onlyIf[$getGlobalUserVar[evlilik;$mentioned[1]]==;Kişi başkasıyla evlisin !]
`
})
bot.awaitedCommand({
    name: "kabul",
    code: `
$setGlobalUserVar[$get[yüzük];yok;$splitText[2]]
$wait[500ms]
$setGlobalUserVar[evlilik;-$get[yüzük]-/$splitText[2];$authorID]
$setGlobalUserVar[evlilik;-$get[yüzük]-/$authorID;$splitText[2]]
Evliliğiniz hayırlı olsun...
$attachment[$replaceText[https://api.cool-img-api.ml/ship?user=$authorAvatar&user2=$userAvatar[$splitText[2]];webp;png]]
$wait[500ms]
$let[yüzük;$splitText[1]]

$textSplit[$getGlobalUserVar[evlilik;$authorID];/]


    `
})
bot.awaitedCommand({
    name: "reddet",
    code: `
$setGlobalUserVar[$get[yüzük];yok;$splitText[2]]
$wait[500ms]
Üzgünüm <@$splitText[2]> reddedildin... 💔
$textSplit[$getGlobalUserVar[evlilik;$authorID];/]

    `
})
bot.command({
  name:"boşan",
  bkz:["Sevmediğin kişiyle evlendiysen boşanabilirsin"],
  code:`
  $setGlobalUserVar[evlilik;;$authorID]
  $wait[500ms]
  $setGlobalUserVar[evlilik;;$splitText[2]]
Bu evlilik buraya kadarmış...
$userTag[$splitText[2]] Kişisinden boşandın.

$textSplit[$getGlobalUserVar[evlilik;$authorID];/]
  `
})
//EVLİLİK