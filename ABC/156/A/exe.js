// inputに入力データ全体が入る
function Main(input) {
  let [n, r] = input.split(" ").map((x) => parseInt(x));
  let ir = 0;
  if (n >= 10) {
    ir = r;
  } else {
    let k = n;
    ir = r + 100 * (10 - k);
  }
  console.log(ir);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
