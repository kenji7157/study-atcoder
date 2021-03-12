function Main(input) {
  input = input.split("\n");
  let s = input[0].trim();
  switch (s) {
    case "Sunny":
      console.log("Cloudy");
      break;
    case "Cloudy":
      console.log("Rainy");
      break;
    case "Rainy":
      console.log("Sunny");
      break;
  }
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
