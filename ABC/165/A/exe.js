// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let k = parseInt(input[0]);
  let [a, b] = input[1].split(" ").map((x) => parseInt(x));
  console.log(Math.ceil(a / k) * k <= b ? "OK" : "NG");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
