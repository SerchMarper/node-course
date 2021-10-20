const theOneFunc = seconds => {
    console.log(`Hello world after ${seconds} seconds`)
};

setTimeout(theOneFunc, 4*1000, 4);

setTimeout(theOneFunc, 8*1000, 8);