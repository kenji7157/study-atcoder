// inputに入力データ全体が入る
function Main(input) {
  // input = input.split("\n");
  var x = parseInt(input);
  console.log(x < 0 ? 0 : x);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
