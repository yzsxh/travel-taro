module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'taro/vue3',
    'standard',
    '@vue/prettier',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      // 将prettier的问题提示由警告升级为错误
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
}
