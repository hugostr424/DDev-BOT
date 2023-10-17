process.on("uncaughtException", console.error);
require("./config");

var pkg = require('./package.json');

if (pkg['author'] !== 'malindunimsara' || pkg['name'] !== 'DDEV' || pkg['license'] !== 'MIT') {
  console.log('Unauthorized access or modification detected. This action is not allowed.');
  process.exit(1);
}

const fs = require('fs');
const pm2 = require('pm2');
const util = require("util");
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);
const chalk = require("chalk");
const axios = require('axios');
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const { EmojiAPI } = require("emoji-api");
const { addBalance } = require("./lib/limit.js");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, fetchBuffer } = require('./lib/myfunc')
const _ = require("lodash");
const yargs = require("yargs/yargs");
const kaitime = moment.tz('Asia/Kolkata').format('HH:mm:ss');
const kaidate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss');
const speed = require('performance-now');
const eco = require('discord-mongoose-economy');
const thiccysapi = require('textmaker-thiccy');
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('ffmpeg-static').path;
// ffmpeg.setFfmpegPath(ffmpegPath);
const maker = require('mumaker');
const Jimp = require('jimp'); // for full dp etc.
const modapk = require("tod-api");
const { hentai } = require('./lib/scraper2.js');
const { instadl } = require('./lib/instadl');
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const githubstalk = require('./lib/githubstalk');

const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"]; // List of emojis for Space CMDs.

const gis = require("g-i-s");
const { MessageType } = require('baileysjs');
const {
  FajarNews, 
  BBCNews,
   metroNews,
   CNNNews,
   iNews,
   KumparanNews,
   TribunNews,
   DailyNews,
   DetikNews,
   OkezoneNews,
   CNBCNews,
   KompasNews,
   SindoNews,
   TempoNews,
   IndozoneNews,
   AntaraNews,
   RepublikaNews,
   VivaNews,
   KontanNews,
   MerdekaNews,
   KomikuSearch,
   AniPlanetSearch,
   KomikFoxSearch,
   KomikStationSearch,
   MangakuSearch,
   KiryuuSearch,
   KissMangaSearch,
   KlikMangaSearch,
   PalingMurah,
   LayarKaca21,
   AminoApps,
   Mangatoon,
   WAModsSearch,
   Emojis,
   CoronaInfo,
   JalanTikusMeme, 
   Cerpen,
   Quotes,
   Couples,
   Darkjokes
 } = require("dhn-api");
//"parse-ms": "^1.1.0",



//
        if(time2 < "23:59:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘕𝘐𝘎𝘏𝘛 🌌'

}

        if(time2 < "19:00:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘈𝘍𝘛𝘌𝘙𝘕𝘖𝘖𝘕 🌆'

}

        if(time2 < "17:00:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘈𝘍𝘛𝘌𝘙𝘕𝘖𝘖𝘕 🌇'

}

        if(time2 < "15:00:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘈𝘍𝘛𝘌𝘙𝘕𝘖𝘖𝘕 🏞'

}

        if(time2 < "12:00:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘔𝘖𝘙𝘕𝘐𝘕𝘎 🌅'

}

        if(time2 < "05:00:00"){

        var nowtime = '𝘎𝘖𝘖𝘋 𝘕𝘐𝘎𝘏𝘛 🏙'

}



//
const timestampe = speed();
  const latensie = speed() - timestampe

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}

const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");

global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
      ? new mongoDB(opts["db"])
      : new JSONFile(`src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function() {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };



//
let isSleeping = false; // Move the declaration here.
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let kaiaudio = JSON.parse(fs.readFileSync('./Media-Database/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json')); //
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();



//
module.exports = A17 = async (A17, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = global.prefa
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await A17.decodeJid(A17.user.id)
    const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = args.join(" ")
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const groupMetadata = m.isGroup ? await A17.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = pendaftar.includes(m.sender)
    const isBan = banUser.includes(m.sender)
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const isBanChat = m.isGroup ? banchat.includes(from) : false
    const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
    const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
    const antiWame = m.isGroup ? ntwame.includes(from) : false
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
    autoreadsw = true
    const content = JSON.stringify(m.message)
    const q = args.join(' ')

    const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')



    autoreadsw = true;
    _sewa.expiredCheck(A17, sewa);

    const reply = (teks) => {
            A17.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            A17.sendMessage(m.chat, { text: teks}, { quoted: m})
        }


    
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]

    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    if (m.message) {
      addBalance(m.sender, randomNomor(574), balance);
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
    }

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./storage/user/user.json", JSON.stringify(pendaftar));
    }

    if (global.autoreadpmngc) {
      if (command) {
        await A17.sendPresenceUpdate("composing", m.chat);
        A17.sendReadReceipt(from, m.sender, [m.key.id]);
      }
    }



    if (global.autoReadAll) {
      if (m.chat) {
        A17.sendReadReceipt(m.chat, m.sender, [m.key.id]);
      }
    }

    if (global.autoRecord) {
      if (m.chat) {
        A17.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        A17.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.chat) {
        A17.sendPresenceUpdate("available", m.chat);
      }
    }


    
    //Dm and Groups Autoreply/Bot chat




    //
    for (let anju of kaiaudio){
      if (budy === anju){
        result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
        A17.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
        }
    }



    //----------------------------------------------------------------------------------------------------------------//

  //don't edit this part.
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

function updateStatus() {
  const uptimeInSeconds = Math.floor(process.uptime());
  const uptimeFormatted = formatTime(uptimeInSeconds);


  function _0x582b(_0xabb6f8,_0x12cdd8){const _0x58e890=_0x58e8();return _0x582b=function(_0x582b90,_0x4387b3){_0x582b90=_0x582b90-0x189;let _0x932613=_0x58e890[_0x582b90];return _0x932613;},_0x582b(_0xabb6f8,_0x12cdd8);}function _0x58e8(){const _0x109554=['12896370RDSmnX','3BgvPel','189HbmdoW','18854HvEPNh','11TZHUID','9125326EcyeIg','464328lPaAMf','3400722cbWEOK','2263175KIczdo','12TaHNqM','2521564eqJRHK'];_0x58e8=function(){return _0x109554;};return _0x58e8();}(function(_0x429d7b,_0x532ab5){const _0x527567=_0x582b,_0x130eb4=_0x429d7b();while(!![]){try{const _0x75c57a=-parseInt(_0x527567(0x18b))/0x1+-parseInt(_0x527567(0x192))/0x2*(-parseInt(_0x527567(0x189))/0x3)+parseInt(_0x527567(0x191))/0x4*(-parseInt(_0x527567(0x190))/0x5)+-parseInt(_0x527567(0x18f))/0x6+parseInt(_0x527567(0x18d))/0x7+parseInt(_0x527567(0x18e))/0x8*(-parseInt(_0x527567(0x18a))/0x9)+parseInt(_0x527567(0x193))/0xa*(parseInt(_0x527567(0x18c))/0xb);if(_0x75c57a===_0x532ab5)break;else _0x130eb4['push'](_0x130eb4['shift']());}catch(_0x19ea04){_0x130eb4['push'](_0x130eb4['shift']());}}}(_0x58e8,0xa8dae));const status='\x0a\x20\x20ㅤㅤ👨‍💻ㅤㅤ〘\x20𝛪𝛸𝛥𝛥𝑅\x20𝐵𝛩𝑇\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻\x20𝙴𝙳𝙸𝚃𝙸𝙾𝙽\x20〙ㅤㅤ👩‍💻ㅤㅤㅤㅤ\x0a\x20\x20\x20\x20ㅤㅤㅤ            〘ㅤ\x20𝙰𝚄𝚃𝙾\x20𝚄𝙿𝚃𝙸𝙼𝙴:\x20'+uptimeFormatted+'ㅤ〙';

  A17.setStatus(status); // Set the status using A17.setStatus or your equivalent method

  // Update the status randomly within 5 minutes (300000 milliseconds)
  const randomTime = Math.floor(Math.random() * 300000) + 1000; // don't edit.
  setTimeout(updateStatus, randomTime);
}

// Initial call to start the random status updates
updateStatus();

            




	this.game = this.game ? this.game : {}
  let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
  if (room) {
  let ok
  let isWin = !1
  let isTie = !1
  let isSurrender = !1
  //reply(`[DEBUG]\n${parseInt(m.text)}`)
  if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
  isSurrender = !/^[1-9]$/.test(m.text)
  if (m.sender !== room.game.currentTurn) { 
  if (!isSurrender) return !0
  }
  if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
  reply({
  '-3': 'Game Has Ended',
  '-2': 'Invalid',
  '-1': 'Invalid Position',
  0: 'Invalid Position',
  }[ok])
  return !0
  }
  if (m.sender === room.game.winner) isWin = true
  else if (room.game.board === 511) isTie = true
  let arr = room.game.render().map(v => {
  return {
  X: '❌',
  O: '⭕',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  }[v]
  })
  if (isSurrender) {
  room.game._currentTurn = m.sender === room.game.playerX
  isWin = true
  }
  let winner = isSurrender ? room.game.currentTurn : room.game.winner
  let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Typed *surrender* to surrender and admited defeat`
  if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
  room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
  if (room.x !== room.o) await A17.sendText(room.x, str, m, { mentions: parseMention(str) } )
  await A17.sendText(room.o, str, m, { mentions: parseMention(str) } )
  if (isTie || isWin) {
  delete this.game[room.id]
  }
  }


	
//
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
  }
	
let smallinput = budy.toLowerCase()
if (smallinput.includes('hello')) {
  reply (`👋 𝙷𝙴𝙻𝙻𝙾 ${pushname}, 𝙸 𝙰𝙼 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇. 𝙷𝙾𝚆 𝙲𝙰𝙽 𝙸 𝙷𝙴𝙻𝙿 𝚈𝙾𝚄 𝚃𝙾𝙳𝙰𝚈?`);
} 

if (smallinput=='darkdevil') {
    reply (`𝙼𝚈 𝙱𝙾𝚂𝚂 𝙸𝚂 𝙻𝙾𝚂𝚃 𝙸𝙽 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙼𝚄𝙻𝚃𝙸𝚅𝙴𝚁𝚂𝙴, 𝙰𝙽𝙳 𝙸 𝙻𝙾𝚂𝚃 𝚃𝙷𝙴 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽 𝚆𝙸𝚃𝙷 𝙷𝙸𝙼. 𝙱𝚄𝚃 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙲𝙰𝙻𝙻 𝙼𝙰𝙻𝙸𝙽𝙳𝚄. 😉`)
}

if (smallinput=='ixAAr') {
    reply (`𝚆𝙷𝙰𝚃𝚂 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃? 😏`)
}

if (smallinput=='runtime') {
  reply (`🤩 𝙷𝙴𝚈️ ${pushname} 𝙼𝚈 *𝚁𝚄𝙽 𝚃𝙸𝙼𝙴* 𝙸𝚂 ${runtime(process.uptime())}\n\n🕒 *𝙲𝚄𝚁𝚁𝙴𝙽𝚃 𝚃𝙸𝙼𝙴* : ${time2}\n\n📅 *𝙲𝚄𝚁𝚁𝙴𝙽𝚃 𝙳𝙰𝚃𝙴* : ${kaidate}`)
}

if( smallinput.includes('ayubowan') || smallinput.includes('ආයුබෝවන්') || smallinput.includes('konichiba') || smallinput.includes('salute')){
  reply (`🙏 𝙰𝚈𝚄𝙱𝙾𝚆𝙰𝙽 ${pushname}, 𝙸 𝙰𝙼 ${BotName}. 𝙷𝙾𝚆 𝙲𝙰𝙽 𝙸 𝙷𝙴𝙻𝙿 𝚈𝙾𝚄 𝚃𝙾𝙳𝙰𝚈?`);
}

if (smallinput=='alive') {
    reply ('𝚈𝙴𝚂 𝙸 𝙰𝙼 𝙰𝙻𝙸𝚅𝙴 👻')
}

if (smallinput=='gf') {
  reply ('𝙾𝙽𝙻𝚈 𝚈𝙾𝚄 𝙼𝙰𝙽𝙸𝙺𝙰𝙷 💓')
}

if (smallinput=='bf') {
  reply ('𝙾𝙽𝙻𝚈 𝚈𝙾𝚄 𝙱𝙰𝙱𝙴 💓')
}

if (smallinput=='ping') {
    reply (`👋 𝙷𝙴𝚈 ${pushname} 𝙿𝙾𝙽𝙶 ${latensie.toFixed(4)} 𝚖𝚜`)
}

if (smallinput.includes('good morning') || smallinput.includes('gm')) {
  reply (`🌅 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 𝚃𝙾 𝚈𝙾𝚄 ${pushname} ☺️ 𝙷𝙰𝚅𝙴 𝙰 𝙶𝚁𝙴𝙰𝚃 𝙳𝙰𝚈. 😇`);
}

if (smallinput.includes('good afternoon') || smallinput.includes('ga')) {
  reply (`🌇 𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 𝚃𝙾 𝚈𝙾𝚄 ${pushname} ✨ 𝚆𝙸𝚂𝙷𝙸𝙽𝙶  𝚈𝙾𝚄 𝙰𝙽 𝙴𝙽𝙹𝙾𝚈𝙰𝙱𝙻𝙴 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽. 😇🤞🏻`);
}

if (smallinput.includes('good night') || smallinput.includes('gn')) {
  reply (`🌌 𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 𝚃𝙾 𝚈𝙾𝚄 ${pushname} 😇 𝚂𝙻𝙴𝙴𝙿 𝚆𝙴𝙻𝙻 𝙰𝙽𝙳 𝚂𝚆𝙴𝙴𝚃 𝙳𝚁𝙴𝙰𝙼𝚂. 👻`);
}

if (smallinput.includes('thank you') || smallinput.includes('thanks') || smallinput.includes('thank')) {
  reply (`👏 𝙼𝙴𝙽𝚃𝙸𝙾𝙽 𝙽𝙾𝚃 ${pushname} 😇 𝙸 𝙰𝙼 𝙰 𝙱𝙾𝚃 𝙰𝙵𝚃𝙴𝚁𝙰𝙻𝙻. 🤖`);
}


//\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\



//
    switch (command) {



      //
      case 'sc': case 'script': case 'sourcecode': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    A17.sendMessage(from, { react: { text: "❤" , key: m.key }})
    
    let { data } = await axios.get('https://api.github.com/repos/DARK-DEVIL-BOTZ/DDev-BOT');
    teks = `*✒️ _𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇 𝚂𝙲𝚁𝙸𝙿𝚃_ 📃*\n\n*🌟 𝚃𝙾𝚃𝙰𝙻 𝚂𝚃𝙰𝚁𝚂*: ${data.stargazers_count} ✨\n*🍴 𝚃𝙾𝚃𝙰𝙻 𝙵𝙾𝚁𝙺𝚂*: ${data.forks_count} 𝙵𝙾𝚁𝙺𝚂\n*🎓 𝙶𝙸𝚃𝙷𝚄𝙱*: https://github.com/DARK-DEVIL-BOTZ/DDev-BOT\n\n😊 𝙳𝚘𝚗𝚝 𝙵𝚘𝚛𝚐𝚎𝚝 𝚃𝚘 𝙵𝚘𝚕𝚕𝚘𝚠 𝙼𝚎 𝙾𝚗 *𝙶𝙸𝚃𝙷𝚄𝙱* 𝙰𝚗𝚍 𝙶𝚒𝚟𝚎 𝙰 ⭐ 𝚃𝚘 𝙼𝚢 𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜 `
  
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    contextInfo:{externalAdReply:{
    title:"© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Dᴇᴠ ɪxAAʀ",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/bot.jpg"),
    mediaType:1,
    //mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
    //sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
    mediaUrl: 'github.com/DARK-DEVIL-BOTZ/DDev-BOT',
    sourceUrl: "github.com/DARK-DEVIL-BOTZ/DDev-BOT"
    }}

    }
    A17.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break;

    
    case 'support': case 'supportgc': {
      if (isBan) return reply(mess.banned); 			
      if (isBanChat) return reply(mess.bangc);

      A17.sendMessage(from, { react: { text: "💫" , key: m.key }})
    reply(`   👨‍💻 *𝙼𝚈 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁'𝚂 𝙶𝚁𝙾𝚄𝙿* 👩‍💻\n\n ☕ Not Available 💀`)
    }
    break;
    

case 'repo': case 'botrepo': {
  if (isBan) return reply(mess.banned); 			
  if (isBanChat) return reply(mess.bangc);
  
  A17.sendMessage(from, { react: { text: "💫" , key: m.key }})
    reply(`This Repo Not Public MF💀`)
    }
    break;


    case 'owner': case 'creator': case 'mod': case '🎮': case 'mods': {
      if (isBan) return reply(mess.banned); 			
      if (isBanChat) return reply(mess.bangc);
      
      A17.sendMessage(from, { react: { text: "💫" , key: m.key }})
      A17.sendContact(m.chat, global.Owner, m)
    }
      break;


      case 'setbotpp': {

        if (!isCreator) return reply(mess.owner)
        if (isBanChat) return reply(mess.bangc)
        if (!isCreator) return reply(mess.owner)
        A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

              if (!quoted) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (!/image/.test(mime)) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (/webp/.test(mime)) return `*Send/Reply Image With Caption* ${prefix + command}`
              let media = await A17.downloadAndSaveMediaMessage(quoted)
              await A17.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
              m.reply(mess.jobdone)
              }
              break;


      //
      case 'restart':
        await A17.sendMessage(from, { react: { text: "⚙", key: m.key } });
      if (!isCreator) return replay(mess.botowner)
    
      await A17.sendMessage(from, { text: mess.waiting });
      await A17.sendMessage(from, { react: { text: "✅", key: m.key } });
     await A17.sendMessage(from, { text: 'Restarting Success!' });
     
     // Delay the shutdown by 5 seconds using sleep function
      //await sleep(5000);
    
      // Use PM2 to restart the script
      pm2.restart('index', (err) => {
        if (err) {
          A17.sendMessage(from, { react: { text: "❌", key: m.key } });
          A17.sendMessage(from, { text: 'Restarting Failed!'});
        } else {
          return;
        }
      });
      break;


      //
      case 'shutdown': case 'sleep':
        if (!isCreator) return reply(mess.owner)
        if (isBanChat) return reply(mess.bangc)
        if (!isCreator) return reply(mess.owner)
        await A17.sendMessage(from, { react: { text: "⚠️" , key: m.key }})

        reply(`Okey bye time to sleep!`)
        await sleep(5000)
        process.exit()
        break;


      case 'public': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!isCreator) return reply(mess.owner)
        A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
        
        A17.public = true
        reply('I am now Publicly accessable!')
        A17.setStatus(`Mode : Public`)
        }
        break;
        

        case 'self': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!isCreator) return reply(mess.botowner)
        
        A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
        A17.public = false
        reply('Only Owner can use me now!')
        A17.setStatus(`Mode : Self`)
        }
        break;


        //Hosted platfrom info
		   case 'statusbot': case 'server':{
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `
    Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
    » 🤖 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇'𝚂 𝚂𝙴𝚁𝚅𝙴𝚁 𝙸𝙽𝙵𝙾
    RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
    _NodeJS Memory Usaage_
    ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
    ${cpus[0] ? `_Total CPU Usage_
    ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
    _CPU Core(s) Usage (${cpus.length} Core CPU)_
    ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
    `.trim()
    m.reply(respon)
}
break;



    case 'ban': {
      if (isBan) return reply(mess.banned)	 			
      if (isBanChat) return reply(mess.bangc)
      if (!isCreator) return replay(mess.botowner)
      A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
      if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
      if (args[1]) {
      orgnye = args[1] + "@s.whatsapp.net"
      } else if (m.quoted) {
      orgnye = m.quoted.sender
      }
      const isBane = banUser.includes(orgnye)
      if (args[0] === "add") {
      if (isBane) return ads('User is already banned.')
      banUser.push(orgnye)
      replay(`Successfully Banned the user.`)
      } else if (args[0] === "del") {
      if (!isBane) return ads('User is already unbanned.')
      let delbans = banUser.indexOf(orgnye)
      banUser.splice(delbans, 1)
      replay(`Successfully Unbanned the user.`)
      } else {
      replay("Error")
      }
      }
      break;



       ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



    //tictactoe game

    case 'ttc': case 'ttt': case 'tictactoe': {
      if (isBan) return reply(mess.ban)	 			
  if (isBanChat) return reply(mess.banChat)
  A17.sendMessage(from, { react: { text: "🎮" , key: m.key }})

      let TicTacToe = require("./lib/tictactoe")
      this.game = this.game ? this.game : {}
      if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`${pushname} You Are Still In The Game...`)
      let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
      if (room) {
      reply(`Hey ${pushname} Your Partner found!`)
      room.o = m.chat
      room.game.playerO = m.sender
      room.state = 'PLAYING'
      let arr = room.game.render().map(v => {
      return {
      X: '❌',
      O: '⭕',
      1: '1️⃣',
      2: '2️⃣',
      3: '3️⃣',
      4: '4️⃣',
      5: '5️⃣',
      6: '6️⃣',
      7: '7️⃣',
      8: '8️⃣',
      9: '9️⃣',
      }[v]
      })
      let str = `Room ID: ${room.id}
  ${arr.slice(0, 3).join('')}
  ${arr.slice(3, 6).join('')}
  ${arr.slice(6).join('')}
  Waiting @${room.game.currentTurn.split('@')[0]}
  Type *surrender* to surrender and admit defeat...`
      if (room.x !== room.o) await A17.sendText(room.x, str, m, { mentions: parseMention(str) } )
      await   A17.sendText(room.o, str, m, { mentions: parseMention(str) } )
      } else {
      room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'
      }
      if (text) room.name = text
      reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix} ${command} ${text}` : ''))
      this.game[room.id] = room
      }
      }
      break;		

      

        //report and suggest
      case 'report': case 'suggest ': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!text) return reply(`please provide a report message you want to deliver`)
        if (text.length > 300) return reply(`Are you trying to send virus!`)
        const txtmsg = `*📮 Report Message*\n\n*Sender ➛* wa.me/${m.sender.split("@")[0]}\n\n*Group Name ➛* ${groupName}\n\n*Message ➛*  ${text}`
      for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '6297175943@s.whatsapp.net'))
      await A17.sendMessage(`${mod}`, {text: `${txtmsg}`},  { quoted: m })
      await A17.sendMessage(`120363026915700516@g.us`, {text: `${txtmsg}`, mentions: groupAdmins}, { quoted: m })
        replay(`*✅ Your Report has been submitted Successfully to Support group & Owner*\n\n*You will get response shortly ♥️*`); 
     }
     break;
     
     //game
		
     case'daily': case'claim': case 'reward': {
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
          A17.sendMessage(from, { react: { text: "💰" , key: m.key }})  
            let user = m.sender
      const cara = "cara"
      const daily  = await eco.daily(user, cara, 999); //give 999 for daily, can be changed
      
              if (daily.cd) return replay(`You already claimed daily for today, come back in ${daily.cdL}`); //cdL is already formatted cooldown Left
      
                replay(`You claimed 💎${daily.amount} for daily`);        
    }
    break;
     
    case'wallet':  case 'purse': {

      if (isBan) return reply(mess.banned)	 			

      if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "💳" , key: m.key }})

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

  const user = m.sender

  const cara = "cara"

  const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

  await replay(`👛 ${pushname}'s Purse:\n\n_💎${balance.wallet}_`);

}

