function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0].trim());
  console.log(Math.ceil(n / 2) / n);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
