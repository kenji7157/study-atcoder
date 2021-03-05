function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0].trim());
  let s = input[1].trim();

  if (n % 2 !== 0) {
    console.log("No");
    return;
  } else {
    if (s.slice(0, n / 2) === s.slice(n / 2, n)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
