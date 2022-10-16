let timeout = 100;
const slashes = ["|", "/", "-", "\\", "|"];
for (let i of slashes) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, timeout);
  timeout += 200;
}
setTimeout(() => {
  console.log();
}, timeout);