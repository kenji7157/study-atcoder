function Main(input) {
  input = input.split("\n");
  let a = input[0].trim();
  let length = a.length;
  let head = a.slice(0, length / 2);
  let tail = a
    .split("")
    .reverse()
    .join("")
    .slice(0, length / 2);
  let ans = 0;
  for (let i = 0; i < head.length; i++) {
    if (head[i] !== tail[i]) {
      ans += 1;
    }
  }

  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
