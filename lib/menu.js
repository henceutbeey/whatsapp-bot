const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mensublisensikan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/Urbaexyz/whatsapp-bot

Instagram: https://instagram.com/thoriqazzikraa/

Best regards, Developer.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, jame, betime, blockNumber, prem, banned, hit, cts, waver) => {
    return `
*┏━──Information Bot*
*┃*
*┃➥ Repo : github.com/thoriqazzikraa/whatsapp-bot*
*┃➥ Library : @open-wa/wa-automate*
*┃➥ Bot Name : Deadrz BOT*
*┃➥ Whatsapp Bot Ver : 2.11.0*
*┃➥ Creator : Thoriq Azzikra*
*┃➥ Moded : Dedi Humaedi*
*┃➥ Date : ${betime}*
*┃➥ Time : ${jame}*
*┃➥ Premium : ${blockNumber.length} User*
*┃➥ Banned : ${banned.length} User*
*┃➥ Block  : ${prem.length} User*
*┃➥ Hit : ${hit.length}*
*┃*
*┗━──────────────*


*┏━──Whatsapp Person*
*┃https://wa.me/+6281385351530*
*┗━──────────────*

*⌜ Command Campuran ⌟*
  
*┏━───────────────╮*
*┃➥${prefix}s*
*┃➥${prefix}sfull*
*┃➥${prefix}autostik*
*┃➥${prefix}sgiffull*
*┃➥${prefix}startgif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}artinama*
*┃➥${prefix}meme*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}jsolat*
*┃➥${prefix}sreddit*
*┃➥${prefix}resep*
*┃➥${prefix}cuaca*
*┃➥${prefix}chord*
*┃➥${prefix}whatanime*
*┃➥${prefix}aiquote*
*┃➥${prefix}doggo*
*┃➥${prefix}quote*
*┃➥${prefix}cerpen*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}resi*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}howmuch*
*┃➥${prefix}google*
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}santet*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}addbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}tod*
*┃➥${prefix}infobmkg*
*┃➥${prefix}bucin*
*┃➥${prefix}glitch*
*┃➥${prefix}distance*
*┃➥${prefix}emojisticker*
*┃➥${prefix}jadwalbola*
*┃➥${prefix}caklontong*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}kusonime*
*┃➥${prefix}twitter*
*┃➥${prefix}quotesen*
*┃➥${prefix}detail*
*┃➥${prefix}imgtourl*
*┃➥${prefix}missing*
*┃➥${prefix}silverpb*
*┃➥${prefix}goldpb*
*┃➥${prefix}fakta2*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}simi*
*┃➥${prefix}bot*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink*
*┃➥${prefix}linknobg*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}tr*
*┃➥${prefix}kisahnabi*
*┃➥${prefix}buatgrup*
*┃➥${prefix}afk*
*┃➥${prefix}sgifwm*
*┃➥${prefix}addstiker*
*┃➥${prefix}delstiker*
*┃➥${prefix}liststiker*
*┃➥${prefix}addvn*
*┃➥${prefix}delvn*
*┃➥${prefix}listvn*
*┃➥${prefix}addimg*
*┃➥${prefix}delimg*
*┃➥${prefix}listimg*
*┃➥${prefix}shitposting*
*┃➥${prefix}postig*
*┃➥${prefix}infoloker*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}burn*
*┃➥${prefix}trash*
*┃➥${prefix}readmore*
*┃➥${prefix}3dphoto*
*┃➥${prefix}sfile*
*┃➥${prefix}sfiledown*
*┃➥${prefix}tobecontinue*
*┃➥${prefix}thuglife*
*┃➥${prefix}postigurl*
*┃➥${prefix}level*
*┃➥${prefix}leaderboard*
*┃➥${prefix}appstore*
*┃➥${prefix}twister*
*┃➥${prefix}dankmemes*
*┃➥${prefix}carimanga*
*┃➥${prefix}discord*
*┃➥${prefix}maps*
*┃➥${prefix}addvid*
*┃➥${prefix}delvid*
*┃➥${prefix}listvid*
*┃➥${prefix}stalkig*
*┃➥${prefix}githubstalk*
*┃➥${prefix}ssweb*
*┃➥${prefix}cekjodoh*
*┃➥${prefix}katabijak*
*┃➥${prefix}faktaunik*
*┃➥${prefix}fakboy*
*┃➥${prefix}katadedi*
*┗━───────────────╯*

*⌜ Downloader & Media ⌟*

*┏━───────────────╮*
*┃➥${prefix}pinterest*
*┃➥${prefix}pinterestdown*
*┃➥${prefix}pinimg*
*┃➥${prefix}ig*
*┃➥${prefix}ig2*
*┃➥${prefix}igstory*
*┃➥${prefix}igstory2*
*┃➥${prefix}igreels*
*┃➥${prefix}ytshorts*
*┃➥${prefix}play*
*┃➥${prefix}tiktok*
*┃➥${prefix}tiktok2*
*┃➥${prefix}tiktok3*
*┃➥${prefix}tiktoknowm*
*┃➥${prefix}tiktokaudio*
*┃➥${prefix}rtiktok*
*┃➥${prefix}ytsearch*
*┃➥${prefix}trendingyt*
*┃➥${prefix}trendmusic*
*┃➥${prefix}trendgaming*
*┃➥${prefix}ytmp3*
*┃➥${prefix}ytmp4*
*┃➥${prefix}ytmp4hd*
*┃➥${prefix}twitter*
*┃➥${prefix}joox*
*┃➥${prefix}tomp3*
*┃➥${prefix}spotify*
*┃➥${prefix}spotify2*
*┃➥${prefix}spotifysearch*
*┃➥${prefix}spotifydown*
*┃➥${prefix}whatsong*
*┃➥${prefix}mediafire*
*┗━───────────────╯*

*⌜ Asupan Otak⌟ ツ*

*┏━───────────────╮*
*┃➥${prefix}santuy*
*┃➥${prefix}ghea*
*┃➥${prefix}ukhty*
*┃➥${prefix}bocil*
*┗━───────────────╯*

*⌜ Anime & NSFW ⌟ ツ*

*┏━───────────────╮*
*┃➥${prefix}tebakanime*
*┃➥${prefix}nanimelatest*
*┃➥${prefix}nanimesr*
*┃➥${prefix}topanime*
*┃➥${prefix}doujin*
*┃➥${prefix}rhug*
*┃➥${prefix}slap*
*┃➥${prefix}waifu*
*┃➥${prefix}nsfwgif*
*┃➥${prefix}bjgif*
*┃➥${prefix}cumgif*
*┃➥${prefix}kissgif*
*┃➥${prefix}bjanime*
*┃➥${prefix}randomhug*
*┃➥${prefix}baka*
*┃➥${prefix}animeavatar*
*┃➥${prefix}neko*
*┃➥${prefix}rwink*
*┃➥${prefix}crygif*
*┃➥${prefix}randompat*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}nekonsfw*
*┃➥${prefix}spank*
*┃➥${prefix}classic*
*┃➥${prefix}kuni*
*┃➥${prefix}trapnime*
*┃➥${prefix}cuddle*
*┃➥${prefix}tickle*
*┃➥${prefix}pokegif*
*┃➥${prefix}feetgif*
*┃➥${prefix}sologif*
*┗━───────────────╯*

*⌜ Images ⌟*

*┏━───────────────╮*
*┃➥${prefix}amel*
*┃➥${prefix}pictcogan*
*┃➥${prefix}pictcecan*
*┃➥${prefix}blackpink*
*┃➥${prefix}logoph*
*┗━───────────────╯*

*⌜ About Bot ⌟*

*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}discordserver*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┃➥${prefix}runtime*
*┃➥${prefix}shutdown*
*┃➥${prefix}eval*
*┗━───────────────╯*

*⌜ Owner Bot ⌟*

*┏━───────────────╮*
*┃➥${prefix}exec*
*┃➥${prefix}exif*
*┃➥${prefix}eval*
*┃➥${prefix}mute*
*┃➥${prefix}unmute*
*┃➥${prefix}ban*
*┃➥${prefix}unban*
*┃➥${prefix}addprem*
*┃➥${prefix}delprem*
*┃➥${prefix}deleteban*
*┃➥${prefix}bc*
*┃➥${prefix}bcgrup*
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall*
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}addcogan*
*┃➥${prefix}addcecan*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallvn*
*┃➥${prefix}delallimg*
*┃➥${prefix}block*
*┃➥${prefix}unblock*
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┃➥${prefix}listwelcome*
*┗━───────────────╯*

*┏━──Contributors*
*┃*
*┃➥ Thoriq Azzikra*
*┃➥ AlvioAdjiJanuar*
*┃➥ Ravaa Ardiansyah*
*┃➥ Ihsana Fajar*
*┃➥ Nabil*
*┃*
*┗━──────────────*

*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*
`
}
exports.help = help

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

