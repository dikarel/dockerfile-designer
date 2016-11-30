/* eslint-env mocha */

const Requirements = require('../lib/requirements')
const NpmPackage = require('../lib/npm-package')
const expect = require('expect')

describe('Requirements', () => {
  let sut, pkg

  before((done) => {
    sut = new Requirements()
    pkg = new NpmPackage('tldr')
    sut.addPackages(pkg)
    done()
  })

  describe('packages', () => {
    it('returns packages list', () => {
      expect(sut.packages()).toContain(pkg)
    })
  })

  describe('addPackages', () => {
    it('adds packages to the packages list', () => {
      const otherPkg = new NpmPackage('phantomjs')
      sut.addPackages(otherPkg)
      expect(sut.packages()).toContain(pkg)
      expect(sut.packages()).toContain(otherPkg)
    })
  })
})
