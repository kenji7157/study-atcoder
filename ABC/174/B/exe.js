const { constants } = require("buffer");

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let c = 0;
  const [n, d] = input[0].split(" ").map((x) => parseInt(x));
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map((x) => parseInt(x));
    const u = Math.sqrt(x * x + y * y);
    if (u <= d) {
      c++;
    }
  }
  console.log(c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
