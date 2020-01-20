import * as helperBids from '../../pages/Bids/helperBidsFunctions'
import bidsArr from './mockBids'


describe('helper bids function tests', function () {
    it('return total bids accepted = true ', function () {
        const result = helperBids.returnTotal(bidsArr)
        expect(bidsArr.length).toEqual(3)
        expect(result).toEqual(788.32)
        expect(result.accepted).toBeValid
    })

    it('returnTotalCapacity tests', function () {
        const result = helperBids.returnTotalCapacity(bidsArr)
        expect(result).toEqual(21)
    })
})
