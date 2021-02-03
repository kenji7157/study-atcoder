// inputに入力データ全体が入る
function Main(input) {
  let [a, b, c, d] = input.split(" ").map((x) => parseInt(x));
  while (true) {
    c = c - b;
    if (c <= 0) {
      console.log("Yes");
      break;
    }
    a = a - d;
    if (a <= 0) {
      console.log("No");
      break;
    }
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
