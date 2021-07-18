module.exports = {
	name:"$alwaysExecute",
	code:`
	$sendWebhook[Webhook id;Webhook token;{color:GREEN}
	{author:Mustik - Mesaj Log:$authorAvatar}
	{thumbnail:$replaceText[$serverIcon;null;$authorAvatar]}
	{description:Kişi: \`$userTag\` | \`$authorID\` | <@$authorID>

	> Mesaj: $message
	
	Durumu: \`$replaceText[$replaceText[$replaceText[$replaceText[$status;dnd;Rahatsız Etmeyin 🔴];idle;Boşta 🟡];offline;Çevrimdışı ⚫];online;Çevrimiçi 🟢]\`
	
	Sunucu:
	Sunucu İsmi: $serverName
	Sunucu Sahibi: \`$userTag[$ownerID]\` | \`$ownerID\` | <@$ownerID>
	Sunucu Üyesi: \`$membersCount\`
  Sunucu IDsi: \`$guildID\`
	}]
$onlyIf[$isBot[$authorID]!=true;{suppress:no}]
$suppressErrors[]
	$onlyIf[$authorID!=860578558262902804;]
	`
}