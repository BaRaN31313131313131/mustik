module.exports = {
    name:"sunucu",
    bkz:["Sunucu hakkında detaylı olarak bilgi verir"],
    code:`
    $reply[$messageID;
    {author:$serverName:$replaceText[$serverIcon;null;$authorAvatar]}
    {thumbnail:$replaceText[$serverIcon;null;$authorAvatar]}
    {footer:Sorgulayan Kişi $userTag[$authorID]:$authorAvatar}
    
    {field:Diğer Bilgiler:Sunucunun Boost Sayısı: **$serverBoostCount**
    Sunucunun Boost Leveli: **$replaceText[$replaceText[$checkCondition[$serverBoostCount<1];true;Leveli Yok];false;] $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$serverBoostCount<15]$checkCondition[$serverBoostCount>1];truetrue;1 Level];falsefalse;];falsetrue;];truefalse;] $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[30>$serverBoostCount]$checkCondition[$serverBoostCount>14];truetrue;2 Level];falsefalse;];falsetrue;];truefalse;] $replaceText[$replaceText[$checkCondition[$serverBoostCount>29];true;3 Level];false;]**
    } 
    {field:Üye Bilgileri:Sunucudaki Toplam Üye: **$membersCount**
    Toplam Bot: **$botCount** = **$sub[$membersCount;$botCount]**
    Şuanda Aktif Olan Kişi Sayısı (Botlar Hariç): **$sub[$sum[$membersCount[$guildID;dnd];$membersCount[$guildID;online];$membersCount[$guildID;idle]];$botCount]** | (Botlar Dahil) **$sum[$membersCount[$guildID;dnd];$membersCount[$guildID;online];$membersCount[$guildID;idle]]**
    Çevrimiçi: **$membersCount[$guildID;online]** | Rahatsız Etmeyin: **$membersCount[$guildID;dnd]**
    Boşta: **$membersCount[$guildID;idle]** | Çevrimdışı/Görünmez: **$sub[$membersCount;$membersCount[$guildID;dnd];$membersCount[$guildID;online];$membersCount[$guildID;idle]]**
}
    {field:Genel Bilgiler:Sunucu İsmi: **$serverName**
    Sunucu Sahibi: **$userTag[$ownerID]** | **$ownerID**
    Sunucu Bölgesi: **$replaceText[$replaceText[$replaceText[$serverRegion;russia;Rusya;-1];europe;Avrupa;-1];india;Hindistan;-1]**
    Sunucu ID'si: **$guildID**}
    {color:GREEN};yes]`
}