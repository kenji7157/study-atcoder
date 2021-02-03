// inputに入力データ全体が入る
function Main(input) {
  let x = parseInt(input.trim());
  let i = 0;
  let c = 100n;
  while (true) {
    i++;
    c = c + c / 100n;
    if (c >= x) {
      break;
    }
  }
  console.log(i);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
