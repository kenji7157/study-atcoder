// inputに入力データ全体が入る
function Main(input) {
  let s = input.trim();
  console.log(
    s.slice(2, 3) === s.slice(3, 4) && s.slice(4, 5) === s.slice(5, 6)
      ? "Yes"
      : "No"
  );
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
