const sentence = "hello sthere from lighthouse lab";
let time = 0;
for (let char of sentence){
  setTimeout(() => {
    process.stdout.write(char)
}, time)
  console.log(time);
  time += 50;
  if(time === 50 * sentence.length){
    char += '\n';
  }
}