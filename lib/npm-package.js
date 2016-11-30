module.exports = NpmPackage

function NpmPackage (name) {
  this.props = {name}
}

NpmPackage.prototype.name = function () {
  return this.props.name
}
