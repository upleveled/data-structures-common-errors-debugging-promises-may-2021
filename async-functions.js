// goal 1 = print "info 1 info 2"
// goal 2 = print "info 1 info 2" no knowing how long the timeout goes

let info1, info2;

setTimeout(() => {
  info1 = 'info 1 ';
  run();
}, 200);

setTimeout(() => {
  info2 = 'info 2';
  run();
}, 20);

let millisecond = 0;

function run() {
  if (info1 && info2) {
    console.log(info1 + info2);
  }
}

console.log('start');
