// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  // let n = parseInt(input[0]);
  let l = input[1]
    .split(" ")
    .map((x) => parseInt(x))
    .sort((a, b) => {
      return a < b ? -1 : 1;
    });
  let c = 0;
  for (let i = 0; i < l.length - 2; ++i) {
    for (let j = i + 1; j <= l.length - 1; ++j) {
      for (let k = j + 1; k < l.length; ++k) {
        if (
          l[i] !== l[j] &&
          l[j] !== l[k] &&
          l[k] !== l[i] &&
          l[i] + l[j] > l[k]
        ) {
          c++;
        }
      }
    }
  }
  console.log(c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
