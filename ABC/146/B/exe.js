function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0].trim());
  let s = input[1].split("");

  let con = [];
  for (let i = 0; i < s.length; i++) {
    let s1 = s[i].charCodeAt() + n;
    s1 = s1 >= 91 ? s1 - 26 : s1;
    con.push(String.fromCharCode(s1));
  }

  console.log(con.join(""));
}

Main(require("fs").readFileSync("./dev/stdin", "utf8"));
