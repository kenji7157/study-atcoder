function Main(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map((x) => parseInt(x));
  let hList = input[1].split(" ").map((x) => parseInt(x));
  const ans = hList.filter((h) => h >= k);
  console.log(ans.length);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
