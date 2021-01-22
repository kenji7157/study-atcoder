// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let c = 0;
  const n = parseInt(input[0]);
  const obj = {
    AC: 0,
    WA: 0,
    TLE: 0,
    RE: 0,
  };
  for (let i = 1; i <= n; i++) {
    const key = input[i].trim();
    obj[key] = obj[key] + 1;
  }
  console.log(`AC x ${obj["AC"]}`);
  console.log(`WA x ${obj["WA"]}`);
  console.log(`TLE x ${obj["TLE"]}`);
  console.log(`RE x ${obj["RE"]}`);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
