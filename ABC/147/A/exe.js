function Main(input) {
  input = input.split("\n");
  let a = input[0].split(" ").map((x) => parseInt(x));
  let ans = a.reduce((a, b) => {
    return a + b;
  });
  console.log(ans >= 22 ? "bust" : "win");
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