const admin = (prefix) => {
    return `
*┏━────Admin Group*
*┃*
*┃➥${prefix}antidelete*
*┃➥${prefix}setdesc*
*┃➥${prefix}hidetag*
*┃➥${prefix}ohidetag*
*┃➥${prefix}antivirtex*
*┃➥${prefix}viewonce*
*┃➥${prefix}welcome*
*┃➥${prefix}left*
*┃➥${prefix}add*
*┃➥${prefix}kick* <reply pesan orang yang ingin dikick>
*┃➥${prefix}pkick* <tag member yang ingin dikick>
*┃➥${prefix}promote* @tag
*┃➥${prefix}opromote* <reply pesan yang ingin dipromote>
*┃➥${prefix}odemote* <reply pesan yang ingin didemote>
*┃➥${prefix}demote* @tag
*┃➥${prefix}infoall*
*┃➥${prefix}del*
*┃➥${prefix}leveling on/off*
*┃➥${prefix}seticon*
*┃➥${prefix}revoke link gc*
*┃➥${prefix}setgroupname*
*┃➥${prefix}resend*
*┃➥${prefix}edotensei*
*┃➥${prefix}oedotensei* <reply pesan member>
*┃➥${prefix}nsfw on/off*
*┃*
*┗━──────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}
exports.admin = admin

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

BNI : 1211466769
Paypal  :https://www.paypal.com/paypalme/dedisadja
OVO : 082149555685
DANA : 082149555685
GOPAY : 082149555685
SHOPEEPAY : 082149555685

Terimakasih. 

-Dedi Humaedi`
}

exports.kodebahasa = () => {
    return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}
