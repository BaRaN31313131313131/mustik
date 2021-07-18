module.exports = {
    name:"levelmesaj",
    bkz:["Eğer level mesajlarından rahatsız oluyorsanız kullanabilirsiniz"],
    code:`
    $if[$checkCondition[$message==aç]$checkCondition[$message==kapat]==falsefalse]
    Level Mesajını Açmak İçin \`mlevelmesaj aç\` 
Kapatmak için \`mlevelmesaj kapat\` yazınız
    $endif
    
    $if[$message[1]==aç]
    $reply[$messageID;Level mesajları başarıyla açılmıştır.;yes]
    $setGlobalUserVar[lmesaj;var;$authorID]
    $onlyIf[$getGlobalUserVar[lmesaj;$authorID]!=var;Zaten level mesajlarınız aktif]
    $endif

    $if[$message[1]==kapat]
    $reply[$messageID;Level mesajları başarıyla kapatılmıştır.;yes]
    $setGlobalUserVar[lmesaj;yok;$authorID]
    $onlyIf[$getGlobalUserVar[lmesaj;$authorID]!=yok;Zaten level mesajlarınız deaktif]
    $endif
    `
}