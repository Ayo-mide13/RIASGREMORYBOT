I'm//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349116279521";
global.sudo = process.env.SUDO || "2349116279521";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtYUU92VWNRSm9FWVFFblZ1V0ttT21nWXRuUm0rODQ0V0hyU0dmYnhGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktVMGJ2MWtUYTVxM1NZZWk5bDV6VmpyNHUveHkzbFBXWWxaeWFoREUwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRDZnMFM0dmo3SzVIb2lOODVwTWpWdytVbVMvQStrSkZ5M3BzNTYxLzNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WEZzMWU1OVZtWmc3MVFGeFV5TXkvMERwWENjTCthaHhvOVRRZElxdGt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QVEZ1bHRwY0lYaHlPeHVWMXZVblRKVGF5S01GVVQ3L2RSNVdpZVQ1blk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJUTWhROWoyZGM1WTY3M1QvRm84WklvZGZ3bmM1TmZDVU9WbXVlUkcrMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0Vhak5KRlRHNnEzc3ZLTmEzNjF5UWZTY3luZ2hVVmlGM3JSbXlvQkxrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianBlbmMwTTR6Nkw0SUJ4c2J2ZUhFM0lSSGpZeUpOZnllQ2V3djBja2l4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlovdHBZSm9hMjVkMDFkeHFFWWtwaVNiUDBxU2ErZVNsazljTUZYcjRiaW5LL05JYVJDd1JWWmFtTUZBUnRMNDg1WGdGVmNhZUd1dHllRzlldk1nZ2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6InRtZFRnbEtvcmgyL1F6alRONTc1cTJYem9yZWR6TXdKc3VLYVpUdE9ML1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNjI3OTUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMzc4MTAyRDkxNThEN0YzOEM5MjE2NUNDMUE1MjVCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMzIzMzE4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTE2Mjc5NTIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0NzI5NEYyMzE3M0M2Q0MzQkVCNzczMkJFQ0E3RjFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzIzMjMzMTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMTYyNzk1MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjZDQzQ4Njc2OEMwMDI1RjExMDg3ODFBQjNFOTc5RTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjMyMzMyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTExNjI3OTUyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QTc5MThCMDc5RjhCQjgzOEEzODY5QTEyRkQ2NDcyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMzIzMzIwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIY0hsLVBKOVJ3aW5uWjZnblBpV1pRIiwicGhvbmVJZCI6ImQ2ZjAzMGZlLTAzOWQtNDdhZC05OTY2LTljYmUxYTk2YzFlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJROWdoN2tuSGFXelRlbUhhSWZDdTFyVi9KcmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjdRcDQxZW5nelgwVVJRVmJYMHU5Z3FtVGFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1aUEw1ODdIIiwibWUiOnsiaWQiOiIyMzQ5MTE2Mjc5NTIxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQS5DLlQgRGVzaWducyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEMwa2VrR0VPZlBoTG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXlkL1dXeWVTcXdhMXhiVlpnTE9OTWtTOEgvZ3lwczk2V2RGakNtYkFpUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNXlpVVpaNFNUYW9FQWtub3Nqb0d1cXN4QlZJcnlERmNieWU4dW9Hd0xPMGxYdXArbDdtVVphbkU5cVBWNXFpTkxDdFp3dlYxKzQrNWFWUDgrYUJORHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImhBdzdjVWRUYk5TVkhGRTZpVDJNSS9sQXpIcyt0VTNVdlNrQkJJOTM0SlhUN2QzNWNEQ0pqbHltMm01RVQ2WUwvbEU3eXlSbWFoekRWZDJ2cHZlTWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNjI3OTUyMToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhzbmYxbHNua3FzR3RjVzFXWUN6alRKRXZCLzRNcWJQZWxuUll3cG13SWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIzMjMzMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3kwIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
