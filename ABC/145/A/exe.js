function Main(input) {
  input = input.split("\n");
  let a = parseInt(input[0].trim());
  console.log(String(a * a));
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
