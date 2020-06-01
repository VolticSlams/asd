const helper = require("./src/helper");

helper.getC2s().then(arr => {
    console.log(`[BRUTER]: Succesfully gotten ${arr.length} IPs.`);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != "") helper.brute(arr[i])
    }
});