function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0].trim());
  let d = input[1].split(" ").map((x) => parseInt(x));
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      ans = ans + d[i] * d[j];
    }
  }
  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
