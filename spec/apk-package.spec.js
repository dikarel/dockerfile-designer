/* eslint-env mocha */

const ApkPackage = require('../lib/apk-package')
const expect = require('expect')

describe('ApkPackage', () => {
  const sut = new ApkPackage('nginx')

  describe('name', () => {
    it('returns package name', () => {
      expect(sut.name()).toBe('nginx')
    })
  })
})
