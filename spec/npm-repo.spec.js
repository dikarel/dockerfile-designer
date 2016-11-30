/* eslint-env mocha */

const expect = require('expect')

describe('npmRepo', () => {
  const sut = require('../lib/npm-repo')

  describe('search', () => {
    it('returns matching package names', () => {
      const results = sut.search('phantom')
      expect(results).toContain('phantomjs')
      expect(results).toContain('phantomjs-prebuilt')
    })
  })
})
