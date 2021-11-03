let starArray = "";
module.exports = function print (msg){
    for(let i = 0; i < msg.length; i++){
        starArray += "*";
    }
    console.log(starArray);
    console.log(msg);
    console.log(starArray);
}