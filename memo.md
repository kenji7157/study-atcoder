## JavaScript メモ

### 計算量について

以下の制約の場合は、10^8 ぐらいしかループ処理は厳しい

- 実行時間制限: 2 sec
- メモリ制限: 1024 MB

### Number と parseInt の違い

- Number：数値文字列を number 型に変換する(小数も可能)
- parseInt：文字列から整数部分の数値部分を取り出し number 型に変換する(小数は不可)

### 配列から最大値を抽出

- スプレット構文
- Math モジュールを用いる
- Number 型にしか適用できない
- BigInt の場合は reduce して最大値を取得する

```js
// listは配列
var max_val = Math.max(...list)

// BigIntの場合
var max_val_bigint = list.reduce((a, b) => {
  return a > b ? a : b
})
```

###　配列の分割代入

```js
// aに10,bに20が代入される
let [a, b] = [10, 20]
```

### 配列の合計値

```js
let sum = list.reduce((a, b) => {
  return a + b
})
```

### 特定文字の数え上げ

- String オブジェクトの match() メソッドは、マッチした文字列を配列で返す
  - 引数は正規表現で指定する

```js
var ex = /text/g
var arr = str.match(ex)
```

### var と let の違い

- var：関数スコープのため、関数内で値を更新すると書き換わる

```js
function f() {
  var x = 1
  {
    var x = 2
  }
  // x = 2
  console.log(x)
}
```

- let:ブロックスコープのため、ブロックごとに変数管理できる
  - ES6 から仕様に追加された

```js
function f() {
  let x = 1
  {
    let x = 2
  }
  // x = 1
  console.log(x)
}
```

以上より、let を使った方がバグは起こりづらいので、let が推奨されている。

### 等差数列の和

```js
let Sn = (n * (a[初項] + l[末項])) / 2
```

### Math モジュールの利用

- 絶対値の取得
  - Math.abs([number])
- 平方根の取得
  - Math.sqrt([number])
- 切り上げ
  - Math.ceil([number])

### String.prototype.trim()

- trim() メソッドは、文字列の両端の空白を削除する
  - 数値のときは parseInt で空白削除を考慮するが、文字列の場合は trim を意識しないと誤爆する

### BigInt

- 組み込みオブジェクト
- Number.MAX_SAFE_INTEGER よりも大きな数値を信頼できるものとして表現する方法を提供

```js
const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n
```

### reduce

- 配列データの各要素を累積して一つの値にする関数
- 構文：.reduce(function(累積値, 要素) { })

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = numbers.reduce(function (a, b) {
  return a + b
})
// 45が出力される
console.log(result)
```

### 三角形の成立条件

```
- a + b > c
- b + c > a
- c + a > b
```

### sort

- デフォルトだと文字列配列なら指定なしで昇順に並び替える
- 数値の場合はコールバック関数を指定して並び替える必要がある

  - コールバック関数の返戻値が 0 の場合：なにもしない
  - コールバック関数の返戻値が正の場合：第 2 引数の index を第 1 引数より小さくする
  - コールバック関数の返戻値が負の場合：第 1 引数の index を第 2 引数より小さくする

### Set

- あらゆる型を`一意`に格納することができるオブジェクト
- 追加するときは`.add()`メソッドを使用する
  - 引数に配列を展開しても先頭しか追加されないので注意
