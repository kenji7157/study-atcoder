// inputに入力データ全体が入る
function Main(input) {
  let n = input.trim();
  console.log(n.indexOf("7") === -1 ? "No" : "Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
