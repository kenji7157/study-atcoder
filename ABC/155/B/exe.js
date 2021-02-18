// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let a = input[1].split(" ").map((x) => parseInt(x));
  let ans = "APPROVED";
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      if (a[i] % 3 !== 0 && a[i] % 5 !== 0) {
        ans = "DENIED";
      }
    }
  }
  console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
