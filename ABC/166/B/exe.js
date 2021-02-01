// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map((x) => parseInt(x));
  let s = new Set();
  for (let i = 0; i < k; i++) {
    let list = input[2 + 2 * i].split(" ").map((x) => parseInt(x));
    list.forEach((x) => s.add(x));
  }

  console.log(n - Array.from(s).length);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
