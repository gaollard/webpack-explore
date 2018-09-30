module.exports = function(source) {
  // 对资源应用一些转换……
  console.log(source)
  return source
  return `export default ${ JSON.stringify(source) }`;
};