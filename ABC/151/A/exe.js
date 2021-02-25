function Main(input) {
  input = input.split("\n");
  let c = input[0].trim();

  console.log(String.fromCharCode(c.charCodeAt() + 1));
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
