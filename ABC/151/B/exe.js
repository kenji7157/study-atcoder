// inputに入力データ全体が入るi
function Main(input) {
  input = input.split("\n");
  let [n, k, m] = input[0].split(" ").map((x) => parseInt(x));
  let a = input[1].split(" ").map((x) => parseInt(x));
  const sum = a.reduce((a, b) => {
    return a + b;
  });
  let ans = n * m - sum;
  if (ans < 0) {
    ans = 0;
  } else if (ans > k) {
    ans = -1;
  }
  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
