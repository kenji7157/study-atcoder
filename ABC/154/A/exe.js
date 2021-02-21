// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [s, t] = input[0].split(" ").map((x) => x.trim());
  let [a, b] = input[1].split(" ").map((x) => parseInt(x));
  let u = input[2].trim();
  if (u === s) {
    a -= 1;
  } else {
    b -= 1;
  }
  console.log(a, b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
