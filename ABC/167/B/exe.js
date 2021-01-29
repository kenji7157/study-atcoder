// inputに入力データ全体が入る
function Main(input) {
  let [a, b, c, k] = input.split(" ").map((x) => parseInt(x));
  let card = [a, b, c];
  let score = [1, 0, -1];
  let ans = 0;

  for (let i = 0; i < 3; i++) {
    if (card[i] - k <= 0 && k !== 0) {
      ans = ans + score[i] * card[i];
      k = k - card[i];
    } else if (card[i] - k > 0 && k !== 0) {
      ans = ans + score[i] * k;
      k = 0;
    }
  }
  console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