break;


case'bank':  case 'levee': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)	
A17.sendMessage(from, { react: { text: "💳" , key: m.key }})
		
    const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    await replay(`🏦 ${pushname}'s Bank:\n\n_💎${balance.bank}/${balance.bankCapacity}_`); 
}
break;
		
		
		case'capacity':  case 'bankupgrade': {
			A17.sendMessage(from, { react: { text: "💲" , key: m.key }})
		
	//if (!isCreator) return replay(mess.botowner)
	if (!text) return replay(`💴 Bank-capacity 💳\n\n1 | 1000 sp = 💎100\n\n2 | 10000 sp = 💎1000\n\n3 | 100000 sp = 💎10000\n\nExample- ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`)	
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	const cara = "cara"
	let value = text.trim();
	let k = parseInt(value)
	const balance  = await eco.balance(user, cara) 
  switch (value) {
          case '1000':
          case '1':
          if (k > balance.wallet ) return replay(`You need to pay 💎100 to increase bank capacity ~ 1000 sp`);
            const deduct1 = await eco.deduct(user, cara, 100);
            const add1 = eco.giveCapacity(user, cara, 1000); 
                await replay(`1000 💎diamond storage has been added in ${pushname} bank`)
         case '10000':
          case '2':
          if (k > balance.wallet ) return replay(`You need to pay 💎1000 to increase bank capacity ~ 10000 sp`);
            const deduct2 = await eco.deduct(user, cara, 1000);
            const add2 = eco.giveCapacity(user, cara, 10000); 
                await replay(`10000 💎diamond storage has been added in ${pushname} bank`)
         case '100000':
          case '3':
          if (k > balance.wallet ) return replay(`You need to pay 💎10000 to increase bank capacity ~ 100000 sp`);
            const deduct3 = await eco.deduct(user, cara, 10000);
            const add3 = eco.giveCapacity(user, cara, 100000); 
                await replay(`100000 💎diamond storage has been added in ${pushname} bank`)
          }
            }
                break;

          
	case'deposit':  case 'pay-in': {
    if (isBan) return reply(mess.banned)
A17.sendMessage(from, { react: { text: "📥" , key: m.key }})

    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!text) return replay("Provide the amount you want to deposit!");
const texts = text.trim();
const user = m.sender;
const cara = 'cara'
    const deposit = await eco.deposit(user, cara, texts);
        if(deposit.noten) return replay('You can\'t deposit what you don\'t have.'); //if user states more than whats in his wallet
         replay(`Successfully Deposited 💎${deposit.amount} to your bank.`)
  }
      break;


      case'withdraw':  case 'withdrawal': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
    A17.sendMessage(from, { react: { text: "💸" , key: m.key }})
        
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          const user = m.sender
      if (!text) return replay("Provide the amount you want to withdraw!");
      const query = text.trim();
          const cara = 'cara'
          const withdraw = await eco.withdraw(user, cara, query);
          if(withdraw.noten) return replay('🏧 Insufficient fund in bank'); //if user states more than whats in his wallet
          const add = eco.give(user, cara, query);
            replay(`🏧 ALERT  💎${withdraw.amount} has been added in your wallet.`)
          
  }
  break;

  
  case'rob':  case 'attack': {
		A17.sendMessage(from, { react: { text: "🔪" , key: m.key }})
	if (!text) return replay(`Use ${prefix}rob @user`)
	const target =
			             m.quoted && m.mentionedJid.length === 0
			             ? m.quoted.sender
			             : m.mentionedJid[0] || null;    
           if (!target || target === m.sender) return replay("what are you trying to do!")
           if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
	    const k = 250
	const balance1  = await eco.balance(user1, cara)
	const balance2  = await eco.balance(user2, cara)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return replay(`☹️ You don't have enough money to pay incase you get caught`);
    if (k > balance2.wallet) return replay(`Sorry, your victim is too poor 🤷🏽‍♂️ let go.`);
    let tpy = random
  switch (random) {
          case 'ran':
                await replay(`Your victim escaped, be more scaryðŸ˜¤ next time.`)
  }
	}
                break;  


                case'transfer':  case 'give': {
                  if (isBan) return reply(mess.banned)	 			
                  if (isBanChat) return reply(mess.bangc) 
            A17.sendMessage(from, { react: { text: "🗿" , key: m.key }})
            let value = text.trim().split(" ");
            if (value[0] === "") return replay(`Use ${prefix}transfer 100 @user`);
            const target =
                             m.quoted && m.mentionedJid.length === 0
                             ? m.quoted.sender
                             : m.mentionedJid[0] || null;    
                     if (!target || target === m.sender) return replay("what are you trying to do!")
                     if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
                  while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
                  const cara = "cara"
                  const user1 = m.sender
                  const user2 = target
                         const word = value[0];
                         const code = value[1];
              let d = parseInt(word)
              if (!d) return replay("check your text plz u r using the command in a wrong way")
              
              const balance = await eco.balance(user1, cara); 
                  let a = (balance.wallet) < parseInt(word)
                  //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
                  if(a == true) return replay("you dont have sufficient money to transfer");
                  
                  const deduct = await eco.deduct(user1, cara, value[0]);
                  const give = await eco.give(user2, cara, value[0]);
                  replay(`📠 Transaction successful`)
          
          }
          break;  	  
              
              
             case 'wealth': case 'ritual': {
                              if (!isCreator) return replay(mess.botowner)
                              var user = m.sender
                              var cara = 'cara'
                              const give1 = eco.give(user, cara, 10000)
                              replay(`You are the wealthiest my *Lord*`)
                      }
                      break;

		


//
case'gamble':  case 'lottery': {
  //var response = await A17.groupInviteCode(from)
  //var link1 = `https://chat.whatsapp.com/${response}`
  //var link2 = `https://chat.whatsapp.com/BXQaaeg7utI29OI4RbhdIhl`
  var texts = text.trim().split(" ");
  var opp = texts[1];// your value
  var value = texts[0].toLowerCase();
  var gg = parseInt(value)
  var user = m.sender //m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  const cara = 'cara'
  const balance = await eco.balance(user, cara); 
  const g = (balance.wallet) > parseInt(value)
  const k = 50
  const a = (k) > parseInt(value)
  const twice = gg*2
  const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
  const r = f[Math.floor(Math.random () * f.length)]
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return reply(mess.grouponly)
  //if (link1 == link2){
     if (texts[0] === "")
         return replay(
             `Example:  ${prefix}gamble 100 direction(left,right,up,down)`
         );
     if (!value) return replay("*Please, specify the amount you are gambling with!");
     if (!opp) return replay("Specify the direction you are betting on!");
     if (!gg) return replay("Check your text please, You are using the command in a wrong way")
     if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
     if (g == false) return replay(`You don't have sufficient 💎 Diamond to gamble with`);
     if (a == true) return replay(`Sorry ${pushname}, you can only gamble with more than 💎50.`);
     if ( r == opp){
        let give = await eco.give(user , cara, twice);
        replay(`*📉 You won 💎${twice}*`)
     }
     else{
        let deduct = await eco.deduct(user, cara, texts[0]);
        replay(`*📈 You lost 💎${texts[0]}*`)
      }
  //}
  //else{
      //replay(`Gambling is allowed only in Casino/Gamble Group,\n\ntype ${prefix}casino to get the group link`)
  //}
}
break;


	//-----------------Slot----------------------

case'slot': case 'spin': {
  if (isBan) return replay(mess.banned);
  if (isBanChat) return replay(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
  if (text == 'help') return replay(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
  if (text == 'money') return replay(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
  const fruit1= ["🥥", "🍎", "🍇"]
  const fruit2 = ["🍎", "🍇", "🥥"]  
  const fruit3 = ["🍇", "🥥", "🍎"]         
  const fruit4 = ["🍇", "🥥", "🍎"]
  const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
  const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
  const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
  const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
  const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
  const user = m.sender
  const cara = "cara"
  const k = 100
  const balance1  = await eco.balance(user, cara)
  
  if (k > balance1.wallet) return replay(`You are going to be spinning on your wallet, you need at least 💎100`);
  const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
  const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
  const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
  const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
  const mess1 = lose[Math.floor(Math.random() * lose.length)];
  const mess2 = won[Math.floor(Math.random() * won.length)];
  const mess3 = near[Math.floor(Math.random() * near.length)];
  const mess4 = jack[Math.floor(Math.random() * jack.length)];
  const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
  
  if ((f1 !== f2) && f2 !== f3){
     const deduct1 = await eco.deduct(user, cara, 50);
            replay(`${mess1}\n\n*Big Lose -->* _💎50_`)
  }
  else if ((f1 == f2) && f2 == f3){
     const give1 = await eco.give(user, cara, 100); 
           replay(`${mess2}\n*_Big Win -->* _💎100_`)
  }
  else if ((f1 == f2) && f2 !== f3){
     const give2 = await eco.give(user, cara, 20);
           replay(`${mess3}\n*Small Win -->* _💎20_`)
  }
  else if ((f1 !== f2) && f1 == f3){
     const deduct2 = await eco.deduct(user, cara, 20);
           replay(`${mess5}\n\n*Small Lose -->* _💎20_`)
  }
  else if ((f1 !== f2) && f2 == f3){
     const give4 = eco.give(user, cara, 20); 
           replay(`${mess3}\n\n*Small Win -->* _💎20_`)
  }
  else if (((f1 == f2) && f2 == f3) && f3 == f4){
     const give5 = eco.give(user, cara, 1000);
          replay(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
  }
  else { 
          replay(`Do you understand what you are doing?`)
  }
}
else{
      replay(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
}
}
break;



    /////////////////////////////////////////////////////////////////////////////////////////////////


     case 'nsfwmenu':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
    A17.sendMessage(from, { react: { text: "⚠️" , key: m.key }})

        reply(` *━━〈  ⚠️ 𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄 ⚠️  〉━━*\n\n .gifs\n .hentaivideo\n .blowjobgif\n .hneko\n .masturbation\n .thighs\n .pussy\n .panties\n .orgy\n .ahegao\n .ass\n .bdsm\n .blowjob\n .cuckold\n .ero\n .cum\n .femdom\n .foot\n .gangbang\n .glasses\n .jahy\n`)
    break;


     case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        A17.sendMessage(from, { react: { text: "❤️" , key: m.key }})

         reply(` *━━〈  ⚡ 𝚁𝙴𝙰𝙲𝚃𝙸𝙾𝙽𝚂 ⚡  〉━━*\n\n .bonk\n .cry\n .bully\n .cuddle\n .hug\n .kiss\n .lick\n .pat\n .smug\n .yeet\n .blush\n .smile\n .wave\n .highfive\n .handhold\n .nom\n .glomp\n .bite\n .slap\n .kill\n .happy\n .wink\n .poke\n .dance\n .cringe`)
     break;
     
     
     
     case 'gvoice':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    A17.sendMessage(from, { react: { text: "💋" , key: m.key }})

        reply(` *━━〈  🥵 𝙶𝙸𝚁𝙻 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙽𝚄 🥶  〉━━*\n\n Hello\n Helo\n Hey\n Hi\n Hy\n Hm\n Hmm\n Gm\n Good morning\n Gn\n Good night\n Gn pana\n I love you\n Love you\n Adarei\n Ha\n Ha ha\n Pana\n Manika\n Baba\n Umma\n Ummma\n Hako\n Ummah\n Ahh\n Darkdevil\n Malindu\n Ddev\n Akke\n Nangi\n Bitch\n Fuck\n Marilada\n Na\n Ai\n Natapan\n Mk\n Ponnaya\n Love\n Wesi\n Vesi\n Why\n Why bn\n Raththaran\n Wow\n Ko\n Ammo\n Hukapan\n Bye\n Wasthuva\n Nane\n Epa wela\n Gahanava\n Kellekda\n Kohomada\n Bot\n Kariya\n Huththa\n Huththi\n Ktt gannako\n Katata gannako\n Vesi\n Balli\n Pakaya\n Bf\n Gf\n ❤️\n 🙂\n 😂\n`)
    break;    
     


case 'limituser': case 'userlimit': case 'limit':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *All User Limit* 」\n\n`
                 for (let i of _limit){
                 txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break;
                  
          
          case 'film': case 'movie': case 'moviesearch':
          if (isBan) return reply(mess.banned)
            if (isBanChat) return reply(mess.bangc)
            reply(mess.waiting)
          if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
          xfarrapi.Film(q)
              .then(data => {console.log(data)
              let krl = `*Search Term:* ${q}\n\n`
                    for (let i of data) {
                          krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                          }
                         A17.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
          });
          break;


case 'wallpaper':
case 'animewallpaper':
case 'animewall': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  reply(mess.waiting);
  A17.sendMessage(from, { react: { text: "🥵", key: m.key } });
  if (!args.join(" ")) return reply("Please enter a term to search!");
  
  const { AnimeWallpaper } = require("anime-wallpaper");
  const wall = new AnimeWallpaper();
  const pages = [1, 2, 3, 4];
  const random = pages[Math.floor(Math.random() * pages.length)];
  const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
  
  const maxImagesToSend = 15;
  const minImagesToSend = 5;
  const imagesToSend = Math.min(maxImagesToSend, Math.max(minImagesToSend, wallpapers.length));
  
  for (let i = 0; i < imagesToSend; i++) {
    let message = {
      image: { url: wallpapers[i].image },
      footer: `${BotName}`,
      headerType: 4
    };
    A17.sendMessage(m.chat, message, { quoted: m });
  }
}
break;
  

          case 'wikimedia': case 'wikiimage': {
            if (isBan) return reply(mess.banned)	 			
          if (isBanChat) return reply(mess.bangc)
                          if (!args.join(" ")) return reply("What picture are you looking for??")
              let { wikimedia } = require('./lib/scraper')
                  anu = await wikimedia(args)
                  hasil = anu[Math.floor(Math.random() * anu.length)]
                  let buttons = [
                      {buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                  ]
                  let buttonMessage = {
                      image: { url: hasil.image },
                      caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
                      footer: `${BotName}`,
                      buttons: buttons,
                      headerType: 4
                  }
                  A17.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
              break;
          
          
          case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
          if (isBan) return reply(mess.banned)	 			
          if (isBanChat) return reply(mess.bangc)
                     let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
                     reply(mess.waiting)
                    A17.sendMessage(m.chat, { image: { url: cok }, caption: '☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...' }, { quoted: m })
                    break;
          
          
          case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
              let { quotesAnime } = require('./lib/scraper')
                  let anu = await quotesAnime()
                  hasil = anu[Math.floor(Math.random() * anu.length)]
                  let buttonMessage = {
                      text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
                               }
                  A17.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
              break;
          
          
          case 'animestory': { 
            if (isBan) return reply(mess.banned)	 			
          if (isBanChat) return reply(mess.bangc)
          reply(mess.waiting)
          await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
          .then((res) =>{
          console.log(res)   
          let sections = []   
            for (let i of res.data) {
            const list = {title: `${i.title}`,
            rows: [
                {
                 title: `${i.title}\n\n`, 
                 rowId: `${prefix}animesearch ${i.mal_id}`,
                 description: `${i.synopsis}`
                }, 
                ]
               }
               sections.push(list)   
               }
            const sendm =  A17.sendMessage(
                from, 
                {
                 text: "Anime Search",
                 footer: BotName,
                 title: OwnerName,
                 buttonText: "Search Results",
                 sections
                }, { quoted : m }
              )  
          })
          }
            break;
            
          
            case 'grupsetting':
              case 'groupsetting':{
                  if (isBan) return reply(mess.banned)	 			
          if (isBanChat) return reply(mess.bangc)
          A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
          
                      let sections = []
                      let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
                      let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
                      let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
                      let suruh = [`Enable`, `Disable`]
                      let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`]
                      let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                      let startnumm = 1
                      for (let x of com) {
                          const yy = {title: `${listnya[startnum++]}`,
                      rows: [
                         {
                          title: `${suruh[0]}`,
                          description: `Activate ${fiturname[startnu++]}`,
                          rowId: `${prefix}${x}`
                        },{
                          title: `${suruh[1]}`,
                          description: `Deactivate ${fiturname[startn++]}`,
                          rowId: `${prefix}${comm[start++]}`
                        }
                      ]
                     }
                          sections.push(yy)
                      }
                      const sendm =  A17.sendMessage(
          from, 
          {
          text: "Group Settings",
          }, { quoted : m }
          )  
          }
          break;   
          
          
                          
case 'emojimix': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!q) reply(`*Example :* ${prefix + command} 😊+🌹`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await A17.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break;



            ///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'ahegao':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/agegao.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'ass':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'bdsm':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'blowjob':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'cuckold':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'cum':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'eba':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'ero':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'femdom':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'foot':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'gangbang':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;




/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


case 'gifs':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  reply(mess.waiting)
  A17.sendMessage(from, { react: { text: "👀" , key: m.key }})

  var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
  const rand = nsfwdata[Math.floor(Math.random() * nsfwdata.length)]
  const response = await fetchBuffer(rand.url)
  //console.log(response)
    
   var fetchedgif = await GIFBufferToVideoBuffer(response)
   
    await A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true },{quoted:m}).catch(err => {
  console.log(err);
       })


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


case 'hentaivid': case 'hentaivideo': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
A17.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break;


case 'glasses':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'hentai':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'jahy':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'mangansfw':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'masturbation':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'milf':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'neko':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'neko2':
  if (isBan) return reply(mess.banned)			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'nsfwloli':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;

 

case 'orgy':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return replay(mess.grouponly);
  if (!AntiNsfw) return reply(mess.nonsfw);

  // React to the command message with a specific emoji
  A17.sendMessage(from, { react: { text: "🥵", key: m.key } });

  var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'));
  var numberOfPictures = 3; // Change this value if you want to send a different number of pictures

  // Create a function to get multiple random pictures from the 'nsfwdata' array
  function getRandomPictures(array, count) {
    var shuffled = array.slice();
    var i = array.length;
    var min = i - count;
    var temp;
    var index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }

    return shuffled.slice(min);
  }

  // Get multiple random pictures from 'nsfwdata'
  var selectedPictures = getRandomPictures(nsfwdata, numberOfPictures);

  // Send the selected pictures one by one
  for (let picture of selectedPictures) {
    A17.sendMessage(m.chat, { caption: mess.success, image: { url: picture.url } }, { quoted: m });
  }
  break;


