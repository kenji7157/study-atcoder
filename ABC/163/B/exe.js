const { sign } = require("crypto");

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [n, m] = input[0].split(" ").map((x) => parseInt(x));
  let a = input[1].split(" ").map((x) => parseInt(x));
  let sum = a.reduce((a, b) => {
    return a + b;
  });
  console.log(n - sum >= 0 ? n - sum : -1);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
