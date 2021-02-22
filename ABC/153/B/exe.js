// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [h, n] = input[0].split(" ").map((x) => parseInt(x));
  let a = input[1]
    .split(" ")
    .map((x) => parseInt(x))
    .sort((a, b) => {
      return a > b ? -1 : 1;
    });
  let isYes = false;
  for (let i = 0; i < a.length; i++) {
    h = h - a[i];
    if (h <= 0) {
      isYes = true;
      break;
    }
  }
  console.log(isYes ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