case 'panties':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return replay(mess.grouponly);
  if (!AntiNsfw) return reply(mess.nonsfw);

  // React to the command message with a specific emoji
  A17.sendMessage(from, { react: { text: "🥵", key: m.key } });

  var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'));
  var numberOfPictures = 3; // Change this value if you want to send a different number of pictures

  // Create a function to get multiple random pictures from the 'nsfwdata' array
  function getRandomPictures(array, count) {
    var shuffled = array.slice();
    var i = array.length;
    var min = i - count;
    var temp;
    var index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }

    return shuffled.slice(min);
  }

  // Get multiple random pictures from 'nsfwdata'
  var selectedPictures = getRandomPictures(nsfwdata, numberOfPictures);

  // Send the selected pictures one by one
  for (let picture of selectedPictures) {
    A17.sendMessage(m.chat, { caption: mess.success, image: { url: picture.url } }, { quoted: m });
  }
  break;


case 'pussy':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return replay(mess.grouponly);
  if (!AntiNsfw) return reply(mess.nonsfw);

  // React to the command message with a specific emoji
  A17.sendMessage(from, { react: { text: "🥵", key: m.key } });

  var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'));

  // Create an empty array to store the randomly selected pictures
  var selectedPictures = [];

  // The number of pictures you want to send (in this case, we'll send 3)
  var numberOfPictures = 3;

  // Loop to randomly select 'numberOfPictures' from 'nsfwdata'
  for (let i = 0; i < numberOfPictures; i++) {
    // Pick a random index from 'nsfwdata'
    var randomIndex = Math.floor(Math.random() * nsfwdata.length);
    var kairesult = nsfwdata[randomIndex];

    // Add the selected picture URL to the 'selectedPictures' array
    selectedPictures.push(kairesult.url);

    // Optionally, you can remove the selected picture from 'nsfwdata' to avoid duplication.
    // nsfwdata.splice(randomIndex, 1);
  }

  // Send the selected pictures one by one
  for (let url of selectedPictures) {
    A17.sendMessage(m.chat, { caption: mess.success, image: { url: url } }, { quoted: m });
  }
  break;


case 'tentacles':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;


case 'thighs':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!AntiNsfw) return reply(mess.nonsfw)
  A17.sendMessage(from, { react: { text: "🥵" , key: m.key }})

var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var kairesult = pickRandom(nsfwdata)
A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
break;



//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////



case 'getcase':
if (isBan) return reply(mess.banned)	
if (m.sender !='916297175943@s.whatsapp.net') {return;}

if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break;")[0]+"break;"
}
replay(`${getCase(q)}`)
break;


case 'emoji': {
 if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await A17.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`}, {quoted:m})
await A17.sendMessage(from, {text:"reply -s to this image to make sticker"}, {quoted:mese})
})
}
break;




case 'deleteall': case 'delall': case 'delete': case 'del': {
 if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!m.quoted) return reply('Please mention a message baka!')
let { chat, fromMe, id} = m.quoted

const key = {
 remoteJid: m.chat,
 fromMe: false,
 id: m.quoted.id,
 participant: m.quoted.sender
}

await A17.sendMessage(m.chat, { delete: key })
}
break;



//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



case 'ghstalk': case 'githubstalk': case'github': {
  A17.sendMessage(from, { react: { text: "🔍" , key: m.key }})

  if (!q) return replay(`Give me a user name like *${prefix}github DARK-DEVIL-BOTZ*`)

  gitdata = await githubstalk.githubstalk(`${q}`)
  A17.sendMessage(m.chat, { image: { url : gitdata.profile_pic }, caption: 
  `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}` }, { quoted: m } )
  }
  break;


case 'listpc': {
 if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = ` 「🤖 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇'𝚂 𝙿𝙼 𝚄𝚂𝙴𝚁 𝙻𝙸𝚂𝚃 🤖」\n\n☕ 𝚃𝙾𝚃𝙰𝙻 ${anu.length} 𝚄𝚂𝙴𝚁𝚂 𝙰𝚁𝙴 𝚄𝚂𝙸𝙽𝙶 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇 𝙸𝙽 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻 𝙲𝙷𝙰𝚃.`
for (let i of anu) {
teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
A17.sendTextWithMentions(m.chat, teks, m)
}
break;


case 'listgc': {
 if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = ` 「🤖 𝛪𝛸𝛥𝛥𝑅'𝚂 𝙶𝚁𝙾𝚄𝙿 𝚄𝚂𝙴𝚁 𝙻𝙸𝚂𝚃 🤖」\n\n☕ 𝚃𝙾𝚃𝙰𝙻 ${anu.length} 𝚄𝚂𝙴𝚁𝚂 𝙰𝚁𝙴 𝚄𝚂𝙸𝙽𝙶 𝙱𝙾𝚃 𝙸𝙽 𝙶𝚁𝙾𝚄𝙿𝚂`
for (let i of anu) {
let metadata = await A17.groupMetadata(i)
if (metadata.owner === "undefined") {
loldd = false
} else {
loldd = metadata.owner
}
teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
A17.sendTextWithMentions(m.chat, teks, m)
}
break;
                        

case 'speedtest': case 'speedcheck': {
  A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
  
   m.reply(`Plz Wait ${pushname} Testing Speed... ⚙️`)
   let cp = require('child_process')
   let { promisify } = require('util')
   let exec = promisify(cp.exec).bind(cp)
 let o
 try {
 o = await exec('python speed.py')
 } catch (e) {
 o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
   }
   }
   break;


case 'status': case 'post': {
  if (!isCreator) return replay(mess.owner)
  if (!quoted) return replay(`Send/Reply Image With Caption ${prefix}status`)
  if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 seconds video is allowed!')
  }
  const messageType = Object.keys (m.message)[0]
  if (messageType === 'imageMessage') {
      const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
      await writeFile('./image.jpeg', media)
      await A17.sendMessage(botNumber, 'status@broadcast',  { url: './image.jpeg', media}).catch((err) => fs.unlinkSync(media))
     replay(`*✨ ${pushname}...!! Posted On My Status ✨*`);
  }
  else if (messageType === 'videoMessage') {
      const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
      await writeFile('./video.mp4', media)
      await A17.sendMessage(botNumber, 'status@broadcast',  { url: 'video.mp4', media}).catch((err) => fs.unlinkSync(media))
replay(`*✨ ${pushname}...!! Posted On My Status ✨*`);
  }
  else {
      replay(`an error occurred`)
  }

}
break;



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



case 'afk': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replay(`${m.pushName} is now Away From Keyboard.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break;


case 'fliptext': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
}
break;


case 'toletter': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}




case 'leveling':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isAdmins && !isCreator) return reply(mess.useradmin)
if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
if (args[0] === 'on'){
if (isLeveling) return reply(`Already activated`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Leveling activated')
} else if (args[0] === 'off'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Leveling deactivated')
} 
break;


////////////////////////////////////////////////////////////////////////////




//
case 'antilinkgc': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLink) return replay('Already activated')
ntilink.push(from)
replay('Activated _Antilink_ in this group.')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('Already deactivated!')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Deactivated _Antilink_ in this group!')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
}
}
break;


case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Already activated')
ntilinkytvid.push(from)
replay('Activated youtube video antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Deactivated youtube video antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
}
}
break;


case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Already activated')
ntilinkytch.push(from)
replay('Activated youtube channel antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Deactivated youtube channel antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
}
}
break;


case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Already activated')
ntilinkig.push(from)
replay('Activated instagram antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Deactivated instagram antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
}
}
break;


case 'antilinkfacebook': case 'antilinkfb': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Already activated')
ntilinkfb.push(from)
replay('Activated facebook antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Deactivated facebook antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
}
}
break;


case 'antilinktelegram': case 'antilinktg': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Already activated')
ntilinktg.push(from)
replay('Activated telegram antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Deactivated telegram antilink in this group')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
}
}
break;


case 'antilinktiktok': case 'antilinktt': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Already activated')
ntilinktt.push(from)
replay('Activated tiktok antilink !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Deactivated tiktok antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
}
}
break;


case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinktwt.push(from)
replay('Activated twitter antilink in this group !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Deactivated twitter antilink !')
} else {
let buttonsntilink = [
{ buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
}
}
break;


case 'antilinkall': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return replay(mess.grouponly);
  if (!isBotAdmins) return replay(mess.botadmin);
  if (!isAdmins && !isCreator) return replay(mess.useradmin);
  A17.sendMessage(from, { react: { text: "🫡" , key: m.key }});

  if (args[0] === "on") {
  
    if (AntiLinkAll) return replay('Already activated');
    ntilinkall.push(from);
    replay('Enabled all antilink!');
    var groupe = await A17.groupMetadata(from);
    var members = groupe['participants'];
    var mems = [];
    members.map(async adm => {
      mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
    });
    A17.sendMessage(from, { text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
  } else if (args[0] === "off") {
    if (!AntiLinkAll) return replay('Already deactivated');
    let off = ntilinkall.indexOf(from);
    ntilinkall.splice(off, 1);
    replay('Disabled all antilink!');
  } else {
    replay(`Please use '${prefix}antilinkall on' to enable the Antilink system or '${prefix}antilinkall off' to disable it.`);
  }
}
break;


case 'antiwame': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (antiWame) return replay('Already activated')
ntwame.push(from)
replay('Activated antiwame !')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Deactivated antiwame !')
} else {
let buttonsntwame = [
{ buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
}
}
break;



         /////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


case 'nsfw': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return replay(mess.grouponly);
  if (!isBotAdmins) return replay(mess.botadmin);
  if (!isAdmins && !isCreator) return replay(mess.useradmin);
  A17.sendMessage(from, { react: { text: "🫡" , key: m.key }});

  if (args[0] === "on") {
    if (AntiNsfw) return replay('Already activated');
    ntnsfw.push(from);
    replay('Enabled NSFW Commands!');
  } else if (args[0] === "off") {
    if (!AntiNsfw) return replay('Already deactivated');
    let off = ntnsfw.indexOf(from);
    ntnsfw.splice(off, 1);
    replay('Disabled NSFW Commands!');
  } else {
    replay(`NSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!\n\nPlease use *'${prefix}nsfw on*' to enable NSFW commands or *'${prefix}nsfw off'* to disable them.`);
  }
}
break;


case 'listonline': case 'listaktif': case 'here':{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
A17.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break;

case 'ban': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned.')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user.`)
} else {
replay("Error")
}
}
break;



case 'happymod': case 'modapk':{
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  A17.sendMessage(from, { react: { text: "🔍" , key: m.key }});
  
  if (!args.join(" ")) return reply(`Example: ${prefix + command} Kinemaster`);
  
  const searchTerm = args.join(" ");
 modapk.happymod(searchTerm).then(async (res) => {
    let teks = '```「 HappyMod Search Engine 」```';
    for (let i of res) {
      teks += `\n\n${i.name}\n`;
      teks += `${i.link}`;
    }
  
    let messageToSend = teks;
    if (res[0].icon) {
      messageToSend = {
        text: teks,
        image: { url: res[0].icon },
        jpegThumbnail: Thumb,
      };
    }
  
    A17.sendMessage(from, messageToSend, { quoted: m });
  });
}
break;




              /////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//group moderation

case 'banchat': case 'bangroup': case 'banmode': {
  if (isBan) return reply(mess.banned);	 			
  if (!isCreator) return reply(mess.botowner);
  A17.sendMessage(from, { react: { text: "⚠️" , key: m.key }})

  if (args[0] === "on") {
    if (isBanChat) return reply('This Group is Already Banned from using me!');
    banchat.push(from);
    reply('This Group has been banned from using me!');

    var groupe = await A17.groupMetadata(from);
    var members = groupe['participants'];
    var mems = [];
    members.map(async adm => {
      mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
    });

    A17.sendMessage(from, { text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using the bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
  } else if (args[0] === "off") {
    if (!isBanChat) return reply('This Group is Already Banned from using me!');
    let off = banchat.indexOf(from);
    banchat.splice(off, 1);
    reply('This Group has been *unbanned* from using me!');
  } else {
    reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
  }
}
break;


case 'setname': case 'setsubject': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (!text) return replay('Pls enter -setname <New Group Name>  to change this Group Name')
await A17.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
}
break;


case 'block': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return reply(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await A17.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break;


case 'unblock': {
      if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return reply(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await A17.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break;


case 'setdesc': case 'setdesk': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
await A17.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
}
break;


case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
let media = await A17.downloadAndSaveMediaMessage(quoted)
await A17.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.jobdone)
}
break;


case 'tagall': case 'all':{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isAdmins && !isCreator) return replay(mess.useradmin) 
A17.sendMessage(from, { react: { text: "😳" , key: m.key }})
let teks = `「 Attention 」

*Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
for (let mem of participants) {
teks += `» @${mem.id.split('@')[0]}\n`
}
A17.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break;


case 'hidetag': case 'tag': case 'ping': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "✨" , key: m.key }})
A17.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break;


case'tagadmins': case 'admins': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly) 
A17.sendMessage(from, { react: { text: "🗿" , key: m.key }})
if (!text) return replay(`*Please quote or write a meaningful message to tag admins to*`)
let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
for (let mem of groupAdmins) {
teks += `🎗️ @${mem.split('@')[0]}\n`
}
A17.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
}
break;



case 'purge':{mess
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
for (let member of mentioned) {     
A17.groupParticipantsUpdate(m.chat, [member], 'remove')
}
}

break;


case 'nowa': case 'find': case 'stalk': case 'stalknumber':{
  if (isBan) return reply(mess.banned)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
  if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
  var inputnumber = args[0]
  if (!inputnumber.includes('x')) return reply('You didnot added x')
  reply(`Searching for WhatsApp account in given range...`)
  reply(`Please wait while i fetch details...`)
  function countInstances(string, word) {
  return string.split(word).length - 1;
  }
  var number0 = inputnumber.split('x')[0]
  var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
  var random_length = countInstances(inputnumber, 'x')
  var randomxx;
  if (random_length == 1) {
      randomxx = 10
  } else if (random_length == 2) {
      randomxx = 100
  } else if (random_length == 3) {
      randomxx = 1000
  }
  var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
  var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
  var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
  for (let i = 0; i < randomxx; i++) {
  var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  var status1 = nu[Math.floor(Math.random() * nu.length)]
  var status2 = nu[Math.floor(Math.random() * nu.length)]
  var status3 = nu[Math.floor(Math.random() * nu.length)]
  var dom4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
  rndm = `${status1}`
  } else if (random_length == 2) {
  rndm = `${status1}${status2}`
  } else if (random_length == 3) {
  rndm = `${status1}${status2}${status3}`
  } else if (random_length == 4) {
  rndm = `${status1}${status2}${status3}${dom4}`
  }
  var anu = await A17.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
  var anuu = anu.length !== 0 ? anu : false
  try {
  try {
  var anu1 = await A17.fetchStatus(anu[0].jid)
  } catch {
  var anu1 = '401'
  }
  if (anu1 == '401' || anu1.status.length == 0) {
  nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
  } else {
  nomerny += `🪄 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
  }
  } catch {
  nowhatsapp += `${number0}${i}${number1}\n`
  }
  }
  reply(`${nomerny}${nobio}${nowhatsapp}`)
  }
  break;


case 'grouplink': case 'gclink': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
A17.sendMessage(from, { react: { text: "🪄" , key: m.key }})
let response = await A17.groupInviteCode(m.chat)
A17.sendMessage(m.chat, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: `${global.OwnerName}`,
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${global.BotName}`,
"body": `${global.WaterMark}`,
"previewType": "PHOTO",
"thumbnailUrl": Thumb,
"thumbnail": Thumb,
"sourceUrl": `${global.websitex}`
}}}, { quoted: m, detectLink: true })
}
break;


case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
 if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
A17.groupRevokeInvite(m.chat)
}
break;


case 'group': case 'grup': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (args[0] === 'close'){
await A17.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Group has been closed!`)).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'open'){
await A17.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Group has been opened!`)).catch((err) => replay(jsonformat(err)))
} else {

let buttonMessage = {
image: BotLogo,
jpegThumbnail: Thumb,
caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:\n\nIf you want to Group close *-group close*\n\nIf you want to Group Oepn *-group open*`,
footer: `${BotName}`,
headerType: 4
}
A17.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break;


case 'promote': case 'admin': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await A17.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
}
break;


case 'demote': case 'unadmin': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await A17.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
}
break;


case 'add':{     			
  if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isCreator) return replay(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})


let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users.length == 0) return replay(`Please write the number of the person you want to add to thhis group`)
await A17.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`User Added Successfully!`)).catch((err) => replay(`Cannot add that user to this group!`))
}
break;


case 'invite': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  if (!isBotAdmins) return replay(mess.botadmin)
  if (!isAdmins && !isCreator) return replay(mess.useradmin)
  A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
  
if (!text) return reply (`Enter the number you want to invite to the group...\n\nExample :\n*${prefix + command}* 916297175943`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await A17.groupInviteCode(group)
      await A17.sendMessage(text+'@s.whatsapp.net', {text: ` *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
  break;


case 'remove':{
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await A17.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break;


// join command  is a possible to Ban bot number.
case 'join': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (!args[0]) return replay(`Where's the link?`)
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return replay("Link invalid!")
if (isCreator) {
await A17.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
replay("Succes!")
} else {
A17.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 20) {
teks = `Sorry, munimun 20 members are required in a group to add bot!`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916297175943@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 20) {
await A17.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
replay("Joined !")
} else {
replay("Error")
}
}).catch(_ => _)
}
}
break;



             ////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//
case 'ringtone': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
          if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
      let { ringtone } = require('./lib/scraper')
  let anu = await ringtone(text)
  let result = anu[Math.floor(Math.random() * anu.length)]
  A17.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
    }
    break;


    case 'volume': {
      if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
    media = await A17.downloadAndSaveMediaMessage(quoted, "volume")
    if (isQuotedAudio) {
    rname = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    jadie = fs.readFileSync(rname)
    A17.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
    fs.unlinkSync(rname)
    })
    } else if (isQuotedVideo) {
    rname = getRandom('.mp4')
    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    jadie = fs.readFileSync(rname)
    A17.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
    fs.unlinkSync(rname)
    })
    } else {
    reply("Please send video/audio file only!")
    }
    }
    break;


case 'tempo': {
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
  var req = args.join(' ')
  media = await A17.downloadAndSaveMediaMessage(quoted, "tempo")
  if (isQuotedAudio) {
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  A17.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else if (isQuotedVideo) {
  ran = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  A17.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else {
  reply("Please send video/audio file only!")
  }
  }
  break;


  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
    A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

      try {
      let set
      if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
      if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
      if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
      if (/earrape/.test(command)) set = '-af volume=12'
      if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
      if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
      if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
      if (/reverse/.test(command)) set = '-filter_complex "areverse"'
      if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
      if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
      if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
      if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
      if (/audio/.test(mime)) {
      reply(mess.waiting)
      let media = await A17.downloadAndSaveMediaMessage(quoted)
      let ran = getRandom('.mp3')
      exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
      fs.unlinkSync(media)
      if (err) return reply(err)
      let buff = fs.readFileSync(ran)
      A17.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
      fs.unlinkSync(ran)
      })
      } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
      } catch (e) {
      reply(e)
      }
      break;


case 'calculator': case 'cal': case 'calculate':{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break;



            //////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//
case 'toimage': case 'makeimg': case 'toimg': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🪄" , key: m.key }})
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let media = await A17.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
A17.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break;


case 'tomp4': case 'makemp4': case 'makevideo': case 'tovideo': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc) 
A17.sendMessage(from, { react: { text: "🪄" , key: m.key }})
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let { webp2mp4File } = require('./lib/uploader')
let media = await A17.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...' } }, { quoted: m })
await fs.unlinkSync(media)
}
break;


case 'toaud': case 'makeaudio': case 'toaudio': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.waiting)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
A17.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break;


case 'tomp3': case 'makemp3': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.waiting)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
A17.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
}
break;


