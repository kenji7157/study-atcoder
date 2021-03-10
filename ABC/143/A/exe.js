function Main(input) {
  input = input.split("\n");
  let [a, b] = input[0].split(" ").map((x) => parseInt(x));

  console.log(a - b * 2 < 0 ? 0 : a - b * 2);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
