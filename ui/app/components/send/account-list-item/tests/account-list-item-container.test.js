import assert from 'assert'
import proxyquire from 'proxyquire'
import {getIsMainnet} from "../../../../selectors";

let mapStateToProps

proxyquire('../account-list-item.container.js', {
  'react-redux': {
    connect: (ms, md) => {
      mapStateToProps = ms
      return () => ({})
    },
  },
  '../send.selectors.js': {
    getConversionRate: (s) => `mockConversionRate:${s}`,
    getCurrentCurrency: (s) => `mockCurrentCurrency:${s}`,
    getNativeCurrency: (s) => `mockNativeCurrency:${s}`,
  },
  '../../../selectors.js': {
    isBalanceCached: (s) => `mockBalanceIsCached:${s}`,
    preferencesSelector: (s) => ({
      showFiatInTestnets: `showFiatInTestnets:${s}`,
    }),
    getIsMainnet: () => true,
  },
})

describe('account-list-item container', () => {

  describe('mapStateToProps()', () => {

    it('should map the correct properties to props', () => {
      assert.deepEqual(mapStateToProps('mockState'), {
        conversionRate: 'mockConversionRate:mockState',
        currentCurrency: 'mockCurrentCurrency:mockState',
        nativeCurrency: 'mockNativeCurrency:mockState',
        balanceIsCached: 'mockBalanceIsCached:mockState',
        showFiat: true,
      })
    })

  })

})
