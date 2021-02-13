// inputに入力データ全体が入る
function Main(input) {
  let [n, m] = input.split(" ").map((x) => parseInt(x));
  let c1 = (n * (n - 1)) / 2;
  let c2 = (m * (m - 1)) / 2;
  console.log(c1 + c2);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
