// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let a = input[0].split(" ").map((x) => {
    return {
      marked: false,
      num: parseInt(x),
    };
  });
  a.push(
    ...input[1].split(" ").map((x) => {
      return {
        marked: false,
        num: parseInt(x),
      };
    })
  );
  a.push(
    ...input[2].split(" ").map((x) => {
      return {
        marked: false,
        num: parseInt(x),
      };
    })
  );
  let n = parseInt(input[3].trim());
  for (let i = 0; i < n; i++) {
    let b = parseInt(input[4 + i].trim());
    a.forEach((obj) => {
      if (obj.num === b) {
        obj.marked = true;
      }
    });
  }
  let isBingo = false;
  // ビンゴ判定を行う
  if (a[0].marked && a[1].marked && a[2].marked) {
    isBingo = true;
  }
  if (a[3].marked && a[4].marked && a[5].marked) {
    isBingo = true;
  }
  if (a[6].marked && a[7].marked && a[8].marked) {
    isBingo = true;
  }
  if (a[0].marked && a[3].marked && a[6].marked) {
    isBingo = true;
  }
  if (a[1].marked && a[4].marked && a[7].marked) {
    isBingo = true;
  }
  if (a[2].marked && a[5].marked && a[8].marked) {
    isBingo = true;
  }
  if (a[0].marked && a[4].marked && a[8].marked) {
    isBingo = true;
  }
  if (a[2].marked && a[4].marked && a[6].marked) {
    isBingo = true;
  }
  console.log(isBingo ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
