// inputに入力データ全体が入る
function Main(input) {
  const user = [
    { id: 1, name: "Aさん", prefecture: "東京都" },
    { id: 2, name: "Aさん" },
    { id: 3, name: "Aさん", prefecture: "" },
    { id: 4, name: "Aさん" },
  ];
  const getPrefecture = user.filter((x) => x.hasOwnProperty("prefecture"));
  console.log(getPrefecture);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
