// inputに入力データ全体が入る
function Main(input) {
  let n = parseInt(input.trim());
  let rest = n % 1000;
  console.log(rest === 0 ? 0 : 1000 - rest);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
