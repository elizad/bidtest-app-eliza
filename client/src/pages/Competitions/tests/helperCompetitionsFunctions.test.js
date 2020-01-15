import * as helperCompetition from '../helperCompetitionsFunctions'
import {sortCompetitions} from './helperCompetition'
import competitionArr from './mockCompetions'

describe('helper getPendingCompetitions from helper functions', function () {
    it('sort dates by most recent', function () {
        const mockOPENDate = new Date('2019-01-12 05:45:20')
        const result = helperCompetition.getPendingCompetitions(competitionArr, mockOPENDate)

        console.log(result)

        expect(competitionArr.length ).not.toEqual(result.length)

        expect(result.length).toEqual(5)

        expect(competitionArr.length).toEqual(6)

        expect(result[0].id).toBe('aO8l7OX')

    } )

    it('sort dates by open function', function () {
        const mockOPENDate = new Date('2020-01-02 03:32:49')
        const resultOpen = helperCompetition.getOpenCompetitions(competitionArr, mockOPENDate)
        console.log(resultOpen)
        expect(competitionArr.length ).not.toEqual(resultOpen.length)
        expect(resultOpen.length).toEqual(2)
        expect(competitionArr.length).toEqual(6)
        expect(resultOpen[0].id).toBe('0O3lDMv')
    } )

    it('sort dates by closed  function  ', function () {
        const mockOPENDate = new Date('2019-07-07 07:42:28')
        const resultClose = helperCompetition.getClosedCompetitions(competitionArr, mockOPENDate)
        console.log(resultClose)
        expect(competitionArr.length ).not.toEqual(resultClose.length)
        expect(resultClose.length).toEqual(1)
        expect(competitionArr.length).toEqual(6)
        expect(resultClose[0].id).toBe('9y2lEOx')
    } )

    it('getAllBidCount', function () {


    } )

    it('getSuccessBidCount', function () {


    } )
})