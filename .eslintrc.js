module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // this crap doesn't work!!!
  rules: {
    'vue/valid-v-on': 'warn',
    'vue/valid-v-for': 'off'
  }
}