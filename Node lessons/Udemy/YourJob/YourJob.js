const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your job?`, job => {
    console.log(`I need  ${job} my company `);
    readline.close();
  });