case 'togif': case 'makegif': case 'getgif':{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await A17.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break;



case "tourl": case 'tolink':
   if (isBan) return reply(mess.banned);
   if (isBanChat) return reply(mess.bangc);

let { GraphOrg } = require("./lib/uploader");
  if (!m.quoted) {
   //
   A17.sendMessage(from, { react: { text: "❔" , key: m.key }})
    return m.reply(
      `With caption not working, first send an *Image* / *Video* to generate a link! then tag with *${prefix}tourl*`
    );
  }
  let media5 = await A17.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
   //
    let anu = await GraphOrg(media5);
    m.reply(`*Generated Image URL:* \n\n${util.format(anu)}\n`);
  } else if (/video/.test(mime)) {
   //
    try {
      let anu = await GraphOrg(media5);
      m.reply(`*Generated Video URL:* \n\n${util.format(anu)}\n`);
    } catch (e) {
     //
      await fs.unlinkSync(media5);
      return A17.sendMessage(
        m.from,
        {
          text: `*Your video size is too big!*\n\n*Max video size:* 5MB`,
        },
        { quoted: m }
      );
    }
  } else {
    //
    return m.reply(
      `Plese provide an *Image* / *Video* to generate a link!`
    );
  }
  await fs.unlinkSync(media5);
  break;



            ///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//





case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {

if (!q) return reply(`Example : ${prefix + command} ${global.OwnerName}`)
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🪄" , key: m.key }}) 
reply(mess.waiting)	

       let link
       if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
       if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
       if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
       if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
       if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
       if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
       if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
       if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
       if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
       if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
       if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
       if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
       if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
       if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
       if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
       if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
       if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
       if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
       if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
       if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
       if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
       if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
       if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
       if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
       if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
       if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
       if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
       if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
       if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
       if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
       if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
       if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
       if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
       if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
       if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
       if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
       if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
       if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
       if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
       if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
       if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
       if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
       if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
       if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
       if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
       if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
       if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
       if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
       if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
       if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
       if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
       if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
       if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
       if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
       if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
       if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
       if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
       let anu = await maker.textpro(link, q)
          A17.sendMessage(m.chat, { image: { url: anu }, caption: `👨‍💻 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇 𝙱𝚈 Dᴇᴠ ɪxAAʀ 👩‍💻` }, { quoted: m })
       }

break;


case 'pornhub': case 'phub' :{
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🪄" , key: m.key }})
if(!q) return reply(`Example: ${prefix + command} Oh|No`)
reply(mess.waiting)	

inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
A17.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break;



            ////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'translate': case 'ts': case 'trans': {
if (isBan) return reply(mess.banned)
A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

if (!args.join(" ")) return replay("Pls enter any text to translate")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
}
break;


case 'gimage':
case 'gig':
case 'googleimage': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  A17.sendMessage(from, { react: { text: "⌛", key: m.key } });

  if (!args[0]) return reply("Enter a search term to get Google Image!");
  let gis = require('g-i-s');
  gis(args.join(" "), async (error, result) => {
    if (error) {
      console.error(error);
      return reply("Error occurred while searching for images.");
    }

    if (!result || result.length === 0) {
      return reply("No images found for the given search term.");
    }

    n = result;
    images = n[Math.floor(Math.random() * n.length)].url;
    let buttonMessage = {
      image: { url: images },
      caption: `「 🔎 𝘎𝘖𝘖𝘎𝘓𝘌 𝘐𝘔𝘈𝘎𝘌 𝘚𝘌𝘈𝘙𝘊𝘏 🔍 」\n\n☀ 𝚂𝙴𝙰𝚁𝙲𝙷 𝚃𝙴𝚁𝙼 : ${text}\n_Media Url_ : ${images}`,
      footer: `${global.BotName}`,
      headerType: 4,
    };
    A17.sendMessage(m.chat, buttonMessage, { quoted: m });
  });
}
break;


//---------------------------------------- NASA  -----------------------------------------//

case 'apod': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  
  //A17.sendMessage(from, { react: { text: "🌌", key: m.key }});
  const randomEmoji = spaceemojis[Math.floor(Math.random() * spaceemojis.length)]; // Select a random emoji
  A17.sendMessage(from, { react: { text: randomEmoji, key: m.key }});

  const apiKey = 'ugce43VIO63s8gQhcQ7Ts2DHQo1Srcchdh9mgI2S'; // Replace with your actual NASA API key // You can use it.
  const moment = require('moment'); // Import moment library here
  const timeZone = 'Asia/Kolkata'; // Set desired timezone.

  const currentDate = moment().tz(timeZone).format('YYYY-MM-DD'); // Initialize currentDate here

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.url) {
      A17.sendMessage(from, {
        image: { url: data.url },
        caption: `*Astronomy Picture of the Day:*\n\n${data.title}\n${data.explanation}`,
      });
    } else {
      console.log("No APOD image data available.");
     
      return reply('No APOD image data available.');
    }
  } catch (error) {
    console.error('Error fetching APOD data:', error);
   
    return reply('An error occurred while fetching APOD data.');
  }
}
break;


case 'google': case 'search': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "✨" , key: m.key }})

if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} anything...`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `   「 🔎 *𝘎𝘖𝘖𝘎𝘓𝘌 𝘚𝘌𝘈𝘙𝘊𝘏 𝘌𝘕𝘎𝘐𝘕𝘌* 🔍 」\n\n*✨ 𝚂𝙴𝙰𝚁𝙲𝙷 𝚃𝙴𝚁𝙼 :* ${text} ✨\n\n\n`
for (let g of res) {
teks += `*🎯 𝚃𝙸𝚃𝙻𝙴* : ${g.title}\n\n`
teks += `*🗒️ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽* : ${g.snippet}\n\n`
teks += `*🖇️ 𝙻𝙸𝙽𝙺* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
} 
reply(teks)
})
}
break;


case "tts":  case "texttospeech":  case "say": case "speak":{
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

  if (!args[0]) return reply("Please give me a text so that i can speak it!")
    
    let texttosay = text
      ? text
      : m.quoted && m.quoted.text
      ? m.quoted.text
      : m.text;
    const SpeakEngine = require("google-tts-api"); 
    const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
    A17.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `A17SpeechEngine.mp3`,},{quoted: m,});
  }
  break;


case 'wiki':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error Result Not Found!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
A17.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break;

case 'earthquake':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
A17.sendMessage(from, { image : { url : Map }, caption : captt})
break;


case 'covidinfo':
case 'covid':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

const c = await covid()
var { kasus, kematian, sembuh } = c[0]
A17.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break;



            ///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
case 'igdl':
  case 'instagram':
    case 'instagramreels':
      case 'igreels':

{
  if (isBan) {
    return reply(mess.banned);
  }

  if (isBanChat) {
    return reply(mess.bangc);
  }

  // Send a reaction emoji
  A17.sendMessage(from, { react: { text: "🪄", key: m.key } });

  // Check if a link is provided
  if (!text) {
    return reply(`Where is the link?\n\nExample: ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`);
  }

  try {
    // Download the Instagram video
    let instadownload = await instadl(text);

    // Send the downloaded video as a reply to the command
    await A17.sendMessage(m.chat, { video: { url: instadownload.url[0].url }, caption: mess.jobdone }, { quoted: m });
  } catch (error) {
    console.error('Error while processing Instagram video:', error);
    return reply('An error occurred while processing the Instagram video.');
  }
}
break;


case 'ig': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
A17.sendMessage(from, {video:{url:args[1]}, caption:'☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
A17.sendMessage(from, {image:{url:args[1]}, caption:'☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break;


case 'mp4' : {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
A17.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break;


case 'jpeg': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Please provide link!`)
try {
A17.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
} catch {
reply("Link error")
}
}
break;


case 'igtv': {	            
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
           if (!text) return reply(`Please provide link!`)
           const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
           if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
           instagramdlv3(`${text}`).then(async (data) => {            
           var buf = await getBuffer(data[0].thumbnail)        
           A17.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
           }).catch((err) => {
               reply(mess.error)
           })
       }
       break;

       
    ///  
case 'twitter': case 'td': case 'twitterdl': {     
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
       if (!text) return reply(`Please provide link!`)
          if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
          xfarrapi.Twitter(`${text}`).then(async (data) => {                    
              let txt = `「 _Twitter Downloader_ 」\n\n`
              txt += `*🎯 𝚃𝙸𝚃𝙻𝙴 :* ${data.title}\n`
              txt += `*⚡ 𝚀𝚄𝙰𝙻𝙸𝚃𝚈 :* ${data.medias[1].quality}\n`
              txt += `*🎲 𝚃𝚈𝙿𝙴 :* ${data.medias[1].extension}\n`
              txt += `*🧮 𝚂𝙸𝚉𝙴 :* ${data.medias[1].formattedSize}\n`
              txt += `*🕯️ 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽 :* ${data.medias.length}\n`
              txt += `*🖇️ 𝚄𝚁𝙻 :* ${data.url}\n\n`
              txt += `   *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`
          buf = await getBuffer(data.thumbnail)    
          A17.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
          for (let i of data.medias) {
          A17.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
          }
          }).catch((err) => {
              reply(mess.error)
          })
      }
      break;


case 'twittermp3': case 'twitteraudio': { 
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
       if (!text) return reply(`Please provide link!`)
          if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
          xfarrapi.Twitter(`${text}`).then(async (data) => {
          A17.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
          }).catch((err) => {
              reply(mess.reply)
          })
      }
      break;


case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`
let buttons = [
{buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break;


case 'twddlxx': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '✨'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
}
break;


///
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
        if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
           if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
       let bocil = require('@bochilteam/scraper')  
           bocil.facebookdlv2(`${text}`).then(async (data) => {                   
               let txt = `📥 *𝘍𝘈𝘊𝘌𝘉𝘖𝘖𝘒 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙* 📥\n\n`
               txt += `🎯 *𝚃𝙸𝚃𝙻𝙴 :* ${data.title}\n`
               txt += `⚡ *𝚀𝚄𝙰𝙻𝙸𝚃𝚈 :* ${data.result[0].quality}\n`
               txt += `🗒️ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 :* ${data.description}\n`
               txt += `🖇️ *𝚄𝚁𝙻 :* ${text}\n\n`
               txt += `    *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`
           buf = await getBuffer(data.thumbnail)    
           A17.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
           for (let i of data.result) {     
           A17.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
           }          
           }).catch((err) => {
               reply(mess.error)
           })
       }
       break;


case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            if (!text) return reply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
let noh = require('@bochilteam/scraper')                
noh.savefrom(`${text}`).then(async (anu) => {  
A17.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
          }).catch((err) => {
              reply(mess.error)
          })
      }
      break;


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `📥 *𝘍𝘈𝘊𝘌𝘉𝘖𝘖𝘒 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙* 📥

🎰 *𝚃𝚈𝙿𝙴* : video/${resd.medias[0].extension}
⚡ *𝚀𝚄𝙰𝙻𝙸𝚃𝚈* : ${resd.medias[0].quality}
🧮 *𝚂𝙸𝚉𝙴*: ${resd.medias[0].formattedSize}

    *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*
_Click the button below to download_`
let buttons = [
{buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break;


case 'fbddlxx': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '✨𝙼𝙴𝙽𝚄✨'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
}
break;


///
case 'tiktok':{
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
console.log(musim_rambutan)
const A17tiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:A17tiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
}
break;


case 'tiktoknowm': case 'ttnowm':{
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
console.log(musim_rambutan)
const A17tiktoknowm = musim_rambutan.result.nowatermark
A17.sendMessage(from, { video: { url: A17tiktoknowm }, caption: "☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂..." }, { quoted: m })
}
break;


case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
console.log(musim_rambutan)
const A17tiktokaudio = musim_rambutan.result.nowatermark
A17.sendMessage(from, { audio: { url: A17tiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
}
break;


///
case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 A17.sendMessage(from, { react: { text: "📍" , key: m.key }}) 

 if (!args.join(" ")) return replay(`Example : .yts Heat waves`)
 let yts = require("youtube-yts")
 let search = await yts(args.join(" "))
 let teks = '    🧲 *𝘠𝘖𝘜𝘛𝘜𝘉𝘌 𝘚𝘌𝘈𝘙𝘊𝘏 𝘌𝘕𝘎𝘐𝘕𝘌* 🧲\n\n ✨ *𝚂𝙴𝙰𝚁𝙲𝙷 𝚃𝙴𝚁𝙼* : '+text+' ✨\n\n'
 let no = 1
 for (let i of search.all) {
 teks += ` 🚩 𝚁𝙴𝚂𝚄𝙻𝚃 𝙽𝙾 : ${no++}\n\n🔥𝚃𝙸𝚃𝙻𝙴 : ${i.title}\n\n🎰𝚅𝙸𝙴𝚆𝚂 : ${i.views}\n\n⏳𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽 : ${i.timestamp}\n\n📤𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳 : ${i.ago}\n\n🧑‍🎤𝙰𝚄𝚃𝙷𝙾𝚁: ${i.author.name}\n\n🖇️𝚄𝚁𝙻 : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 A17.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break; 

 
case 'play':
case 'song':
case 'music': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  A17.sendMessage(from, { react: { text: "🎧", key: m.key }});

  const YT = require('./lib/ytdl-core');
  const yts = require('youtube-yts');
  const ffmpeg = require('fluent-ffmpeg');

  let search = await yts(text);
  let anu = search.videos[0];
  const ytmp3play = await YT.mp3(anu.url);

  // Fetch the thumbnail URL from the 'anu' object
  let thumbnailUrl = anu.thumbnail;

  await A17.sendMessage(
    from,
    {
      image: { url: thumbnailUrl }, // Include the thumbnail image in the response
      caption: `\n  🎨 *𝚂𝙾𝙽𝙶 𝚃𝙸𝚃𝙻𝙴 :* *${anu.title}
            
  ⏳ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽 :* ${anu.timestamp}

  📈 *𝚅𝙸𝙴𝚆𝙴𝚁𝚂 :* ${anu.views}

  📺 *𝙲𝙷𝙰𝙽𝙽𝙴𝙻 :* ${anu.author.name}

  📤 *𝚅𝙸𝙳𝙴𝙾 𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳 :* ${anu.ago}

  🔗 *𝚄𝚁𝙻 :* ${anu.url}\n

       *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`,
      buttons: [
        { buttonId: 'download_audio', buttonText: 'Download Audio', type: 1 },
        { buttonId: 'download_document', buttonText: 'Download Document', type: 1 },
        { buttonId: 'download_voice', buttonText: 'Download Voice', type: 1 },
      ],
    },
    { quoted: m }
  );

  // Handle button clicks
  A17.onMessageButtons(from, (button) => {
    if (button.buttonId === 'download_audio') {
      // Send the audio file with the proper 'type' property set to 'audio'
      A17.sendMessage(from, {
        audio: fs.readFileSync(ytmp3play.path),
        filename: anu.title + '.mp3',
        mimetype: 'audio/mpeg',
        quoted: m,
      });
    } else if (button.buttonId === 'download_document') {
      // Send the audio as a document file
      A17.sendMessage(from, {
        document: fs.readFileSync(ytmp3play.path),
        filename: anu.title + '.mp3',
        mimetype: 'audio/mpeg',
        quoted: m,
      });
    } else if (button.buttonId === 'download_voice') {
      // Send the audio as a voice note
      A17.sendMessage(from, {
        audio: fs.readFileSync(ytmp3play.path),
        ptt: true, // Set ptt to true to send it as a voice note
        quoted: m,
      });
    }
  });
}
break;


      
 case 'ytvd': case 'video': case'ytvideo': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "📽️" , key: m.key }})
const YT=require('./lib/ytdl-core')
  let yts = require("youtube-yts")
  let search = await yts(text)
  let anu = search.videos[0]
  const ytmp4play = await YT.mp4(anu.url)
A17.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+'\n\n  🔎 𝙱𝚈 *𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇*',}, {quoted:m})
}

break;




case 'ytmp3': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

  const YT=require('./lib/ytdl-core')
  const ytmp3play2 = await YT.mp3(text)
  
await A17.sendMessage(from, {document: fs.readFileSync(ytmp3play2.path),fileName:'📥 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇 𝚈𝚃𝚄𝚁𝙻 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁',mimetype: 'audio/mpeg',}, {quoted:m})
}
break;


case 'ytvd2': case 'ytmp4': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "📽️" , key: m.key }})
const YT=require('./lib/ytdl-core')
  const ytmp4play2 = await YT.mp4(text)
A17.sendMessage(from, {video:{url:ytmp4play2.videoUrl}, mimetype:"video/mp4", caption:'\n 📥 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳 𝙱𝚈 *𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇*',}, {quoted:m})
}
break;


case 'lyrics': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
A17.sendMessage(from, { react: { text: "🗒️" , key: m.key }})
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
🎯 *𝚃𝙸𝚃𝙻𝙴 :* ${result.title}
🧑‍🎤 *𝙰𝚄𝚃𝙷𝙾𝚁 :* ${result.author}
🖇️ *𝚄𝚁𝙻 :* ${result.link}

🃏 *𝙻𝚈𝚁𝙸𝙲𝚂 :* ${result.lyrics}\n\n
       *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*
`.trim())
}
break;



           //////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'couplepp':
case 'cpp':
case 'ppcouple': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  
  A17.sendMessage(from, { react: { text: "🙀", key: m.key }});
  reply(mess.waiting);

  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');

  for (let i = 0; i < 3; i++) {  // the set of picures.
    let random = anu[Math.floor(Math.random() * anu.length)];

    // Sending the male picture
    await A17.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m });

    // Sending the female picture
    await A17.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m });
  }
}
break;


//
case 'coffee': case 'kopi': {
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

     
              let buttonMessage = {
                  image: { url: 'https://coffee.alexflipnote.dev/random' },
                  caption: `Here is your Coffee...`,
                             }
              A17.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
          break;


//
case 'pinterest':
case 'pin': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  A17.sendMessage(from, { react: { text: "🐦" , key: m.key }});

  if (!args.join(" ")) return reply(`${pushname} Please provide a search term!`);
 reply(mess.waiting)
  let { pinterest } = require('./lib/scraper');
  let anutrest = await pinterest(text);
  let results = [];

  // Get multiple random images (let's say 5 images)
  const numImages = 5;
  for (let i = 0; i < numImages && i < anutrest.length; i++) {
    results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
  }

  // Send each image without any caption
  for (let i = 0; i < results.length; i++) {
    A17.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
  }
}
break;




          /////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//
case 'swm': case 'take': case 'stickerwm': case 'steal':{
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!args.join(" ")) return reply(`Like use .take ?𝛸𝛥𝛥𝑅 𝐵𝑈𝐺 𝐵𝛩𝑇 𝛲𝛩𝑊𝑅𝛯𝐷 𝐵𝑌 Dᴇᴠ ɪxAAʀ`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
A17.downloadAndSaveMediaMessage(quoted, "gifee")
A17.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
let media = await quoted.download()
let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
}
}
break;


case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "⌛" , key: m.key }})

let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await A17.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await A17.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break;


