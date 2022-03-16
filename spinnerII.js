const spinLine = "|/-\\|/-\\|\n";

let startAt = 100;

for (const line of spinLine){

  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, startAt += 100);

};
