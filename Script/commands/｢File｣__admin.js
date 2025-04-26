const axios = require("axios");

const request = require("request");

const fs = require("fs-extra");

const moment = require("moment-timezone");



module.exports.config = {

    name: "admin",

    version: "1.0.0",

    hasPermssion: 0,

    credits: "ullash",

    description: "Show Owner Info",

    commandCategory: "info",

    usages: "",

    cooldowns: 5

};



module.exports.run = async function({ api, event }) {

    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");



    var callback = () => api.sendMessage({

        body: `

┏━━━━━━━━━━━━━━━━━━━━━┓

┃       ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🪪      

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 👤 𝐍𝐚𝐦𝐞      :  SOJIB REZA 👽✨

┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞

┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : PURE SINGLE 💔

┃ 🎂 𝐀𝐠𝐞       : 15+

┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦

┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : LABORATORY SCHOOL AND COLLEGE, RAJSHAHI 

┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : RAJSHAHI, BANGLADESH 

┣━━━━━━━━━━━━━━━━━━━━━┫

┃📞  WHAT'S APP   : 01727501820

┃ 📬 GMAIL : [Sojibreza1971@gmail.com]

┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/share/16BWqbNTuY/)

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: 25/04/2025 07:08:34 PM

┗━━━━━━━━━━━━━━━━━━━━━┛

        `,

        attachment: fs.createReadStream(__dirname + "/cache/1.png")

    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

  

    return request(encodeURI(`https://graph.facebook.com/61550628934323/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))

        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))

        .on('close', () => callback());

};
