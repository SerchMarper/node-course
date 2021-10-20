let counter = 0, intervalTimer

const printInfinite = (timer1) =>
  intervalTimer = setInterval(() => {
    console.log("Hello world. " + timer1);
    counter++;
    if (counter > 4) {
      counter = 0;
      clearInterval(intervalTimer);
      printInfinite(timer1 + 100);
    }
  }, timer1);

printInfinite(100);
