// inputに入力データ全体が入る
function Main(input) {
  let x = input.split(" ").map((x) => parseInt(x));
  x.forEach((elm, index) => {
    if (elm === 0) {
      console.log(index + 1);
    }
  });
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
