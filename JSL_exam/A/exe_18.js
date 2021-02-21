// inputに入力データ全体が入る
function Main(input) {
  var array1 = [10, 20, 30, 40, 50];
  console.log(array1[2]);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
