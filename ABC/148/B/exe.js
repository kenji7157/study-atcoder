// inputに入力データ全体が入るi
function Main(input) {
  input = input.split("\n");
  let [n] = input[0].split(" ").map((x) => parseInt(x));
  let [s, t] = input[1].split(" ").map((x) => x.trim());

  let ans = "";
  for (let i = 0; i < n; i++) {
    ans = ans + s.slice(i, i + 1) + t.slice(i, i + 1);
  }

  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
