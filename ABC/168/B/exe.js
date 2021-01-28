// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let k = parseInt(input[0].trim());
  let s = input[1].trim();
  if (s.length <= k) {
    console.log(s);
  } else {
    console.log(s.slice(0, k) + "...");
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
