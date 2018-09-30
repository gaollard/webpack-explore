module.exports = function(source) {
  // 对资源应用一些转换……
  let ret = source
    .replace(/\n/g, '')
    .replace(/\s/g, '')
    .replace(/\r\n/, '')
  function log () {
    console.log(ret)
  }
  console.log(log.toString())
  return `export default ${ log.toString() }`;
};