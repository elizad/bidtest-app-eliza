import {mockCompetition, mockBuyers} from './mockTopTen'
import * as helperTopTen from '../helperTopTenFunctions'

describe('helper filteredArray functions', function () {
    it('filter top ten ', function () {
        const resultC = helperTopTen.filteredArray(mockCompetition, mockBuyers )
        expect(resultC[0].count > resultC[1].count).toBe(true)
        expect(resultC.length <=10).toBe(true)
    });
});