function Main(input) {
  input = input.split("\n");
  let [k, x] = input[0].split(" ").map((x) => parseInt(x));

  console.log(500 * k >= x ? "Yes" : "No");
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
