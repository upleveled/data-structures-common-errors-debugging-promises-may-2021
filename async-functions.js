// goal 1 = print "info 1 info 2"
// goal 2 = print "info 1 info 2" no knowing how long the timeout goes
const number = 1;
console.log(number);
// await run 2 kilometers and grab my info
const number21 = 2;
console.log(info);

fetch(www.example.com)
  .then((res) => res.text())
  .then((body) => {
    console.log(body);
  });

async function myFetch() {
  const res = await fetch(www.example.com);
  const body = await res.text();

  console.log(body);
}
myFetch();

let info1, info2;

setTimeout(() => {
  info1 = 'info 1 ';
  run();
}, 200);

setTimeout(() => {
  info2 = 'info 2';
  run();
}, 20);

function run() {
  if (info1 && info2) {
    console.log(info1 + info2);
  }
}

console.log('start');