case 'sgif': case 'sticker': case 's': {
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "🌝" , key: m.key }})
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break;



          ///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'soulmate':  {

  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!m.isGroup) return reply(`${mess.grouponly}`);
  A17.sendMessage(from, { react: { text: "🌝", key: m.key } });

  let member = participants.map(u => u.id);
  let me = m.sender;
  let jodoh = member[Math.floor(Math.random() * member.length)];

  let message = `👫 𝙱𝙴 𝙼𝙴 𝚂𝙾𝚄𝙻𝙼𝙰𝚃𝙴...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
  A17.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
}
break;


case 'handsomecheck':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "😺" , key: m.key }})
      if (!text) return replay(`Tag Someone, Example : ${prefix + command} @DarkDevil`)
        const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const teng = gan[Math.floor(Math.random() * gan.length)]
A17.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
        break;


case 'beautifulcheck':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "😺" , key: m.key }})
  
      if (!text) return replay(`Tag Someone, Example : ${prefix + command} @DarkDevil`)
        const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const tik = can[Math.floor(Math.random() * can.length)]
A17.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
        break;



case 'awesomecheck':
case 'greatcheck':
  case 'gaycheck':
    case 'cutecheck':
        case 'lesbiancheck':
           case 'hornycheck':
               case 'prettycheck':
                  case 'lovelycheck':
                    case 'uglycheck':
                      if (isBan) return reply(mess.banned)
                      if (isBanChat) return reply(mess.bangc)
  A17.sendMessage(from, { react: { text: "😺" , key: m.key }})
  
      if (!text) return replay(`Tag Someone, Example : ${prefix + command} @DarkDevil`)
        const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
A17.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
        break;


case 'charactercheck':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🤧" , key: m.key }})

        if (!text) return replay(`Tag Someone, Example : ${prefix + command} @DarkDevil`)
        const A17tttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
        const taky = A17tttt[Math.floor(Math.random() * A17tttt.length)]
        A17.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
           break;
                 

//
case 'dare':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "😐" , key: m.key }})

                 const dare =[
       "𝑬𝒂𝒕 𝟐 𝒕𝒂𝒃𝒍𝒆𝒔𝒑𝒐𝒐𝒏𝒔 𝒐𝒇 𝒓𝒊𝒄𝒆 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒂𝒏𝒚 𝒔𝒊𝒅𝒆 𝒅𝒊𝒔𝒉𝒆𝒔, 𝒊𝒇 𝒊𝒕'𝒔 𝒅𝒓𝒂𝒈𝒈𝒊𝒏𝒈 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒅𝒓𝒊𝒏𝒌",
       "𝑺𝒑𝒊𝒍𝒍 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒉𝒐 𝒎𝒂𝒌𝒆 𝒚𝒐𝒖 𝒑𝒂𝒖𝒔𝒆",
       "𝑪𝒂𝒍𝒍 𝒄𝒓𝒖𝒔𝒉/𝒑𝒊𝒄𝒌𝒍𝒆 𝒏𝒐𝒘 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒔𝒔",
       "𝑫𝒓𝒐𝒑 𝒐𝒏𝒍𝒚 𝒆𝒎𝒐𝒕𝒆 𝒆𝒗𝒆𝒓𝒚 𝒕𝒊𝒎𝒆 𝒚𝒐𝒖 𝒕𝒚𝒑𝒆 𝒐𝒏 𝒈𝒄/𝒑𝒄 𝒇𝒐𝒓 𝟏 𝒅𝒂𝒚.",
       "𝑺𝒂𝒚 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑾𝒉𝒐 𝑾𝒂𝒏𝒕𝒔 𝑻𝒐 𝑩𝒆 𝒂 𝑴𝒊𝒍𝒍𝒊𝒐𝒏𝒂𝒊𝒓𝒆! 𝒕𝒐 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑𝒔 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆",
       "𝑪𝒂𝒍𝒍 𝒆𝒙 𝒔𝒂𝒚𝒊𝒏𝒈 𝒎𝒊𝒔𝒔",
       "𝑺𝒊𝒏𝒈 𝒕𝒉𝒆 𝒄𝒉𝒐𝒓𝒖𝒔 𝒐𝒇 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒔𝒐𝒏𝒈 𝒚𝒐𝒖 𝒑𝒍𝒂𝒚𝒆𝒅",
       "𝑾𝒏 𝒚𝒐𝒖𝒓 𝒆𝒙/𝒄𝒓𝒖𝒔𝒉/𝒈𝒊𝒓𝒍𝒇𝒓𝒊𝒆𝒏𝒅, 𝒔𝒂𝒚𝒔 𝒉𝒊 (𝒏𝒂𝒎𝒆), 𝒘𝒂𝒏𝒕𝒔 𝒕𝒐 𝒄𝒂𝒍𝒍, 𝒋𝒖𝒔𝒕 𝒂 𝒎𝒐𝒎𝒆𝒏𝒕. 𝑰 𝒎𝒊𝒔𝒔🥺👉🏼👈🏼",
       "𝑩𝒂𝒏𝒈 𝒐𝒏 𝒕𝒉𝒆 𝒕𝒂𝒃𝒍𝒆 (𝒘𝒉𝒊𝒄𝒉 𝒊𝒔 𝒂𝒕 𝒉𝒐𝒎𝒆) 𝒖𝒏𝒕𝒊𝒍 𝒚𝒐𝒖 𝒈𝒆𝒕 𝒔𝒄𝒐𝒍𝒅𝒆𝒅 𝒇𝒐𝒓 𝒃𝒆𝒊𝒏𝒈 𝒏𝒐𝒊𝒔𝒚",
       "𝑻𝒆𝒍𝒍 𝒓𝒂𝒏𝒅𝒐𝒎 𝒑𝒆𝒐𝒑𝒍𝒆 - 𝑰 𝒘𝒂𝒔 𝒋𝒖𝒔𝒕 𝒕𝒐𝒍𝒅 𝑰 𝒘𝒂𝒔 𝒚𝒐𝒖𝒓 𝒕𝒘𝒊𝒏 𝒇𝒊𝒓𝒔𝒕, 𝒘𝒆 𝒔𝒆𝒑𝒂𝒓𝒂𝒕𝒆𝒅, 𝒕𝒉𝒆𝒏 𝑰 𝒉𝒂𝒅 𝒑𝒍𝒂𝒔𝒕𝒊𝒄 𝒔𝒖𝒓𝒈𝒆𝒓𝒚. 𝑨𝒏𝒅 𝒕𝒉𝒊𝒔 𝒊𝒔 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒄𝒊𝒚𝒖𝒔𝒔𝒔_ 𝒕𝒉𝒊𝒏𝒈",
       "𝑴𝒆𝒏𝒕𝒊𝒐𝒏 𝒆𝒙'𝒔 𝒏𝒂𝒎𝒆",
       "𝑴𝒂𝒌𝒆 𝟏 𝒓𝒉𝒚𝒎𝒆 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒎𝒆𝒎𝒃𝒆𝒓𝒔!",
       "𝑺𝒆𝒏𝒅 𝒖𝒓 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒄𝒉𝒂𝒕 𝒍𝒊𝒔𝒕",
       "𝑪𝒉𝒂𝒕 𝒓𝒂𝒏𝒅𝒐𝒎 𝒑𝒆𝒐𝒑𝒍𝒆 𝒘𝒊𝒕𝒉 𝒈𝒉𝒆𝒕𝒐 𝒍𝒂𝒏𝒈𝒖𝒂𝒈𝒆 𝒕𝒉𝒆𝒏 𝒔𝒔 𝒉𝒆𝒓𝒆",
       "𝑻𝒆𝒍𝒍 𝒚𝒐𝒖𝒓 𝒐𝒘𝒏 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝒆𝒎𝒃𝒂𝒓𝒓𝒂𝒔𝒔𝒊𝒏𝒈 𝒕𝒉𝒊𝒏𝒈𝒔",
       "𝑻𝒂𝒈 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒚𝒐𝒖 𝒉𝒂𝒕𝒆",
       "𝑷𝒓𝒆𝒕𝒆𝒏𝒅𝒊𝒏𝒈 𝒕𝒐 𝒃𝒆 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒅, 𝒇𝒐𝒓 𝒆𝒙𝒂𝒎𝒑𝒍𝒆: 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒅 𝒃𝒚 𝒅𝒐𝒈, 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒅 𝒃𝒚 𝒈𝒓𝒂𝒔𝒔𝒉𝒐𝒑𝒑𝒆𝒓𝒔, 𝒑𝒐𝒔𝒔𝒆𝒔𝒔𝒆𝒅 𝒃𝒚 𝒓𝒆𝒇𝒓𝒊𝒈𝒆𝒓𝒂𝒕𝒐𝒓, 𝒆𝒕𝒄.",
       "𝑪𝒉𝒂𝒏𝒈𝒆 𝒏𝒂𝒎𝒆 𝒕𝒐 *𝑰 𝑨𝑴 𝑫𝑶𝑵𝑲𝑬𝒀* 𝒇𝒐𝒓 𝟐𝟒 𝒉𝒐𝒖𝒓𝒔",
       "𝑺𝒏𝒂𝒑/𝒑𝒐𝒔𝒕 𝒃𝒐𝒚𝒇𝒓𝒊𝒆𝒏𝒅 𝒑𝒉𝒐𝒕𝒐/𝒄𝒓𝒖𝒔𝒉",
       "𝑻𝒆𝒍𝒍 𝒎𝒆 𝒚𝒐𝒖𝒓 𝒃𝒐𝒚𝒇𝒓𝒊𝒆𝒏𝒅 𝒕𝒚𝒑𝒆!",
       "𝑺𝒂𝒚 *𝒊 𝒉𝒗 𝒄𝒓𝒖𝒔𝒉 𝒐𝒏 𝒚𝒐𝒖, 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒃𝒆 𝒎𝒚 𝒈𝒊𝒓𝒍𝒇𝒓𝒊𝒆𝒏𝒅?* 𝒕𝒐 𝒕𝒉𝒆 𝒐𝒑𝒑𝒐𝒔𝒊𝒕𝒆 𝒔𝒆𝒙, 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒕𝒊𝒎𝒆 𝒚𝒐𝒖 𝒄𝒉𝒂𝒕𝒕𝒆𝒅 (𝒔𝒖𝒃𝒎𝒊𝒕 𝒐𝒏 𝒘𝒂/𝒕𝒆𝒍𝒆), 𝒘𝒂𝒊𝒕 𝒇𝒐𝒓 𝒉𝒊𝒎 𝒕𝒐 𝒓𝒆𝒑𝒍𝒚, 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆, 𝒅𝒓𝒐𝒑 𝒉𝒆𝒓𝒆",
       "𝑹𝒆𝒄𝒐𝒓𝒅 𝒖𝒓 𝒗𝒐𝒊𝒄𝒆 𝒕𝒉𝒂𝒕 𝒓𝒆𝒂𝒅 *𝒕𝒊𝒕𝒂𝒓 𝒌𝒆 𝒂𝒈𝒆 𝒅𝒐 𝒕𝒊𝒕𝒂𝒓, 𝒕𝒊𝒕𝒂𝒓 𝒌𝒆 𝒑𝒊𝒄𝒉𝒆 𝒅𝒐 𝒕𝒊𝒕𝒂𝒓*",
       "𝑷𝒓𝒂𝒏𝒌 𝒄𝒉𝒂𝒕 𝒆𝒙 𝒂𝒏𝒅 𝒔𝒂𝒚 *𝒊 𝒍𝒐𝒗𝒆 𝒖, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒐𝒎𝒆 𝒃𝒂𝒄𝒌.* 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒔𝒂𝒚𝒊𝒏𝒈 𝒅𝒂𝒓𝒆!",
       "𝑪𝒉𝒂𝒕 𝒕𝒐 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒘𝒂 𝒊𝒏 𝒕𝒉𝒆 𝒐𝒓𝒅𝒆𝒓 𝒂𝒄𝒄𝒐𝒓𝒅𝒊𝒏𝒈 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒃𝒂𝒕𝒕𝒆𝒓𝒚 %, 𝒕𝒉𝒆𝒏 𝒕𝒆𝒍𝒍 𝒉𝒊𝒎 *𝒊 𝒂𝒎 𝒍𝒖𝒄𝒌𝒚 𝒕𝒐 𝒉𝒗 𝒚𝒐𝒖!*",
       "𝑪𝒉𝒂𝒏𝒈𝒆 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒕𝒐 *𝑰 𝒂𝒎 𝒂 𝒄𝒉𝒊𝒍𝒅 𝒐𝒇 𝒓𝒂𝒏𝒅𝒊* 𝒇𝒐𝒓 𝟓 𝒉𝒐𝒖𝒓𝒔",
       "𝑻𝒚𝒑𝒆 𝒊𝒏 𝒃𝒆𝒏𝒈𝒂𝒍𝒊 𝟐𝟒 𝒉𝒐𝒖𝒓𝒔",
       "𝑼𝒔𝒆 𝒔𝒆𝒍𝒎𝒐𝒏 𝒃𝒉𝒐𝒊 𝒑𝒉𝒐𝒕𝒐 𝒇𝒐𝒓 𝟑 𝒅𝒂𝒚𝒔",
       "𝑫𝒓𝒐𝒑 𝒂 𝒔𝒐𝒏𝒈 𝒒𝒖𝒐𝒕𝒆 𝒕𝒉𝒆𝒏 𝒕𝒂𝒈 𝒂 𝒔𝒖𝒊𝒕𝒂𝒃𝒍𝒆 𝒎𝒆𝒎𝒃𝒆𝒓 𝒇𝒐𝒓 𝒕𝒉𝒂𝒕 𝒒𝒖𝒐𝒕𝒆",
       "𝑺𝒆𝒏𝒅 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆 𝒔𝒂𝒚𝒊𝒏𝒈 𝒄𝒂𝒏 𝒊 𝒄𝒂𝒍𝒍 𝒖 𝒃𝒂𝒃𝒚?",
       "𝑺𝑺 𝒓𝒆𝒄𝒆𝒏𝒕 𝒄𝒂𝒍𝒍 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑",
       "𝑺𝒂𝒚 *𝒀𝑶𝑼 𝑨𝑹𝑬 𝑺𝑶 𝑩𝑬𝑨𝑼𝑻𝑰𝑭𝑼𝑳 𝑫𝑶𝑵'𝑻 𝑳𝑰𝑬* 𝒕𝒐 𝒈𝒖𝒚𝒔!",
       "𝑷𝑶𝑷 𝒕𝒐 𝒂 𝒈𝒓𝒐𝒖𝒑 𝒎𝒆𝒎𝒃𝒆𝒓, 𝒂𝒏𝒅 𝒔𝒂𝒚 𝒇𝒖𝒄𝒌 𝒚𝒐𝒖",
       "𝑨𝒄𝒕 𝒍𝒊𝒌𝒆 𝒂 𝒄𝒉𝒊𝒄𝒌𝒆𝒏 𝒊𝒏 𝒇𝒓𝒐𝒏𝒕 𝒐𝒇 𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔",
       "𝑷𝒊𝒄𝒌 𝒖𝒑 𝒂 𝒓𝒂𝒏𝒅𝒐𝒎 𝒃𝒐𝒐𝒌 𝒂𝒏𝒅 𝒓𝒆𝒂𝒅 𝒐𝒏𝒆 𝒑𝒂𝒈𝒆 𝒐𝒖𝒕 𝒍𝒐𝒖𝒅 𝒊𝒏 𝒗𝒏 𝒏 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒉𝒆𝒓𝒆",
       "𝑶𝒑𝒆𝒏 𝒚𝒐𝒖𝒓 𝒇𝒓𝒐𝒏𝒕 𝒅𝒐𝒐𝒓 𝒂𝒏𝒅 𝒉𝒐𝒘𝒍 𝒍𝒊𝒌𝒆 𝒂 𝒘𝒐𝒍𝒇 𝒇𝒐𝒓 𝟏𝟎 𝒔𝒆𝒄𝒐𝒏𝒅𝒔",
       "𝑻𝒂𝒌𝒆 𝒂𝒏 𝒆𝒎𝒃𝒂𝒓𝒓𝒂𝒔𝒔𝒊𝒏𝒈 𝒔𝒆𝒍𝒇𝒊𝒆 𝒂𝒏𝒅 𝒑𝒂𝒔𝒕𝒆 𝒊𝒕 𝒐𝒏 𝒚𝒐𝒖𝒓 𝒑𝒓𝒐𝒇𝒊𝒍𝒆 𝒑𝒊𝒄𝒕𝒖𝒓𝒆",
       "𝑳𝒆𝒕 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒐𝒐𝒔𝒆 𝒂 𝒘𝒐𝒓𝒅 𝒂𝒏𝒅 𝒂 𝒘𝒆𝒍𝒍 𝒌𝒏𝒐𝒘𝒏 𝒔𝒐𝒏𝒈. 𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒐 𝒔𝒊𝒏𝒈 𝒕𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒊𝒏 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆",
       "𝑾𝒂𝒍𝒌 𝒐𝒏 𝒚𝒐𝒖𝒓 𝒆𝒍𝒃𝒐𝒘𝒔 𝒂𝒏𝒅 𝒌𝒏𝒆𝒆𝒔 𝒇𝒐𝒓 𝒂𝒔 𝒍𝒐𝒏𝒈 𝒂𝒔 𝒚𝒐𝒖 𝒄𝒂𝒏",
       "𝑺𝒊𝒏𝒈 𝒏𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝒂𝒏𝒕𝒉𝒆𝒎 𝒊𝒏 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆",
       "𝑫𝒂𝒏𝒄𝒆 𝒇𝒐𝒓 𝟑𝟎 𝒔𝒆𝒄𝒐𝒏𝒅𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒔𝒊𝒕𝒕𝒊𝒏𝒈 𝒓𝒐𝒐𝒎😂",
       "𝑻𝒆𝒍𝒍 𝒕𝒉𝒆 𝒔𝒂𝒅𝒅𝒆𝒔𝒕 𝒔𝒕𝒐𝒓𝒚 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘",
       "𝑴𝒂𝒌𝒆 𝒂 𝒕𝒘𝒆𝒓𝒌 𝒅𝒂𝒏𝒄𝒆 𝒗𝒊𝒅𝒆𝒐 𝒂𝒏𝒅 𝒑𝒖𝒕 𝒊𝒕 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝒇𝒐𝒓 𝟓𝒎𝒊𝒏𝒔",
       "𝑬𝒂𝒕 𝒂 𝒓𝒂𝒘 𝒑𝒊𝒆𝒄𝒆 𝒐𝒇 𝒈𝒂𝒓𝒍𝒊𝒄",
       "𝑺𝒉𝒐𝒘 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒇𝒊𝒗𝒆 𝒑𝒆𝒐𝒑𝒍𝒆 𝒚𝒐𝒖 𝒕𝒆𝒙𝒕𝒆𝒅 𝒂𝒏𝒅 𝒘𝒉𝒂𝒕 𝒕𝒉𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔 𝒔𝒂𝒊𝒅",
       "𝑷𝒖𝒕 𝒚𝒐𝒖𝒓 𝒇𝒖𝒍𝒍 𝒏𝒂𝒎𝒆 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝒇𝒐𝒓 𝟓𝒉𝒓𝒔",
       "𝑴𝒂𝒌𝒆 𝒂 𝒔𝒉𝒐𝒓𝒕 𝒅𝒂𝒏𝒄𝒆 𝒗𝒊𝒅𝒆𝒐 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒂𝒏𝒚 𝒇𝒊𝒍𝒕𝒆𝒓 𝒋𝒖𝒔𝒕 𝒘𝒊𝒕𝒉 𝒂 𝒎𝒖𝒔𝒊𝒄 𝒂𝒏𝒅 𝒑𝒖𝒕 𝒊𝒕 𝒐𝒏 𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒇𝒐𝒓 𝟓𝒉𝒓𝒔",
       "𝑪𝒂𝒍𝒍 𝒖𝒓 𝒃𝒆𝒔𝒕𝒊𝒆, 𝒃𝒊𝒕𝒄𝒉",
       "𝑷𝒖𝒕 𝒚𝒐𝒖𝒓 𝒑𝒉𝒐𝒕𝒐 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒇𝒊𝒍𝒕𝒆𝒓 𝒐𝒏 𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒇𝒐𝒓 𝟏𝟎𝒎𝒊𝒏𝒔",
       "𝑺𝒂𝒚 𝒊 𝒍𝒐𝒗𝒆 𝒐𝒍𝒊 𝒍𝒐𝒏𝒅𝒐𝒏 𝒊𝒏 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆🤣🤣",
       "𝑺𝒆𝒏𝒅 𝒂 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒆𝒙 𝒂𝒏𝒅 𝒔𝒂𝒚 𝑰 𝒔𝒕𝒊𝒍𝒍 𝒍𝒊𝒌𝒆 𝒚𝒐𝒖",
       "𝑪𝒂𝒍𝒍 𝑪𝒓𝒖𝒔𝒉/𝒈𝒊𝒓𝒍𝒇𝒓𝒊𝒆𝒏𝒅/𝒃𝒆𝒔𝒕𝒊𝒆 𝒏𝒐𝒘 𝒂𝒏𝒅 𝒔𝒄𝒓𝒆𝒆𝒏𝒔𝒉𝒐𝒕 𝒉𝒆𝒓𝒆",
       "𝑷𝑶𝑷 𝒕𝒐 𝒐𝒏𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒎𝒆𝒎𝒃𝒆𝒓 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍 𝒄𝒉𝒂𝒕 𝒂𝒏𝒅 𝑺𝒂𝒚 𝒚𝒐𝒖 𝒖𝒈𝒍𝒚 𝒃𝒖𝒔𝒕𝒂𝒓𝒅",
       "𝑺𝒂𝒚 𝒚𝒐𝒖 𝒂𝒓𝒆 𝑩𝑬𝑨𝑼𝑻𝑰𝑭𝑼𝑳/𝑯𝑨𝑵𝑫𝑺𝑶𝑴𝑬 𝒕𝒐 𝒐𝒏𝒆 𝒐𝒇 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒊𝒔 𝒊𝒏 𝒕𝒐𝒑 𝒐𝒇 𝒖𝒓 𝒑𝒊𝒏𝒍𝒊𝒔𝒕 𝒐𝒓 𝒕𝒉𝒆 𝒇𝒊𝒓𝒔𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒐𝒏 𝒖𝒓 𝒄𝒉𝒂𝒕𝒍𝒊𝒔𝒕",
       "𝑺𝒆𝒏𝒅 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆𝒔 𝒂𝒏𝒅 𝒔𝒂𝒚, 𝒄𝒂𝒏 𝒊 𝒄𝒂𝒍𝒍 𝒖 𝒃𝒂𝒃𝒚, 𝒊𝒇 𝒖 𝒓 𝒃𝒐𝒚 𝒕𝒂𝒈 𝒈𝒊𝒓𝒍/𝒊𝒇 𝒈𝒊𝒓𝒍 𝒕𝒂𝒈 𝒃𝒐𝒚",
       "𝑾𝒓𝒊𝒕𝒆 𝒊 𝒍𝒐𝒗𝒆 𝒚𝒐𝒖 (𝒓𝒂𝒏𝒅𝒐𝒎 𝒈𝒓𝒖𝒑 𝒎𝒆𝒎𝒃𝒆𝒓 𝒏𝒂𝒎𝒆, 𝒘𝒉𝒐 𝒊𝒔 𝒐𝒏𝒍𝒊𝒏𝒆) 𝒊𝒏 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍 𝒄𝒉𝒂𝒕, (𝒊𝒇 𝒖 𝒓 𝒃𝒐𝒚 𝒘𝒓𝒊𝒕𝒆 𝒈𝒊𝒓𝒍 𝒏𝒂𝒎𝒆/𝒊𝒇 𝒈𝒊𝒓𝒍 𝒘𝒓𝒊𝒕𝒆 𝒃𝒐𝒚 𝒏𝒂𝒎𝒆) 𝒕𝒂𝒌𝒆 𝒂 𝒔𝒏𝒂𝒑 𝒐𝒇 𝒕𝒉𝒆 𝒑𝒊𝒄 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒉𝒆𝒓𝒆",
       "𝑼𝒔𝒆 𝒂𝒏𝒚 𝒃𝒐𝒍𝒍𝒚𝒘𝒐𝒐𝒅 𝒂𝒄𝒕𝒐𝒓 𝒑𝒉𝒐𝒕𝒐 𝒂𝒔 𝒖𝒓 𝒑𝒇𝒑 𝒇𝒐𝒓 𝟑 𝒅𝒂𝒚𝒔",
       "𝑷𝒖𝒕 𝒚𝒐𝒖𝒓 𝒄𝒓𝒖𝒔𝒉 𝒑𝒉𝒐𝒕𝒐 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏, 𝒕𝒉𝒊𝒔 𝒊𝒔 𝒎𝒚 𝒄𝒓𝒖𝒔𝒉",
       "𝑪𝒉𝒂𝒏𝒈𝒆 𝒏𝒂𝒎𝒆 𝒕𝒐 𝑰 𝑨𝑴 𝑮𝑨𝒀 𝒇𝒐𝒓 𝟓 𝒉𝒐𝒖𝒓𝒔",
       "𝑪𝒉𝒂𝒕 𝒕𝒐 𝒂𝒏𝒚 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒊𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒂𝒏𝒅 𝒔𝒂𝒚 𝒊 𝒘𝒊𝒍𝒍 𝒃𝒆 𝒖𝒓 𝒃𝒇/𝒈𝒇 𝒇𝒐𝒓 𝟓𝒉𝒐𝒖𝒓𝒔",
       "𝑺𝒆𝒏𝒅 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆 𝒔𝒂𝒚𝒔 𝒊 𝒉𝒗 𝒄𝒓𝒖𝒔𝒉 𝒐𝒏 𝒚𝒐𝒖, 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒃𝒆 𝒎𝒚 𝒈𝒊𝒓𝒍𝒇𝒓𝒊𝒆𝒏𝒅/𝒃𝒐𝒚𝒇𝒓𝒊𝒆𝒏𝒅 𝒐𝒓 𝒏𝒐𝒕? 𝒕𝒐 𝒂𝒏𝒚 𝒓𝒂𝒏𝒅𝒐𝒎 𝒑𝒆𝒓𝒔𝒐𝒏 𝒇𝒓𝒐𝒎 𝒕𝒉𝒆 𝒈𝒓𝒖𝒑(𝒊𝒇 𝒖 𝒈𝒊𝒓𝒍 𝒄𝒉𝒐𝒐𝒔𝒆 𝒃𝒐𝒚, 𝒊𝒇 𝒃𝒐𝒚 𝒄𝒉𝒐𝒐𝒔𝒆 𝒈𝒊𝒓𝒍",
       "𝑺𝒍𝒂𝒑 𝒖𝒓 𝒃𝒖𝒕𝒕 𝒉𝒂𝒓𝒅𝒍𝒚 𝒔𝒆𝒏𝒅 𝒕𝒉𝒆 𝒔𝒐𝒖𝒏𝒅 𝒐𝒇 𝒔𝒍𝒂𝒑 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆😂",
       "𝑺𝒕𝒂𝒕𝒆 𝒖𝒓 𝒈𝒇/𝒃𝒇 𝒕𝒚𝒑𝒆 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒕𝒉𝒆 𝒑𝒉𝒐𝒕𝒐 𝒉𝒆𝒓𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏, 𝒖𝒈𝒍𝒊𝒆𝒔𝒕 𝒈𝒊𝒓𝒍/𝒃𝒐𝒚 𝒊𝒏 𝒕𝒉𝒆 𝒘𝒐𝒓𝒍𝒅",
       "𝑺𝒉𝒐𝒖𝒕 𝒃𝒓𝒂𝒗𝒐𝒐𝒐𝒐𝒐𝒐𝒐𝒐𝒐 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒉𝒆𝒓𝒆 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆",
       "𝑺𝒏𝒂𝒑 𝒚𝒐𝒖𝒓 𝒇𝒂𝒄𝒆 𝒕𝒉𝒆𝒏 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒉𝒆𝒓𝒆",
       "𝑺𝒆𝒏𝒅 𝒚𝒐𝒖𝒓 𝒑𝒉𝒐𝒕𝒐 𝒘𝒊𝒕𝒉 𝒂 𝒄𝒂𝒑𝒕𝒊𝒐𝒏, 𝒊 𝒂𝒎 𝒍𝒆𝒔𝒃𝒊𝒂𝒏",
       "𝑺𝒉𝒐𝒖𝒕 𝒖𝒔𝒊𝒏𝒈 𝒉𝒂𝒓𝒔𝒉 𝒘𝒐𝒓𝒅𝒔 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒉𝒆𝒓𝒆 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒏",
       "𝑺𝒉𝒐𝒖𝒕 𝒚𝒐𝒖 𝒃𝒂𝒔𝒕𝒂𝒓𝒅 𝒊𝒏 𝒇𝒓𝒐𝒏𝒕 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒎𝒐𝒎/𝒑𝒂𝒑𝒂",
       "𝑪𝒉𝒂𝒏𝒈𝒆 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒕𝒐 𝒊 𝒂𝒎 𝒊𝒅𝒊𝒐𝒕 𝒇𝒐𝒓 𝟐𝟒 𝒉𝒐𝒖𝒓𝒔",
       "𝑺𝒍𝒂𝒑 𝒖𝒓𝒔𝒆𝒍𝒇 𝒇𝒊𝒓𝒎𝒍𝒚 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒕𝒉𝒆 𝒔𝒐𝒖𝒏𝒅 𝒐𝒇 𝒔𝒍𝒂𝒑 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆😂",
       "𝑺𝒂𝒚 𝑰 𝒍𝒐𝒗𝒆 𝒕𝒉𝒆 𝑩𝒐𝒕 𝒐𝒘𝒏𝒆𝒓 𝑫𝒂𝒓𝒌𝑫𝒆𝒗𝒊𝒍 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆",
       "𝑺𝒆𝒏𝒅 𝒚𝒐𝒖𝒓 𝒈𝒇/𝒃𝒇 𝒑𝒊𝒄 𝒉𝒆𝒓𝒆",
       "𝑴𝒂𝒌𝒆 𝒂𝒏𝒚 𝒕𝒊𝒌𝒕𝒐𝒌 𝒅𝒂𝒏𝒄𝒆 𝒄𝒉𝒂𝒍𝒍𝒆𝒏𝒈𝒆 𝒗𝒊𝒅𝒆𝒐 𝒂𝒏𝒅 𝒑𝒖𝒕 𝒊𝒕 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔, 𝒖 𝒄𝒂𝒏 𝒅𝒆𝒍𝒆𝒕𝒆 𝒊𝒕 𝒂𝒇𝒕𝒆𝒓 𝟓𝒉𝒓𝒔",
       "𝑼𝒑 𝒘𝒊𝒕𝒉 𝒚𝒐𝒖𝒓 𝒃𝒆𝒔𝒕 𝒇𝒓𝒊𝒆𝒏𝒅 𝒇𝒐𝒓 𝟓𝒉𝒓𝒔 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒕𝒆𝒍𝒍𝒊𝒏𝒈 𝒉𝒊𝒎/𝒉𝒆𝒓 𝒕𝒉𝒂𝒕 𝒊𝒕𝒔 𝒂 𝒅𝒂𝒓𝒆",
       "𝑻𝒆𝒍𝒍 𝒐𝒏𝒆 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒇𝒓𝒏𝒅 𝒕𝒉𝒂𝒕 𝒖 𝒍𝒐𝒗𝒆 𝒉𝒊𝒎/𝒉𝒆𝒓 𝒂𝒏𝒅 𝒘𝒂𝒏𝒏𝒂 𝒎𝒂𝒓𝒓𝒚 𝒉𝒊𝒎/𝒉𝒆𝒓, 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒕𝒆𝒍𝒍𝒊𝒏𝒈 𝒉𝒊𝒎/𝒉𝒆𝒓 𝒕𝒉𝒂𝒕 𝒊𝒕𝒔 𝒂 𝒅𝒂𝒓𝒆",
       "𝑺𝒂𝒚 𝒊 𝒍𝒐𝒗𝒆 𝒅𝒆𝒑𝒂𝒌 𝒌𝒂𝒍𝒂𝒍 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒗𝒐𝒊𝒄𝒆 𝒏𝒐𝒕𝒆",
       "𝑾𝒓𝒊𝒕𝒆 𝒊 𝒂𝒎 𝒇𝒆𝒆𝒍𝒊𝒏𝒈 𝒉𝒐𝒓𝒏𝒚 𝒂𝒏𝒅 𝒑𝒖𝒕 𝒊𝒕 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔, 𝒖 𝒄𝒂𝒏 𝒅𝒆𝒍𝒆𝒕𝒆 𝒊𝒕 𝒐𝒏𝒍𝒚 𝒂𝒇𝒕𝒆𝒓 𝟓𝒉𝒓𝒔",
       "𝑾𝒓𝒊𝒕𝒆 𝒊 𝒂𝒎 𝒍𝒆𝒔𝒃𝒊𝒂𝒏 𝒂𝒏𝒅 𝒑𝒖𝒕 𝒊𝒕 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔, 𝒖 𝒄𝒂𝒏 𝒅𝒆𝒍𝒆𝒕𝒆 𝒐𝒏𝒍𝒚 𝒂𝒇𝒕𝒆𝒓 𝟓𝒉𝒓𝒔",
       "𝑲𝒊𝒔𝒔 𝒚𝒐𝒖𝒓 𝒎𝒐𝒎𝒎𝒚 𝒐𝒓 𝒑𝒂𝒑𝒂 𝒂𝒏𝒅 𝒔𝒂𝒚 𝒊 𝒍𝒐𝒗𝒆 𝒚𝒐𝒖😌",
       "𝑷𝒖𝒕 𝒚𝒐𝒖𝒓 𝒇𝒂𝒕𝒉𝒆𝒓 𝒏𝒂𝒎𝒆 𝒐𝒏 𝒔𝒕𝒂𝒕𝒖𝒔 𝒇𝒐𝒓 𝟓𝒉𝒓𝒔",
       "𝑺𝒆𝒏𝒅 𝒂𝒃𝒖𝒔𝒊𝒗𝒆 𝒘𝒐𝒓𝒅𝒔 𝒊𝒏 𝒂𝒏𝒚 𝒈𝒓𝒖𝒑, 𝒆𝒙𝒄𝒆𝒑𝒕𝒊𝒏𝒈 𝒕𝒉𝒊𝒔 𝒈𝒓𝒖𝒑, 𝒂𝒏𝒅 𝒔𝒆𝒏𝒅 𝒔𝒄𝒓𝒆𝒆𝒏𝒔𝒉𝒐𝒕 𝒑𝒓𝒐𝒐𝒇 𝒉𝒆𝒓𝒆"
   ]
                 const A17dareww = dare[Math.floor(Math.random() * dare.length)]
                 buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
                 A17.sendMessage(from, { image: buffer, caption: '*🤭 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 𝙳𝙰𝚁𝙴...*\n\n'+ A17dareww }, {quoted:m})
                 break;
                     

case 'truth':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "🤫" , key: m.key }})
  
                         const truth =[
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒊𝒌𝒆𝒅 𝒂𝒏𝒚𝒐𝒏𝒆? 𝑯𝒐𝒘 𝒍𝒐𝒏𝒈?",
               "𝑰𝒇 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒐𝒓 𝒊𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕, 𝒘𝒉𝒊𝒄𝒉 𝒈𝒄/𝒐𝒖𝒕𝒔𝒊𝒅𝒆 𝒈𝒄 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒎𝒂𝒌𝒆 𝒇𝒓𝒊𝒆𝒏𝒅𝒔 𝒘𝒊𝒕𝒉? (𝒎𝒂𝒚𝒃𝒆 𝒔𝒂𝒎𝒆 𝒕𝒚𝒑𝒆)",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒊𝒌𝒆𝒅 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒂𝒏𝒅 𝒇𝒆𝒍𝒕 𝒕𝒉𝒂𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒍𝒊𝒌𝒆𝒔 𝒚𝒐𝒖 𝒕𝒐𝒐?",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒇𝒓𝒊𝒆𝒏𝒅'𝒔 𝒆𝒙-𝒈𝒊𝒓𝒍𝒇𝒓𝒊𝒆𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒖𝒔𝒆𝒅 𝒕𝒐 𝒔𝒆𝒄𝒓𝒆𝒕𝒍𝒚 𝒍𝒊𝒌𝒆?",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒔𝒕𝒐𝒍𝒆𝒏 𝒎𝒐𝒏𝒆𝒚 𝒇𝒓𝒐𝒎 𝒚𝒐𝒖𝒓 𝒇𝒂𝒕𝒉𝒆𝒓 𝒐𝒓 𝒎𝒐𝒎? 𝑻𝒉𝒆 𝒓𝒆𝒂𝒔𝒐𝒏?",
               "𝑾𝒉𝒂𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒉𝒂𝒑𝒑𝒚 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖'𝒓𝒆 𝒔𝒂𝒅?",
               "𝑬𝒗𝒆𝒓 𝒉𝒂𝒅 𝒂 𝒐𝒏𝒆 𝒔𝒊𝒅𝒆𝒅 𝒍𝒐𝒗𝒆? 𝒊𝒇 𝒔𝒐 𝒘𝒉𝒐? 𝒉𝒐𝒘 𝒅𝒐𝒆𝒔 𝒊𝒕 𝒇𝒆𝒆𝒍 𝒃𝒓𝒐?", 
               "𝑩𝒆𝒆𝒏 𝒔𝒐𝒎𝒆𝒐𝒏𝒆'𝒔 𝒎𝒊𝒔𝒕𝒓𝒆𝒔𝒔?",
               "𝑻𝒉𝒆 𝒎𝒐𝒔𝒕 𝒇𝒆𝒂𝒓𝒆𝒅 𝒕𝒉𝒊𝒏𝒈",
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒕𝒊𝒂𝒍 𝒑𝒆𝒓𝒔𝒐𝒏 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒍𝒊𝒇𝒆?",
               "𝑾𝒉𝒂𝒕 𝒑𝒓𝒐𝒖𝒅 𝒕𝒉𝒊𝒏𝒈 𝒅𝒊𝒅 𝒚𝒐𝒖 𝒈𝒆𝒕 𝒕𝒉𝒊𝒔 𝒚𝒆𝒂𝒓", 
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒄𝒂𝒏 𝒎𝒂𝒌𝒆 𝒚𝒐𝒖 𝒂𝒘𝒆𝒔𝒐𝒎𝒆", 
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒉𝒂𝒔 𝒆𝒗𝒆𝒓 𝒎𝒂𝒅𝒆 𝒚𝒐𝒖 𝒗𝒆𝒓𝒚 𝒉𝒂𝒑𝒑𝒚?", 
               "𝑾𝒉𝒐 𝒊𝒔 𝒄𝒍𝒐𝒔𝒆𝒔𝒕 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒊𝒅𝒆𝒂𝒍 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒑𝒂𝒓𝒕𝒏𝒆𝒓 𝒉𝒆𝒓𝒆", 
               "𝑾𝒉𝒐 𝒅𝒐 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒕𝒐 𝒑𝒍𝒂𝒚 𝒘𝒊𝒕𝒉??", 
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒓𝒆𝒋𝒆𝒄𝒕𝒆𝒅 𝒑𝒆𝒐𝒑𝒍𝒆? 𝒕𝒉𝒆 𝒓𝒆𝒂𝒔𝒐𝒏 𝒘𝒉𝒚?",
               "𝑴𝒆𝒏𝒕𝒊𝒐𝒏 𝒂𝒏 𝒊𝒏𝒄𝒊𝒅𝒆𝒏𝒕 𝒕𝒉𝒂𝒕 𝒎𝒂𝒅𝒆 𝒚𝒐𝒖 𝒉𝒖𝒓𝒕 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒔𝒕𝒊𝒍𝒍 𝒓𝒆𝒎𝒆𝒎𝒃𝒆𝒓", 
               "𝑾𝒉𝒂𝒕 𝒂𝒄𝒉𝒊𝒆𝒗𝒆𝒎𝒆𝒏𝒕𝒔 𝒉𝒂𝒗𝒆 𝒚𝒐𝒖 𝒈𝒐𝒕 𝒕𝒉𝒊𝒔 𝒚𝒆𝒂𝒓??",
               "𝑾𝒉𝒂𝒕'𝒔 𝒚𝒐𝒖𝒓 𝒘𝒐𝒓𝒔𝒕 𝒉𝒂𝒃𝒊𝒕 𝒂𝒕 𝒔𝒄𝒉𝒐𝒐𝒍??",
               "𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒔𝒊𝒏𝒈 𝒎𝒐𝒔𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒔𝒉𝒐𝒘𝒆𝒓",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒉𝒂𝒅 𝒂 𝒏𝒆𝒂𝒓-𝒅𝒆𝒂𝒕𝒉 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆",
               "𝑾𝒉𝒆𝒏 𝒘𝒂𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒕𝒊𝒎𝒆 𝒚𝒐𝒖 𝒘𝒆𝒓𝒆 𝒓𝒆𝒂𝒍𝒍𝒚 𝒂𝒏𝒈𝒓𝒚. 𝑾𝒉𝒚?",
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒄𝒂𝒍𝒍𝒆𝒅 𝒚𝒐𝒖",
               "𝑫𝒐 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒂𝒏𝒚 𝒉𝒊𝒅𝒅𝒆𝒏 𝒕𝒂𝒍𝒆𝒏𝒕𝒔, 𝑾𝒉𝒂𝒕 𝒂𝒓𝒆 𝒕𝒉𝒆𝒚",
               "𝑾𝒉𝒂𝒕 𝒘𝒐𝒓𝒅 𝒅𝒐 𝒚𝒐𝒖 𝒉𝒂𝒕𝒆 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕?",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒀𝒐𝒖𝑻𝒖𝒃𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒕𝒄𝒉𝒆𝒅?",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒕𝒉𝒊𝒏𝒈 𝒚𝒐𝒖 𝑮𝒐𝒐𝒈𝒍𝒆𝒅",
               "𝑾𝒉𝒐 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒔𝒘𝒂𝒑 𝒍𝒊𝒗𝒆𝒔 𝒘𝒊𝒕𝒉 𝒇𝒐𝒓 𝒂 𝒘𝒆𝒆𝒌",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒔𝒄𝒂𝒓𝒊𝒆𝒔𝒕 𝒕𝒉𝒊𝒏𝒈 𝒕𝒉𝒂𝒕𝒔 𝒆𝒗𝒆𝒓 𝒉𝒂𝒑𝒑𝒆𝒏𝒆𝒅 𝒕𝒐 𝒚𝒐𝒖",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒇𝒂𝒓𝒕𝒆𝒅 𝒂𝒏𝒅 𝒃𝒍𝒂𝒎𝒆𝒅 𝒊𝒕 𝒐𝒏 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒆𝒍𝒔𝒆",
               "𝑾𝒉𝒆𝒏 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒕𝒊𝒎𝒆 𝒚𝒐𝒖 𝒎𝒂𝒅𝒆 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒆𝒍𝒔𝒆 𝒄𝒓𝒚",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒈𝒉𝒐𝒔𝒕𝒆𝒅 𝒂 𝒇𝒓𝒊𝒆𝒏𝒅",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒔𝒆𝒆𝒏 𝒂 𝒅𝒆𝒂𝒅 𝒃𝒐𝒅𝒚",
               "𝑾𝒉𝒊𝒄𝒉 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒇𝒂𝒎𝒊𝒍𝒚 𝒎𝒆𝒎𝒃𝒆𝒓𝒔 𝒂𝒏𝒏𝒐𝒚𝒔 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒂𝒏𝒅 𝒘𝒉𝒚",
               "𝑰𝒇 𝒚𝒐𝒖 𝒉𝒂𝒅 𝒕𝒐 𝒅𝒆𝒍𝒆𝒕𝒆 𝒐𝒏𝒆 𝒂𝒑𝒑 𝒇𝒓𝒐𝒎 𝒚𝒐𝒖𝒓 𝒑𝒉𝒐𝒏𝒆, 𝒘𝒉𝒊𝒄𝒉 𝒐𝒏𝒆 𝒘𝒐𝒖𝒍𝒅 𝒊𝒕 𝒃𝒆",
               "𝑾𝒉𝒂𝒕 𝒂𝒑𝒑 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒔𝒕𝒆 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒕𝒊𝒎𝒆 𝒐𝒏",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒇𝒂𝒌𝒆𝒅 𝒔𝒊𝒄𝒌 𝒕𝒐 𝒈𝒆𝒕 𝒉𝒐𝒎𝒆 𝒇𝒓𝒐𝒎 𝒔𝒄𝒉𝒐𝒐𝒍",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒆𝒎𝒃𝒂𝒓𝒓𝒂𝒔𝒔𝒊𝒏𝒈 𝒊𝒕𝒆𝒎 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒓𝒐𝒐𝒎",
               "𝑾𝒉𝒂𝒕 𝒇𝒊𝒗𝒆 𝒊𝒕𝒆𝒎𝒔 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒃𝒓𝒊𝒏𝒈 𝒊𝒇 𝒚𝒐𝒖 𝒈𝒐𝒕 𝒔𝒕𝒖𝒄𝒌 𝒐𝒏 𝒂 𝒅𝒆𝒔𝒆𝒓𝒕 𝒊𝒔𝒍𝒂𝒏𝒅",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒂𝒖𝒈𝒉𝒆𝒅 𝒔𝒐 𝒉𝒂𝒓𝒅 𝒚𝒐𝒖 𝒑𝒆𝒆𝒅 𝒚𝒐𝒖𝒓 𝒑𝒂𝒏𝒕𝒔",
               "𝑫𝒐 𝒚𝒐𝒖 𝒔𝒎𝒆𝒍𝒍 𝒚𝒐𝒖𝒓 𝒐𝒘𝒏 𝒇𝒂𝒓𝒕𝒔",
               "𝑯𝒂𝒗𝒆 𝒖 𝒆𝒗𝒆𝒓 𝒑𝒆𝒆𝒅 𝒐𝒏 𝒕𝒉𝒆 𝒃𝒆𝒅 𝒘𝒉𝒊𝒍𝒆 𝒔𝒍𝒆𝒆𝒑𝒊𝒏𝒈 ðŸ¤£ðŸ¤£",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒊𝒈𝒈𝒆𝒔𝒕 𝒎𝒊𝒔𝒕𝒂𝒌𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒆𝒗𝒆𝒓 𝒎𝒂𝒅𝒆",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒄𝒉𝒆𝒂𝒕𝒆𝒅 𝒊𝒏 𝒂𝒏 𝒆𝒙𝒂𝒎",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒘𝒐𝒓𝒔𝒕 𝒕𝒉𝒊𝒏𝒈 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒆𝒗𝒆𝒓 𝒅𝒐𝒏𝒆",
               "𝑾𝒉𝒆𝒏 𝒘𝒂𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒕𝒊𝒎𝒆 𝒚𝒐𝒖 𝒄𝒓𝒊𝒆𝒅",
               "𝑾𝒉𝒐𝒎 𝒅𝒐 𝒚𝒐𝒖 𝒍𝒐𝒗𝒆 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒂𝒎𝒐𝒏𝒈 𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔", 
               "𝑫𝒐 𝒖 𝒔𝒐𝒎𝒆𝒕𝒊𝒎𝒆𝒔 𝒑𝒖𝒕 𝒖𝒓 𝒇𝒊𝒏𝒈𝒆𝒓 𝒊𝒏 𝒖𝒓 𝒏𝒐𝒔𝒆𝒕𝒓𝒊𝒍ðŸ¤£", 
               "𝑾𝒉𝒐 𝒘𝒂𝒔 𝒖𝒓 𝒄𝒓𝒖𝒔𝒉 𝒅𝒖𝒓𝒊𝒏𝒈 𝒕𝒉𝒆 𝒔𝒄𝒉𝒐𝒐𝒍 𝒅𝒂𝒚𝒔",
               "𝑻𝒆𝒍𝒍 𝒉𝒐𝒏𝒆𝒔𝒕𝒍𝒚, 𝒅𝒐 𝒖 𝒍𝒊𝒌𝒆 𝒂𝒏𝒚 𝒃𝒐𝒚 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒖𝒑",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒊𝒌𝒆𝒅 𝒂𝒏𝒚𝒐𝒏𝒆? 𝒉𝒐𝒘 𝒍𝒐𝒏𝒈?",
               "𝑫𝒐 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒈𝒇/𝒃𝒇','𝒘𝒉𝒂𝒕 𝒊𝒔 𝒚𝒐𝒖𝒓 𝒃𝒊𝒈𝒈𝒆𝒔𝒕 𝒇𝒆𝒂𝒓?",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒊𝒌𝒆𝒅 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒂𝒏𝒅 𝒇𝒆𝒍𝒕 𝒕𝒉𝒂𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒍𝒊𝒌𝒆𝒔 𝒚𝒐𝒖 𝒕𝒐𝒐?",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒆𝒙 𝒃𝒐𝒚𝒇𝒓𝒊𝒆𝒏𝒅 𝒐𝒇 𝒚𝒐𝒖𝒓 𝒇𝒓𝒊𝒆𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒐𝒏𝒄𝒆 𝒍𝒊𝒌𝒆𝒅 𝒒𝒖𝒊𝒆𝒕𝒍𝒚?",
               "𝑬𝒗𝒆𝒓 𝒅𝒊𝒅 𝒚𝒐𝒖 𝒔𝒕𝒆𝒂𝒍 𝒚𝒐𝒖𝒓 𝒎𝒐𝒕𝒉𝒆𝒓𝒔 𝒎𝒐𝒏𝒆𝒚 𝒐𝒓 𝒚𝒐𝒖𝒓 𝒇𝒂𝒕𝒉𝒆𝒓𝒔 𝒎𝒐𝒏𝒆𝒚",
               "𝑾𝒉𝒂𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒉𝒂𝒑𝒑𝒚 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒔𝒂𝒅",
               "𝑫𝒐 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒘𝒉𝒐 𝒊𝒔 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒖𝒑? 𝒊𝒇 𝒚𝒐𝒖 𝒕𝒉𝒆𝒏 𝒘𝒉𝒐?",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒃𝒆𝒆𝒏 𝒄𝒉𝒆𝒂𝒕𝒆𝒅 𝒐𝒏 𝒃𝒚 𝒑𝒆𝒐𝒑𝒍𝒆?",
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒊𝒎𝒑𝒐𝒓𝒕𝒂𝒏𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒍𝒊𝒇𝒆",
               "𝑾𝒉𝒂𝒕 𝒑𝒓𝒐𝒖𝒅 𝒕𝒉𝒊𝒏𝒈𝒔 𝒅𝒊𝒅 𝒚𝒐𝒖 𝒈𝒆𝒕 𝒕𝒉𝒊𝒔 𝒚𝒆𝒂𝒓",
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒄𝒂𝒏 𝒎𝒂𝒌𝒆 𝒚𝒐𝒖 𝒉𝒂𝒑𝒑𝒚 𝒘𝒉𝒆𝒏 𝒖 𝒓 𝒔𝒂𝒅",
               "𝑾𝒉𝒐 𝒊𝒔 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒆𝒗𝒆𝒓 𝒎𝒂𝒅𝒆 𝒚𝒐𝒖 𝒇𝒆𝒆𝒍 𝒖𝒏𝒄𝒐𝒎𝒇𝒐𝒓𝒕𝒂𝒃𝒍𝒆",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒍𝒊𝒆𝒅 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔",
               "𝑫𝒐 𝒚𝒐𝒖 𝒔𝒕𝒊𝒍𝒍 𝒍𝒊𝒌𝒆 𝒖𝒓 𝒆𝒙",
               "𝑾𝒉𝒐 𝒅𝒐 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒕𝒐 𝒑𝒍𝒂𝒚 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓 𝒘𝒊𝒕𝒉?",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒔𝒕𝒐𝒍𝒆𝒏 𝒃𝒊𝒈 𝒕𝒉𝒊𝒏𝒈 𝒊𝒏 𝒖𝒓 𝒍𝒊𝒇𝒆? 𝒕𝒉𝒆 𝒓𝒆𝒂𝒔𝒐𝒏 𝒘𝒉𝒚?",
               "𝑴𝒆𝒏𝒕𝒊𝒐𝒏 𝒕𝒉𝒆 𝒊𝒏𝒄𝒊𝒅𝒆𝒏𝒕 𝒕𝒉𝒂𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒉𝒖𝒓𝒕 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒔𝒕𝒊𝒍𝒍 𝒓𝒆𝒎𝒆𝒎𝒃𝒆𝒓",
               "𝑾𝒉𝒂𝒕 𝒂𝒄𝒉𝒊𝒆𝒗𝒆𝒎𝒆𝒏𝒕𝒔 𝒉𝒂𝒗𝒆 𝒚𝒐𝒖 𝒈𝒐𝒕 𝒕𝒉𝒊𝒔 𝒚𝒆𝒂𝒓?",
               "𝑾𝒉𝒂𝒕 𝒘𝒂𝒔 𝒚𝒐𝒖𝒓 𝒘𝒐𝒓𝒔𝒕 𝒉𝒂𝒃𝒊𝒕 𝒂𝒕 𝒔𝒄𝒉𝒐𝒐𝒍?",
               "𝑫𝒐 𝒚𝒐𝒖 𝒍𝒐𝒗𝒆 𝒕𝒉𝒆 𝒃𝒐𝒕 𝒄𝒓𝒆𝒂𝒕𝒐𝒓 𝑫𝒂𝒓𝒌𝑫𝒆𝒗𝒊𝒍?",
               "𝑯𝒂𝒗𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒕𝒉𝒐𝒖𝒈𝒉𝒕 𝒐𝒇 𝒕𝒂𝒌𝒊𝒏𝒈 𝒓𝒆𝒗𝒆𝒏𝒈𝒆 𝒇𝒓𝒐𝒎 𝒖𝒓 𝒕𝒆𝒂𝒄𝒉𝒆𝒓?",
               "𝑫𝒐 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒄𝒖𝒓𝒓𝒆𝒏𝒕 𝒑𝒓𝒊𝒎𝒆 𝒎𝒊𝒏𝒊𝒔𝒕𝒆𝒓 𝒐𝒇 𝒖𝒓 𝒄𝒐𝒖𝒏𝒕𝒓𝒚",
               "𝒀𝒐𝒖 𝒏𝒐𝒏 𝒗𝒆𝒈 𝒐𝒓 𝒗𝒆𝒈",
               "𝑰𝒇 𝒚𝒐𝒖 𝒄𝒐𝒖𝒍𝒅 𝒃𝒆 𝒊𝒏𝒗𝒊𝒔𝒊𝒃𝒍𝒆, 𝒘𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒇𝒊𝒓𝒔𝒕 𝒕𝒉𝒊𝒏𝒈 𝒚𝒐𝒖 𝒘𝒐𝒖𝒍𝒅 𝒅𝒐",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒂 𝒔𝒆𝒄𝒓𝒆𝒕 𝒚𝒐𝒖 𝒌𝒆𝒑𝒕 𝒇𝒓𝒐𝒎 𝒚𝒐𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔",
               "𝑾𝒉𝒐 𝒊𝒔 𝒚𝒐𝒖𝒓 𝒔𝒆𝒄𝒓𝒆𝒕 𝒄𝒓𝒖𝒔𝒉",
               "𝑾𝒉𝒐𝒊𝒔 𝒕𝒉𝒆 𝒍𝒂𝒔𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒚𝒐𝒖 𝒄𝒓𝒆𝒆𝒑𝒆𝒅 𝒐𝒏 𝒔𝒐𝒄𝒊𝒂𝒍 𝒎𝒆𝒅𝒊𝒂",
               "𝑰𝒇 𝒂 𝒈𝒆𝒏𝒊𝒆 𝒈𝒓𝒂𝒏𝒕𝒆𝒅 𝒚𝒐𝒖 𝒕𝒉𝒓𝒆𝒆 𝒘𝒊𝒔𝒉𝒆𝒔, 𝒘𝒉𝒂𝒕 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒂𝒔𝒌 𝒇𝒐𝒓",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒚𝒐𝒖𝒓 𝒃𝒊𝒈𝒈𝒆𝒔𝒕 𝒓𝒆𝒈𝒓𝒆𝒕",
               "𝑾𝒉𝒂𝒕 𝒂𝒏𝒊𝒎𝒂𝒍 𝒅𝒐 𝒚𝒐𝒖 𝒕𝒉𝒊𝒏𝒌 𝒚𝒐𝒖 𝒎𝒐𝒔𝒕 𝒍𝒐𝒐𝒌 𝒍𝒊𝒌𝒆",
               "𝑯𝒐𝒘 𝒎𝒂𝒏𝒚 𝒔𝒆𝒍𝒇𝒊𝒆𝒔 𝒅𝒐 𝒚𝒐𝒖 𝒕𝒂𝒌𝒆 𝒂 𝒅𝒂𝒚",
               "𝑾𝒉𝒂𝒕 𝒘𝒂𝒔 𝒚𝒐𝒖𝒓 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒄𝒉𝒊𝒍𝒅𝒉𝒐𝒐𝒅 𝒔𝒉𝒐𝒘",
               "𝑰𝒇 𝒚𝒐𝒖 𝒄𝒐𝒖𝒍𝒅 𝒃𝒆 𝒂 𝒇𝒊𝒄𝒕𝒊𝒐𝒏𝒂𝒍 𝒄𝒉𝒂𝒓𝒂𝒄𝒕𝒆𝒓 𝒇𝒐𝒓 𝒂 𝒅𝒂𝒚, 𝒘𝒉𝒐 𝒘𝒐𝒖𝒍𝒅 𝒚𝒐𝒖 𝒄𝒉𝒐𝒐𝒔𝒆",
               "𝑾𝒉𝒐𝒎 𝒅𝒐 𝒚𝒐𝒖 𝒕𝒆𝒙𝒕 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕",
               "𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒊𝒈𝒈𝒆𝒔𝒕 𝒍𝒊𝒆 𝒚𝒐𝒖 𝒆𝒗𝒆𝒓 𝒕𝒐𝒍𝒅 𝒚𝒐𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔",
               "𝑾𝒉𝒐 𝒊𝒔 𝒚𝒐𝒖𝒓 𝒄𝒆𝒍𝒆𝒃𝒓𝒊𝒕𝒚 𝒄𝒓𝒖𝒔𝒉",
               "𝑾𝒉𝒂𝒕𝒔 𝒕𝒉𝒆 𝒔𝒕𝒓𝒂𝒏𝒈𝒆𝒔𝒕 𝒅𝒓𝒆𝒂𝒎 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒆𝒗𝒆𝒓 𝒉𝒂𝒅",
               "𝑫𝒐 𝒚𝒐𝒖 𝒑𝒍𝒂𝒚 𝒇𝒓𝒆𝒆 𝒇𝒊𝒓𝒆, 𝒊𝒇 𝒚𝒐𝒖 𝒕𝒉𝒆𝒏 𝒔𝒆𝒏𝒅 𝒖𝒓 𝒊𝒅 𝒏𝒖𝒎𝒃𝒆𝒓"
   ]
                         const A17truthww = truth[Math.floor(Math.random() * truth.length)]
                         buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
                         A17.sendMessage(from, { image: buffer, caption: '*🤐 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙷𝙾𝚂𝙴𝙽 𝚃𝚁𝚄𝚃𝙷...*\n\n'+ A17truthww }, {quoted:m})
                         break;



case 'nsfwddev':
  if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
A17.sendMessage(from, {image:{url:nye}, caption:"Master..."}, {quoted:m})
break;

case 'mediafire': case 'mediafiredl': {
if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `「  *Mediafire Downloader*  」
      
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
A17.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break;


