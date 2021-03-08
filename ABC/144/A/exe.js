function Main(input) {
  input = input.split("\n");
  let [a, b] = input[0].split(" ").map((x) => parseInt(x));
  let result = -1;
  if (a < 10 && b < 10) {
    result = a * b;
  }
  console.log(result);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
