var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var meaning = require('@yoctol/meaning');
var prompt = '> ';
var welcome = 'Type \"help\" to get started. Type \"exit\" to exit.';
var typeMap = {
  地區: 'area',
  日期: 'date',
  時間日期: 'datetime',
  排氣量: 'displacement',
  數字: 'number',
  數字範圍: 'numberRange',
  時間: 'time',
  年份: 'year',
  乘客: 'passenger'
};

function usage() {
  console.log('Usage: <type> <InputString>');
  console.log('Type list: 地區, 日期, 時間日期, 排氣量, 數字, 數字範圍'
            + ' 時間, 年份, 乘客');
}

function printPrompt() {
  process.stdout.write(prompt);
}

console.log(welcome);
printPrompt();
rl.on('line', (input) => {
  if (input === 'exit' || input === 'quit' || input === '掰') {
    process.exit();
  } else if (input === 'help') {
    usage();
    printPrompt();
  } else if (input.length === 0) { 
    printPrompt();
  } else {
    params = input.split(' ');
    if (params.length !== 2) {
      usage();
    } else {
      var t_en = typeMap[params[0]];
      if (t_en === undefined) {
          console.log('Invalid type ' + params[0] + ', type \'help\' to find usage.');
      } else {
        var t = meaning[t_en];
        console.log(JSON.stringify(t(params[1]).value));
      }
    }
    printPrompt();
  }
});

rl.on('SIGINT', () => {
  console.log('bye');
  process.exit();
});