case 'smug2':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                  
    let button1ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,
    }     
          await A17.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;


case 'foxgirl':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  A17.sendMessage(from, { react: { text: "✨" , key: m.key }})     

reply(mess.waiting)							
waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)

           
    let button12ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `Awoooo...`,
    
    }     
          await A17.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;   


case 'animenom' :
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
  waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
let xx1button3Messages = {
 image: {url:waifudd.data.url},
 caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,

}      
          await A17.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                  return('Error!')
              })
break;


case 'waifu3':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                 
    let button112ssMessages = {
     image: {url:waifudd.data.url},
     caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,
    }     
          await A17.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;


//
case 'crossplay': case 'crosplay': case 'cosplay':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  A17.sendMessage(from, { react: { text: "✨" , key: m.key }})  

                

      const cosplybutton = {
      image: {url: 'https://fantox-cosplay-api.onrender.com/'},
      caption: "Guess who am i...",
      }
                
      await A17.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
          return('Error!')
      })  

      break;


case 'neko2':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)					
  
 waifud = await axios.get('https://waifu.pics/api/sfw/neko')
              var wbutsss = [
      {buttonId: `${prefix}neko2`, buttonText: {displayText: `>>`}, type: 1},
      ]
    let buttonssMessage = {
     image: {url:waifud.data.url},
     caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,
    footer: `${global.BotName}`,
    buttons: wbutsss,
    headerType: 4
    }
          await A17.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                  return('Error!')
              })               
              break;


