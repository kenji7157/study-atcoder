module.exports = {
  env: { browser: true, node: true, es6: true },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    semi: "error",
  },
  // 100nでリントエラーが出なくなる
  parserOptions: {
    ecmaVersion: 2020,
  },
  // BigIntでリントエラーがでないように設定
  globals: {
    BigInt: true,
  },
};
