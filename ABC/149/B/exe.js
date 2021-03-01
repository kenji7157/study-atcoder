// inputに入力データ全体が入るi
function Main(input) {
  input = input.split("\n");
  let [a, b, k] = input[0].split(" ").map((x) => parseInt(x));
  let [ans_a, ans_b] = [0, 0];
  if (a + b <= k) {
    console.log(0, 0);
    return;
  } else {
    ans_a = a - k <= 0 ? 0 : a - k;
    if (ans_a === 0) {
      k = k - a;
    } else {
      k = 0;
    }
    ans_b = b - k <= 0 ? 0 : b - k;
  }

  console.log(ans_a, ans_b);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
