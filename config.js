const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKj9xEsKqrBlEUEW94ZerUVIQAUQhIIopd/tR8wnzZFNpd3Q9zzvTwlErC2itrrb3fAMkwRTaqQOcN5AUuIUP1klU5Ah3QPYchKgAHAsgg6ADfPiipBdcTlY2kid1Ms7BFs/2RugNtMvTKTHRTE6bRfrV6BXcO5Od9gv1fAMLSSX1qL7anVmvbGMU6HvrhxUKOmMAl7anm0duqE51c1/wruNeIEBeYRP08RikqYGKjagZx8T36J1POmusj0lfHuXcarR0ZNxzUFUbLPBlj1xsu19FZcRtE0L9H32oNurSBJk6szpyh50qGlZ/cdijJM4OJw+h2ZrNyB5v5InrSpzgiKLACRBhm1bd1V8wsmpoTthlNW8xY9fg9TOCqKEeB1zu0JtfIPk3z0dZe8vPvET+5h0U19U5QPrbjXNVcozFVmIFmw1TapJfNVpD1vnAIaWJ9JT4rPrJy/D+6r8aLg1PRwXg088oFcsSDUMb4RtxTpHps24d7ntzg9MKnu2/GZlA1xZ7Z8Ewkzpqq34ztbnKZXnGy3urreKRDKveM/nIuHj/pQ3YufsVS6K0H/UJdSIvIksYTtrkEzHAai+uVBafwaI4CXR5vjGh+OobEcXtxth1UI6fpkVly08djK5aaazpOpcg+s52urQihxuX18aIjqqwAdIQ7BwoUYcoKyHBG6j1RVDgAg9JFfoHYQ16ADsPRRmsXA9i/8kHhGU2qk8xINP2WCbcWQ6q5c1RZReblFXAgLzIfUYqCIaYsKyoHUQojREHnjx8cIOjKnsbV5SSBAyEuKFuRc55kMPhw9eMQ+n52JsytiG/UC1SADv+5jRjDJKK1jmcCCz/GJTJiyCjohDCh6M6BAJXYRzUeIOdDUBpbvOTxYFsK7rz/Z3tzqSnHGXleUQVZ4HnBf9m3VeVFVvngRYOS8IJCpAlK0BY1TQAcwO89U//zUwvnp75CvLWQDGg5J/udvV0IcaLt4Ml/2PDUHhUoAB1WnBEH9tA/nvNldkTkF7hX3YoafD7fidJOiy5kpAYKHDoSb+6+4D49BZ23zzllZEGN11LXM0PobwEH0kcEcf1yUZJVgec1RZXFdkfWfqe/XWolYZ7/RhADHCCwvg76r6n/9191oXcXaogAMYgTCjrAcJAhEWeOlYZfRrtdt9J1W9frZHy49hH/Z7zaU+mwK+d0rejC4mpF8Uk8b+mJFe2YXjb6XIt7vgg99YD/FQR0wKg3QP3SVfBYTMh0sBc0RYjH+4BGkMGe6MkbPpwk2V7jDdkr293NwZ3pbmFXLamcnlv9iTVpFgN70JRbWaWNs77NlEevfKTna7Gt6QrEGg54LWrMdrtSXGQz23BsKaFKXpmuUE6J3TTn2aJonhZdwx9k63DRQ20/448z2tdbzdVt27vIqnBAvjw3N2nVnT8b8zEYkveBjB8t8/aetRCjx3x7N+G/3frMPX/nvoC8j8yfZKuLbkwWx/zYRNFk5buWBVmRtO0CNuS9Y0b92W4uTdI0tOQI3O8/OJAnkIVZkYIOoOkeAg4kkDL9s2+XOEWUwTQHHaEtCzXrVosDaaXnucsg+2h3oNefNdmD+z8uMKrTCggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ab.sallam",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ab.sallam",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

