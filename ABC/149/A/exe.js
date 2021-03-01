function Main(input) {
  input = input.split("\n");
  let [s, t] = input[0].split(" ").map((x) => x.trim());

  console.log(t + s);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
