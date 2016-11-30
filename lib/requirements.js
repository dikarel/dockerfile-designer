module.exports = Requirements

function Requirements () {
  this.props = {
    packages: []
  }
}

Requirements.prototype.packages = function () {
  return this.props.packages
}

Requirements.prototype.addPackages = function (...packages) {
  this.props.packages.push(...packages)
}
