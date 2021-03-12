function Main(input) {
  input = input.split("\n");
  let sList = input[0].split("");
  let ans = "Yes";
  for (let i = 0; i < sList.length; i++) {
    if ((i + 1) % 2 !== 0 && sList[i] === "L") {
      ans = "No";
    } else if ((i + 1) % 2 === 0 && sList[i] === "R") {
      ans = "No";
    }
  }
  console.log(ans);
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
