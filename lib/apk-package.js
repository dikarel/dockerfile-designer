module.exports = ApkPackage

function ApkPackage (name) {
  this.props = {name}
}

ApkPackage.prototype.name = function () {
  return this.props.name
}
