module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: "module"
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    // keep it permissive for now; tighten later if you want
  }
};
