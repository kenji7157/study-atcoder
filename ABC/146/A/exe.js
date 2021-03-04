function Main(input) {
  input = input.split("\n");
  let a = input[0].trim();
  let w = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].reverse();
  for (let i = 0; i < w.length; i++) {
    if (a === w[i]) {
      console.log(i + 1);
      break;
    }
  }
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
