// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [n, m] = input[0].split(" ").map((x) => parseInt(x));
  let a = input[1].split(" ").map((x) => parseInt(x));
  let sum = a.reduce((a, b) => {
    return a + b;
  });
  let under = sum / (4 * m);
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= under) {
      count = count + 1;
    }
  }

  console.log(count >= m ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
