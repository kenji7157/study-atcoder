// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let [a, b] = input[0].split(" ").map((x) => parseInt(x));
  let min = "";
  let max = 0;
  if (a > b) {
    min = String(b);
    max = a;
  } else {
    min = String(a);
    max = b;
  }

  console.log(min.repeat(max));
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
