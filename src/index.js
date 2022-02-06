module.exports = function reverse (n) {
    let str = String(Math.abs(n));
    let resStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        resStr = `${resStr}${str[i]}`;
    }
    let resNum = Number(resStr);
    return resNum;  
}