case 'feed':
case 'meow':
case 'tickle':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                         var wbuttsss = [
      {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
      ]
    let buttonssMessages = {
     image: {url:waifudd.data.url},
     caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,
    footer: `${global.BotName}`,
    buttons: wbuttsss,
    headerType: 4
    }     
          await A17.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                  return('Error!')
              })
break;



         /////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//
case 'cry':  case 'handhold':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
A17.sendMessage(from, { react: { text: "❤" , key: m.key }})

var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


case 'nom':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)	
var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} is eating with themself!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


case 'hug':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)	
var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} hugged themself!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


case 'dance':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)	
var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} is dancing alone!!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


//
case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'kick':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)	
var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)	
var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
try {
  let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

ment=[messsender,users]
} catch {
users == "none"
 ment=[messsender,m.sender]
}
if(users == "none"){
   musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
   console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

console.log(musers)
}
      const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
      const buffer = Buffer.from(response.data, "utf-8")
  var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
  } catch (error) {
      console.log(error);
  }
}
break;


case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
    let buttonzMessage = {
    image: {url:ud.data.url},
     caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,
                     }
await A17.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
   return('Error!')
  })               
break;     


case 'awoo':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  A17.sendMessage(from, { react: { text: "✨" , key: m.key }}) 

  reply(mess.waiting)						
waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
let button1Messages = {
 image: {url:waifudd.data.url},
 caption:  `☕ 𝙷𝙴𝚁𝙴 𝙸𝚃 𝙸𝚂...`,

}       
          await A17.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                  return('Error!')
              })
break;


case 'animewall2': case 'animewallpaper2':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Please enter a seach term!')
const wall = new AnimeWallpaper();
  const pages = [1,2,3,4];
      const random=pages[Math.floor(Math.random() * pages.length)]
      const wallpaper = await wall
          .getAnimeWall4({ title: q, type: "sfw", page: pages })
          .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
      {buttonId: `${prefix}animewall2 ${q}`, buttonText: {displayText: `>>`}, type: 1},        
      ]
    let wal = {
     image: {url:wallpaper[i].image},
     caption: `*Search Term :* ${q}`,
    footer: `${global.BotName}`,
    buttons: walb,
    headerType: 4
    }     
          await A17.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                  return('Error!')
              })          
break;



//
case 'anime': {
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
  A17.sendMessage(from, { react: { text: "🍁" , key: m.key }});
  if(!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

  const malScraper = require('mal-scraper')
  reply(mess.waiting);
          const anime = await malScraper.getInfoFromName(text).catch(() => null)
          if (!anime) return reply(`${p}Could not find your scarch`)
  let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
                  await A17.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                  }
                  break;


case 'manga':
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly) 
A17.sendMessage(from, { react: { text: "🍁" , key: m.key }})
  
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
  let mang = `*Title:* ${srh.data[0].title}\n`;
  mang += `*Status:* ${srh.data[0].status}\n`;
  mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
  mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
  mang += `*Genres:*\n`;
  for (let i = 0; i < srh.data[0].genres.length; i++) {
    mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
  }
  mang += `*Published on:* ${srh.data[0].published.from}\n`;
  mang += `*Score:* ${srh.data[0].scored}\n`;
  mang += `*Popularity:* ${srh.data[0].popularity}\n`;
  mang += `*Favorites:* ${srh.data[0].favorites}\n`;
  mang += `*Authors:*\n`;
  for (let i = 0; i < srh.data[0].authors.length; i++) {
    mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
  }
  mang += `\n*URL:* ${srh.data[0].url}\n\n`;
  if (srh.data[0].background !== null)
    mang += `*Background:* ${srh.data[0].background}`;
  mang += `*Description:* ${srh.data[0].synopsis.replace(
    /\[Written by MAL Rewrite]/g,
    ""
  )}`;
