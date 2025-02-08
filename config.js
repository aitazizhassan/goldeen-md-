/*░██████╗░░█████╗░██╗░░░░░██████╗░███████╗███╗░░██╗
██╔════╝░██╔══██╗██║░░░░░██╔══██╗██╔════╝████╗░██║
██║░░██╗░██║░░██║██║░░░░░██║░░██║█████╗░░██╔██╗██║
██║░░╚██╗██║░░██║██║░░░░░██║░░██║██╔══╝░░██║╚████║
╚██████╔╝╚█████╔╝███████╗██████╔╝███████╗██║░╚███║
░╚═════╝░░╚════╝░╚══════╝╚═════╝░╚══════╝╚═╝░░╚══╝

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░*/









const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //  සෙසන් අයිඩී එක දාන්න👇👇👇 (උඩු කොමා දෙක ඇතුලේ)
  SESSION_ID: process.env.SESSION_ID || "Golden-Queen-MD-0g4FjIiR#ta7jQEmbxm7LbyqAw-GaqeqHtj7rwMFjs68n4dQyDywftrc", 

//  Mongodp URl එක දාන්න 👇👇👇 (උඩු කොමා දෙක ඇතුලේ )
  MONGODB: process.env.MONGODB || "mongodb+srv://TanTan:TanTan@cluster0.fhjwc.mongodb.net/?retryWrites=true&w=majority",


MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
