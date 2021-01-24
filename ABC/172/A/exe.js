// inputに入力データ全体が入る
function Main(input) {
  let a = parseInt(input.trim());
  console.log(a + a * a + a * a * a);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
