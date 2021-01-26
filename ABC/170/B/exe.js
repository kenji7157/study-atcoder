const { isUndefined } = require("util");

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [x, y] = input[0].split(" ").map((x) => parseInt(x.trim()));

  let isYes = false;
  for (let i = 1; i <= x; i++) {
    const r1 = i * 2;
    const r2 = (x - i) * 4;
    const t1 = i * 4;
    const t2 = (x - i) * 2;

    if (y === r1 + r2 || y === t1 + t2) {
      console.log("Yes");
      isYes = true;
      break;
    }
  }
  if (!isYes) console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
