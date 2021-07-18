module.exports = {
  name:"gavatar",
  bkz:["Avatarınızı güncellemek için"],
  code:`
  $if[$message[1]==1]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi 
  
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`1\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648039858241536/avataaars_6.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648039858241536/avataaars_6.png;$authorID]
  $endif
  
  $if[$message[1]==2]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`2\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648041015083049/avataaars_5.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648041015083049/avataaars_5.png;$authorID]
  $endif
  
  $if[$message[1]==3]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`3\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648043041587200/avataaars_4.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648043041587200/avataaars_4.png;$authorID]
  $endif
  
   $if[$message[1]==4]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Kadın\`
  Avatar Kodu: \`4\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648044585222174/avataaars_3.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648044585222174/avataaars_3.png;$authorID]
  $endif
  
  $if[$message[1]==5]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`5\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648047320170526/avataaars_1.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648047320170526/avataaars_1.png;$authorID]
  $endif
  
  $if[$message[1]==6]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Kadın\`
  Avatar Kodu: \`6\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648047546531840/avataaars_2.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648047546531840/avataaars_2.png;$authorID]
  $endif
  
  $if[$message[1]==7]
  $author[Avatar Seçme;$authorAvatar]
  $description[
  Avatar Değiştirildi
  
  Avatar Türü: \`Erkek\`
  Avatar Kodu: \`7\`
  ]
  $image[https://cdn.discordapp.com/attachments/828885521874288650/858648048347119646/avataaars.png]
  $setGlobalUserVar[avatar;https://cdn.discordapp.com/attachments/828885521874288650/858648048347119646/avataaars.png;$authorID]
  $endif
  
  
  $argsCheck[>1;Bir Avatar Kodu Yazınız ! Eğer bilmiyorsanız \`mavatar\` yazabilirsiniz.]
  $onlyIf[$checkCondition[$message[1]>7]!=true;Şuanda 7 Avatar Kodu Bulunmaktadır]
  $onlyIf[$checkCondition[$message[1]<1]!=true;Avatar Kodları 1'den başlar]
  `
}