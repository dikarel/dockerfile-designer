const fuzzy = require('fuzzy')
const packages = [
  'tldr',
  'yarn',
  'mocha',
  'gulp',
  'phantomjs',
  'phantomjs-prebuilt'
]

module.exports = {search}

function search (query) {
  return fuzzy
    .filter(query, packages)
    .map((el) => el.string)
}
