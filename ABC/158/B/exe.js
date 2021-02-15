// inputに入力データ全体が入る
function Main(input) {
  let [n, a, b] = input.split(" ").map((x) => BigInt(x));
  let c = a + b;
  if (c >= n) {
    if (n >= a) {
      console.log(a.toString());
      return;
    } else {
      console.log(n.toString());
      return;
    }
  } else {
    // n > c(a+b)
    let show = n / c;
    let ans = BigInt(0);
    ans = show * a;
    let p = n - show * c;
    if (a >= p) {
      ans = ans + p;
    } else {
      ans = ans + a;
    }
    console.log(ans.toString());
    return;
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
