const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What is your name ?`, name => {
    console.log("\x1b[32m" ,`Hi ${name} !`);
    readline.close();
  });