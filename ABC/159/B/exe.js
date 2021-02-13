// inputに入力データ全体が入る
function Main(input) {
  let s = input.trim();
  let n = s.length;
  let r = s.split("").reverse().join("");

  let s1 = s.slice(0, (n - 1) / 2);
  let r1 = s1.split("").reverse().join("");
  let s2 = s.slice((n + 3) / 2 - 1, n);
  let r2 = s2.split("").reverse().join("");
  console.log(s === r && s1 === r1 && s2 === r2 ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
