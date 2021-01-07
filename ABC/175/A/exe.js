// inputに入力データ全体が入る
function Main(input) {
  let s = input.trim().split(" ")[0];
  if (s.includes("RRR")) {
    console.log(3);
    return;
  }
  if (s.includes("RR")) {
    console.log(2);
    return;
  }
  if (s.includes("R")) {
    console.log(1);
    return;
  }
  if (!s.includes("R")) {
    console.log(0);
    return;
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
