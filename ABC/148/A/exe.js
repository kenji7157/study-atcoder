function Main(input) {
  input = input.split("\n");
  let a = input[0].split(" ").map((x) => parseInt(x));
  let b = input[1].split(" ").map((x) => parseInt(x));

  console.log(6 - a - b);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
