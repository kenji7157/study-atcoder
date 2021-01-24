// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let s = input[0].trim();
  let t = input[1].trim();
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      c++;
    }
  }
  console.log(c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
