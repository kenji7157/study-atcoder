// inputに入力データ全体が入る
function Main(input) {
  let x = parseInt(input.trim());
  let p1 = Math.floor(x / 500);
  x = x - 500 * p1;
  let p2 = Math.floor(x / 5);
  console.log(p1 * 1000 + p2 * 5);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
