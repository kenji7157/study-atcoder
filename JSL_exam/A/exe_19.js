// inputに入力データ全体が入る
function Main(input) {
  var max = 5;
  for (var i = 0; i < max; i++) {
    setTimeout(() => {
      console.log(max - i);
    }, i * 1000);
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