A17.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break;


case 'waifu' :
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
  waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
      let button4Messagess = {
      image: {url:waifuddd.data.url},
      caption: 'More than one waifu will definitely ruin your Laifu!',
       }     
                                
  await A17.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
      return('error..')
      })
break;


case 'neko' :
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
  waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
      let buttonMessagessf = {
      image: {url:waifuddd.data.url},
      caption: 'Nyaa...',
       }     
                                
  await A17.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
      return('error..')
      })
break;


case 'loli' :
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
  waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
      let buttonMessagessfgr = {
      image: {url:waifuddd.data.url},
      caption: 'Dont be a lolicon !',
    
       }     
                                
  await A17.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
      return('error..')
      })
break;


case "quotes":
  if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
var res = await fetch('https://animechan.vercel.app/api/random')
teks = `\n*Anime:* ${res.anime}\n`
teks += `\n*Quotes:*\n`
teks += `${res.json}\n`

replay(teks)
break;


case "darkjoke":
  if (isBan) return reply(mess.banned)	 			
  if (isBanChat) return reply(mess.bangc)
  if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
A17.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break;



                 ////////////////////////////////////////////////////////////////////////////
                 ////////////////////////////////////////////////////////////////////////////



         case 'antilink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkAll) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let textmsg = 'Type ' + `${prefix}${command}` + ' on to turn on antilink feature or Type ' + `${prefix + command}` + ' off to turn off antilink feature'
   await A17.sendMessage(m.chat, { text: `${textmsg}`}, `${global.BotName}`, m)
   }
   }
   break;

     
  
      ///////////////////////////////////////////////////


      case 'bc': case 'broadcast': case 'bcall': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
    if (!isCreator) return replay(mess.botowner)
    if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
    let anu = await store.chats.all().map(v => v.id)
    replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
    for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
    quickReplyButton: {
    displayText: '💡 Menu 💡',
    id: '-menu'
    }  
    }, {
    quickReplyButton: {
    displayText: 'Bot Owner',
    id: '-owner'
    }
    }]
    let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
    A17.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
    }
    replay('Broadcast Sent !')
    }
    break;    
    
    

                   ///////////////////////////////////////////////////////////////////////////////////
                  ////////////////////////////////////////////////////////////////////////////////////



    case 'help': case 'menu': case 'allmenu': case 'listmenu':{
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
    A17.sendMessage(from, { react: { text: "✨" , key: m.key }})      
    const helpmenu = `   😇 𝘏𝘌𝘓𝘓𝘖  *${pushname}*  ${nowtime} ,

    👋 𝘐 𝘈𝘔 *𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇*. 𝘈 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 *Dᴇᴠ ɪxAAʀ* 𝘛𝘖 𝘋𝘖 𝘌𝘝𝘌𝘙𝘠𝘛𝘏𝘐𝘕𝘎 𝘛𝘏𝘈𝘛 𝘐𝘚 𝘗𝘖𝘚𝘚𝘐𝘉𝘓𝘌 𝘖𝘕 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘈𝘚𝘌𝘋 𝘖𝘕 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘔𝘜𝘓𝘛𝘐 𝘋𝘌𝘝𝘐𝘊𝘌(𝘔𝘋) 𝘚𝘜𝘗𝘗𝘖𝘙𝘛.✌️
    
   ╔══════ 🏜️ *𝚃𝙾𝙳𝙰𝚈* 🏖 ️══════════➤
   ║
   ║  *📅𝙳𝙰𝚃𝙴* : ${kaidate}
   ║  *⏳𝚃𝙸𝙼𝙴* : ${time2}
   ║ 
   ╟━━━━ 🤖 *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* 🤖 ━━━━━━━━━━➤
   ║
   ║  *🤖𝙱𝙾𝚃 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 :* 𝛪𝛸𝛥𝛥𝑅 𝐵𝛩𝑇
   ║  *👨‍💼𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 :* Dᴇᴠ ɪxAAʀ
   ║  *⏳𝙱𝙾𝚃 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 :* ${runtime(process.uptime())} 
   ║  *🖥️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 :* Codespace
   ╚══════════════════════════➤

   ┏━━━ 📀 *𝙲𝙾𝚁𝙴* 📀 ━━━━━━━━━━━➢
   ┃
   ┃►    ${prefix}repo
   ┃►    ${prefix}script
   ┃►    ${prefix}speak
   ┃►    ${prefix}support
   ┃►    ${prefix}stalk
   ┃►    ${prefix}delete
   ┃
   ┣━━━ 👨‍💼 *𝙾𝚆𝙽𝙴𝚁 𝙾𝙽𝙻𝚈* 👩‍💼 ━━━━━━➢
   ┃
   ┃►    ${prefix}join
   ┃►    ${prefix}self
   ┃►    ${prefix}public
   ┃►    ${prefix}restart
   ┃►    ${prefix}sleep
   ┃►    ${prefix}setbotpp
   ┃►    ${prefix}post
   ┃►    ${prefix}listonline
   ┃►    ${prefix}listgc
   ┃►    ${prefix}listpc
   ┃►    ${prefix}getcase
   ┃►    ${prefix}bangroup
   ┃►    ${prefix}broadcast
   ┃►    ${prefix}bye
   ┃►    ${prefix}block
   ┃►    ${prefix}unblock
   ┃►    ${prefix}ban add
   ┃►    ${prefix}ban del
   ┃
   ┣━━━ ⬆️ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙾𝙳𝙴𝚁𝙰𝚃𝙸𝙾𝙽* ⬆️ ━➢
   ┃
   ┃►    ${prefix}add
   ┃►    ${prefix}invite
   ┃►    ${prefix}remove
   ┃►    ${prefix}promote
   ┃►    ${prefix}demote
   ┃►    ${prefix}grouplink
   ┃►    ${prefix}groupsetting
   ┃►    ${prefix}setname
   ┃►    ${prefix}setgcpp
   ┃►    ${prefix}setdesc
   ┃►    ${prefix}revoke
   ┃►    ${prefix}tagall
   ┃►    ${prefix}hidetag
   ┃►    ${prefix}nsfw
   ┃►    ${prefix}nsnfwmenu
   ┃
   ┣━━━❗ *𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺* ❗ ━━━━━━➢
   ┃    
   ┃►    ${prefix}antilinkgc
   ┃►    ${prefix}antilinktt
   ┃►    ${prefix}antilinkytch
   ┃►    ${prefix}antilinkytch
   ┃►    ${prefix}antilinkig
   ┃►    ${prefix}antilinkfb
   ┃►    ${prefix}antilinktwit
   ┃►    ${prefix}antiwame
   ┃►    ${prefix}antilinkall
   ┃
   ┣━━━ 🔍 *𝚂𝙴𝙰𝚁𝙲𝙷* 🔎 ━━━━━━━━➢
   ┃   
   ┃►    ${prefix}play
   ┃►    ${prefix}song
   ┃►    ${prefix}video
   ┃►    ${prefix}ytmp3
   ┃►    ${prefix}ytmp4 
   ┃►    ${prefix}yts
   ┃►    ${prefix}lyrics
   ┃►    ${prefix}movie
   ┃►    ${prefix}google
   ┃►    ${prefix}gimage
   ┃►    ${prefix}pinterest
   ┃►    ${prefix}wallpaper
   ┃►    ${prefix}image
   ┃►    ${prefix}searchgc
   ┃►    ${prefix}wikimedia
   ┃  
   ┣━━━ 📈 *𝙴𝙲𝙾𝙽𝙾𝙼𝚈* 📈 ━━━━━━━➢
   ┃
   ┃►    ${prefix}daily 
   ┃►    ${prefix}wallet
   ┃►    ${prefix}bank
   ┃►    ${prefix}bankupgrade
   ┃►    ${prefix}deposit
   ┃►    ${prefix}withdraw 
   ┃►    ${prefix}rob / attack
   ┃►    ${prefix}transfer / give
   ┃►    ${prefix}wealth / ritual
   ┃
   ┣━━━ 🎮 *𝙶𝙰𝙼𝙴𝚂* 🎮 ━━━━━━━━━➢
   ┃
   ┃►    ${prefix}ttt / tictactoe
   ┃►    ${prefix}truth
   ┃►    ${prefix}dare
   ┃►    ${prefix}spin / slot
   ┃►    ${prefix}gamble / lottery
   ┃
   ┣━━━ 🛠️ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁* 🛠️ ━━━━━➢
   ┃
   ┃►    ${prefix}sticker
   ┃►    ${prefix}toimg
   ┃►    ${prefix}tovideo
   ┃►    ${prefix}togif
   ┃►    ${prefix}tourl
   ┃►    ${prefix}tomp3
   ┃►    ${prefix}toaudio
   ┃►    ${prefix}steal
   ┃►    ${prefix}stickermeme
   ┃►    ${prefix}emojimix
   ┃
   ┣━━━ 🎤 *𝚂𝙾𝚄𝙽𝙳 𝙴𝙳𝙸𝚃𝙾𝚁* 🎤 ━━━➢
   ┃
   ┃►    ${prefix}ringtone
   ┃►    ${prefix}bass
   ┃►    ${prefix}tempo
   ┃►    ${prefix}blown
   ┃►    ${prefix}robot
   ┃►    ${prefix}slow
   ┃►    ${prefix}squirrel
   ┃►    ${prefix}deep
   ┃►    ${prefix}earrape
   ┃►    ${prefix}fast
   ┃►    ${prefix}fat
   ┃►    ${prefix}nightcore
   ┃►    ${prefix}reverse
   ┃
   ┣━━━ 🎭 *𝚁𝙴𝙰𝙲𝚃𝙸𝙾𝙽𝚂* 🎭 ━━━━━━➢
   ┃
   ┃►    ${prefix}cuddle
   ┃►    ${prefix}hug
   ┃►    ${prefix}kiss
   ┃►    ${prefix}bonk
   ┃►    ${prefix}cry
   ┃►    ${prefix}bully
   ┃►    ${prefix}slap
   ┃►    ${prefix}kill
   ┃►    ${prefix}happy
   ┃►    ${prefix}lick
   ┃►    ${prefix}pat
   ┃►    ${prefix}smug
   ┃►    ${prefix}nom
   ┃►    ${prefix}glomp
   ┃►    ${prefix}bite
   ┃►    ${prefix}yeet
   ┃►    ${prefix}blush
   ┃►    ${prefix}smile
   ┃►    ${prefix}wave
   ┃►    ${prefix}highfive
   ┃►    ${prefix}handhold
   ┃►    ${prefix}poke
   ┃►    ${prefix}wink
   ┃►    ${prefix}dance
   ┃►    ${prefix}cringe
   ┃
   ┣━━━ 📥 *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁* 📥 ━━━━━➢
   ┃  
   ┃►    ${prefix}video
   ┃►    ${prefix}mediafire
   ┃►    ${prefix}instagram
   ┃►    ${prefix}igtv
   ┃►    ${prefix}facebook
   ┃►    ${prefix}fbmp3
   ┃►    ${prefix}twitter
   ┃►    ${prefix}twittermp3
   ┃►    ${prefix}tiktok
   ┃►    ${prefix}tiktokaudio
   ┃►    ${prefix}happymod
   ┃►    ${prefix}tiktoknowm
   ┃   
   ┣━━━ 🎐 *𝙵𝚄𝙽* 🎐 ━━━━━━━━━━━➢
   ┃
   ┃►    ${prefix}reaction
   ┃►    ${prefix}cutecheck
   ┃►    ${prefix}couple
   ┃►    ${prefix}soulmate
   ┃►    ${prefix}handsomecheck
   ┃►    ${prefix}beautifulcheck
   ┃►    ${prefix}awesomecheck
   ┃►    ${prefix}greatcheck
   ┃►    ${prefix}gaycheck
   ┃►    ${prefix}uglycheck
   ┃►    ${prefix}charactercheck
   ┃►    ${prefix}lesbiancheck
   ┃►    ${prefix}hornychec
   ┃►    ${prefix}prettycheck
   ┃►    ${prefix}lovelycheck
   ┃
   ┣━━━ 🈴 *𝚆𝙴𝙴𝙱* 🈴 ━━━━━━━━━━➢
   ┃    
   ┃►    ${prefix}anime
   ┃►    ${prefix}animestory
   ┃►    ${prefix}awoo
   ┃►    ${prefix}manga
   ┃►    ${prefix}animewall
   ┃►    ${prefix}animewallpaper2
   ┃►    ${prefix}crosplay
   ┃►    ${prefix}animenom
   ┃►    ${prefix}feed
   ┃►    ${prefix}foxgirl
   ┃►    ${prefix}waifu
   ┃►    ${prefix}waifu2
   ┃►    ${prefix}waifu3
   ┃►    ${prefix}loli
   ┃►    ${prefix}coffee
   ┃►    ${prefix}tickle
   ┃►    ${prefix}meow
   ┃►    ${prefix}neko
   ┃►    ${prefix}neko2
   ┃►    ${prefix}migumin
   ┃►    ${prefix}wallpaper
   ┃►    ${prefix}animequote
   ┃
   ┣━━━ ♨️ *𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝚅𝙴* ♨️ ━━━━➢
   ┃  
   ┃►    ${prefix}quote
   ┃►    ${prefix}weather
   ┃►    ${prefix}covid
   ┃►    ${prefix}earthquake
   ┃►    ${prefix}wiki
   ┃►    ${prefix}stalknumber
   ┃
   ┣━━━ ♻️ *𝙴𝚂𝚂𝙴𝙽𝚃𝙸𝙰𝙻𝚂* ♻️ ━━━━━➢
   ┃    
   ┃►    ${prefix}qr
   ┃►    ${prefix}say
   ┃►    ${prefix}fliptext
   ┃►    ${prefix}toletter
   ┃►    ${prefix}translate
   ┃   
   ┣━━━ 🎗 *𝙾𝚃𝙷𝙴𝚁𝚂* 🎗 ━━━━━━━━➢
   ┃
   ┃►    ${prefix}stickermeme
   ┃►    ${prefix}quotes
   ┃►    ${prefix}report
   ┃►    ${prefix}afk
   ┃►    ${prefix}darkjoke
   ┃►    ${prefix}gvoice
   ┃
   ┣━━━ 💀 *𝙽𝚂𝙵𝚆* 💀️ ━━━━━━━━━━➢
   ┃   
   ┃ 🍁𝚃𝚈𝙿𝙴 " *${prefix}nsfw* " 𝚃𝙷𝙴𝙽
   ┃    𝙴𝙽𝙰𝙱𝙻𝙴 𝙽𝚂𝙵𝚆 (𝙰𝙳𝙼𝙸𝙽 𝙾𝙽𝙻𝚈!).
   ┃  
   ┃ 🍁𝚃𝙷𝙴𝙽 𝚃𝚈𝙿𝙴 " *${prefix}nsfwmenu* "
   ┃    𝙵𝙾𝚁 𝙰𝙻𝙻 𝙽𝚂𝙵𝚆 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂.
   ┃   
   ┃  『  *${global.BotName}*  』
   ┃     𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝙳 𝙱𝚈 *Dᴇᴠ ɪxAAʀ*
   ┃  
   ┃ 🍁𝚃𝙾 𝚄𝚂𝙴 𝙰𝙽𝚈 𝙾𝙵 𝚃𝙷𝙴𝚂𝙴
   ┃    𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝚃𝚈𝙿𝙴.
   ┃   
   ┃   " *${prefix}<𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙽𝙰𝙼𝙴>* "
   ┃   
   ┃ 🍁𝚃𝙾 𝙶𝙴𝚃 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺
   ┃    𝚃𝚈𝙿𝙴 " *${prefix}support* ".
   ┃
   ┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━➢
       *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Dᴇᴠ ɪxAAʀ*`
            let buttonMessage = {
                        video:fs.readFileSync('./system/ezgif-5-31af743f15.mp4'),gifPlayback:true,
                        caption: helpmenu,
                        
                        headerType: 4
                        
                    }
                A17.sendMessage(m.chat, buttonMessage,{ quoted:m })
                    }
    break;
     
    
    case '':
        if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        A17.sendMessage(from, { react: { text: "✨" , key: m.key }})
            
     reply(`Do you need any help ${pushname} ? Type *${prefix}help* to get my full command list.`)
        }
        
    break; 


    //qr
    case 'qr': case 'scanner': case 'qrcode':
      if (isBan) return reply(mess.banned)	 			
      if (isBanChat) return reply(mess.bangc)
      if (!m.isGroup) return replay(mess.grouponly)
A17.sendMessage(from, { react: { text: "♻️" , key: m.key }})
  
  reply(`Running repl....Please wait until repl.it responds...`)						
  var replqr =  await getBuffer(`https://a17-qr-scanner.broken0007.repl.co/`)
                     
        let bmffg = {
         image: replqr,
         caption:  `Scan the qr within 10-15 seconds...`,
    
        }     
              await A17.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                      return('Error!')
                  })
  break;


      //////search
      case 'weather':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        A17.sendMessage(from, { react: { text: "☔", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *𝘞𝘌𝘈𝘛𝘏𝘌𝘙 𝘙𝘌𝘗𝘖𝘙𝘛* 🌤  \n\n🔎 *𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙾𝙲𝙰𝚃𝙸𝙾𝙽 :* ${myweather.data.name}\n*🚩 𝙲𝙾𝚄𝙽𝚃𝚁𝚈 :* ${myweather.data.sys.country}\n⛱️ *𝚆𝙴𝙰𝚃𝙷𝙴𝚁 :* ${myweather.data.weather[0].description}\n🌡️ *𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙴 :* ${myweather.data.main.temp}°C\n❄️ *𝙼𝙸𝙽𝙸𝙼𝚄𝙼 𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙴 :* ${myweather.data.main.temp_min}°C\n🔥 *𝙼𝙰𝚇𝙸𝙼𝚄𝙼 𝚃𝙴𝙼𝙿𝙴𝚁𝙰𝚃𝚄𝚁𝙴 :* ${myweather.data.main.temp_max}°𝙲\n💦 *𝙷𝚄𝙼𝙸𝙳𝙸𝚃𝚈 :* ${myweather.data.main.humidity}%\n🌬️ *𝚆𝙸𝙽𝙳 :* ${myweather.data.wind.speed} 𝙺𝚖/𝚑\n\n   *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴅᴇᴠ ʙᴏᴛ*`
        A17.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;

      ///funmenu

      case 'stupidcheck': case 'uncleancheck':
      case 'hotcheck': case 'smartcheck':
      case 'greatcheck':
      case 'evilcheck': case 'dogcheck':
      case 'coolcheck':
      case 'waifucheck':
        cantik = body.slice(1)
        const okebnh1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const A17kak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
        A17.sendMessage(m.chat, { text: A17kak }, { quoted: m })
        break;



      ///////////////////////////////////////////////////
      ///////////////////////////////////////////////////



      default:

      if(isCmd){
          if (isBan) return reply(mess.banned)	 			
          if (isBanChat) return reply(mess.bangc)
          A17.sendMessage(from, { react: { text: "❌", key: m.key }}) 
          reply (`🙉 𝙷𝙴𝚈 *${pushname}* 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙰𝚁𝙴 𝙽𝙾𝚃 𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙼𝙴𝙳! 𝚃𝚈𝙿𝙴 *${prefix}help* 𝚃𝙾 𝙶𝙴𝚃 𝙼𝚈 𝙵𝚄𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃!`)
  
      }	 			
  
  
  if (budy.startsWith('=>')) {
  if (!isCreator) return reply(mess.botowner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
  reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
  } catch (e) {
  A17.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
  }
  }
  if (budy.startsWith('>')) {
  if (!isCreator) return reply(mess.botowner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await reply(evaled)
  } catch (err) {
  await A17.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
  }
  }
  
                  
  if (budy.startsWith('$')) {
  if (!isCreator) return replay(mess.botowner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return A17.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
  if (stdout) return replayH(stdout)
  })
  }
  
  
  if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    A17.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
    }
    }
    }catch (err) {
    A17.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
    console.log(err)
    }
    }
  
  
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
  })
  
