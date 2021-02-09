// inputに入力データ全体が入る
function Main(input) {
  let n = input.trim();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) continue;
    if (i % 5 == 0) continue;
    sum = sum + i;
  }
  console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
