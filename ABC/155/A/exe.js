// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [a, b, c] = input[0].split(" ").map((x) => parseInt(x));
  console.log(
    (a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b)
      ? "Yes"
      : "No"
  );
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
