// inputに入力データ全体が入る
function Main(input) {
  const isSameDate = (d1, d2) => {
    return d1.getTime() == d2.getTime();
  };

  const d1 = new Date("2020/10/1");
  const d2 = new Date("2020/10/1");

  console.log(isSameDate(d1, d2));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
