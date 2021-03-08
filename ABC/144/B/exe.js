function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0].trim());
  let ans = "No";
  for (let i = 1; i < 10; i++) {
    let a = n % i;
    let b = n / i;
    if (a === 0 && b < 10) {
      ans = "Yes";
      break;
    }
  }
  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
