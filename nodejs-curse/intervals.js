let counter = 1;

function printHello(){
    if (counter > 5){
        clearInterval(timer5);
    }else{
        console.log(`Hello world ${counter}`);
    }
    counter++;
}

const timer5 = setInterval(() => printHello(), 1000);