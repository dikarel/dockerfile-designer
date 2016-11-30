/* eslint-env mocha */

describe('project', function () {
  // Extra leeway for standard to parse the entire project
  this.timeout(15000)

  it('conforms to StandardJS', require('mocha-standard'))
})
