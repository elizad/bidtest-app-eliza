import * as helperBids from '../helperBidsFunctions'
import bidsArr from './mockBids'


describe('helper bids function tests', function () {
    it('return total bids accepted = true ', function () {
        const result = helperBids.returnTotal(bidsArr)
        expect(result).toEqual(788.32)

    })

    it('returnTotalCapacity tests', function () {
        const result = helperBids.returnTotalCapacity(bidsArr)
        expect(result).toEqual(21)
    })
})
