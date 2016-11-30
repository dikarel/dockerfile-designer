/* eslint-env mocha */

const NpmPackage = require('../lib/npm-package')
const expect = require('expect')

describe('NpmPackage', () => {
  const sut = new NpmPackage('tldr')

  describe('name', () => {
    it('returns package name', () => {
      expect(sut.name()).toBe('tldr')
    })
  })
})
