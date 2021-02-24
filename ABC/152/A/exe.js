// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [n, m] = input[0].split(" ").map((x) => parseInt(x));
  console.log(n === m ? "Yes" : "No");
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
