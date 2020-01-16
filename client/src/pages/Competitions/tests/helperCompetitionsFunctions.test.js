import * as helperCompetition from '../helperCompetitionsFunctions'
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

    } );

    it('sort dates by open function', function () {
        const mockOPENDate = new Date('2020-01-02 03:32:49')
        const resultOpen = helperCompetition.getOpenCompetitions(competitionArr, mockOPENDate)
        console.log(resultOpen)
        expect(competitionArr.length ).not.toEqual(resultOpen.length)
        expect(resultOpen.length).toEqual(2)
        expect(competitionArr.length).toEqual(6)
        expect(resultOpen[0].id).toBe('0O3lDMv')
    } );

    it('sort dates by closed  function  ', function () {
        const mockOPENDate = new Date('2019-07-07 07:42:28')
        const resultClose = helperCompetition.getClosedCompetitions(competitionArr, mockOPENDate)
        console.log(resultClose)
        expect(competitionArr.length ).not.toEqual(resultClose.length)
        expect(resultClose.length).toEqual(1)
        expect(competitionArr.length).toEqual(6)
        expect(resultClose[0].id).toBe('9y2lEOx')
    } );

    it('sortCompetitions dates by most recent ', function () {
        const mockOPENDate = new Date('2020-01-14 07:42:28');
        const result = helperCompetition.sortCompetitions(competitionArr, mockOPENDate)
        console.log(result)

        expect(result[0].open).toBe('2020-02-18 05:16:28')
        expect(result[1].open).toBe('2020-01-02 03:32:49')

        expect(result[0].closed).toBe('2020-02-25 15:40:05')
        expect(result[1].closed).toBe('2020-02-12 06:36:27')
        expect(competitionArr.length).toEqual(6)

    } )
    it('getAllBidCount', function () {



    } )

    it('getSuccessBidCount', function () {


    } )
})
