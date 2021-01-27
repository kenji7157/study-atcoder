// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let a = input[1].split(" ").map((x) => BigInt(x));

  let ans = BigInt(1);

  if (a.includes(BigInt(0))) {
    console.log("0");
    return;
  }
  for (let i = 0; i < a.length; i++) {
    ans = ans * a[i];
    if (ans > Math.pow(10, 18)) {
      console.log("-1");
      return;
    }
  }

  console.log(ans.toString());
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
