// inputに入力データ全体が入る
function Main(input) {
  let n = input.trim(" ");
  let n1 = parseInt(n.slice(-1));
  if (n1 === 2 || n1 === 4 || n1 === 5 || n1 === 7 || n1 === 9) {
    console.log("hon");
  }
  if (n1 === 0 || n1 === 1 || n1 === 6 || n1 === 8) {
    console.log("pon");
  }
  if (n1 === 3) {
    console.log("bon");
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
