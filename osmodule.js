const os = require("os")
console.log(os.homedir())
console.log(os.userInfo())
console.log(os.uptime())
const AAACurrentOSAAA = {
    type : os.type()
};

console.log(AAACurrentOSAAA)