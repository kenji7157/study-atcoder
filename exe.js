// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  var n = parseInt(input[0]);
  var w = parseInt(input[1]);
  console.log(parseInt(n / w));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./sample.txt", "utf8"));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
