// inputに入力データ全体が入るi
function Main(input) {
  input = input.split("\n");
  let s = input[1].trim();
  const result = s.match(/ABC/g);
  if (!result) {
    console.log(0);
    return;
  }
  console.log(result.length);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
