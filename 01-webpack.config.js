// entry 为数组时
const path = require('path')
const project = '01-entry-array'
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const config = {
  mode: "development",
  entry: [
    resolve(project + '/foo.js'),
    resolve(project + '/bar.js')
  ]
};
module.exports = config;