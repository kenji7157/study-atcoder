// inputに入力データ全体が入る
function Main(input) {
  var hogehoge = { hoge1: 1, hoge2: 2, hoge3: 3 };
  Object.keys(hogehoge).forEach((key) => {
    console.log(`${key} ${hogehoge[key]}`);
  });
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
