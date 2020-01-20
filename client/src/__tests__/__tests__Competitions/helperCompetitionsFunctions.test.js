import * as helperCompetition from '../../pages/Competitions/helperCompetitionsFunctions'
import competitionArr from './mockCompetions'
import mockBids from '../__tests__Bids/mockBids'

describe('helper getPendingCompetitions from helper functions', function () {

    // at least here to get smth good of this challenge may I know what I am missing please sire
    it('sort dates by most recent', function () {
        const mockOPENDate = new Date('2019-01-12 05:45:20')
        const result = helperCompetition.getPendingCompetitions(competitionArr, mockOPENDate)
        expect(competitionArr.length ).not.toEqual(result.length)
        expect(result.length).toEqual(5)
        expect(competitionArr.length).toEqual(6)
        expect(result[0].id).toBe('aO8l7OX')

    } )

    it('sort dates by open function', function () {
        const mockOPENDate = new Date('2020-01-02 03:32:49')
        const resultOpen = helperCompetition.getOpenCompetitions(competitionArr, mockOPENDate)
        expect(competitionArr.length ).not.toEqual(resultOpen.length)
        expect(resultOpen.length).toEqual(2)
        expect(competitionArr.length).toEqual(6)
        expect(resultOpen[0].id).toBe('0O3lDMv')
    } )

    it('sort dates by closed  function  ', function () {
        const mockOPENDate = new Date('2019-07-07 07:42:28')
        const resultClose = helperCompetition.getClosedCompetitions(competitionArr, mockOPENDate)
        expect(competitionArr.length ).not.toEqual(resultClose.length)
        expect(resultClose.length).toEqual(1)
        expect(competitionArr.length).toEqual(6)
        expect(resultClose[0].id).toBe('9y2lEOx')
    } )

    it('sortCompetitions dates by most recent ', function () {
        const mockOPENDate = new Date('2020-01-14 07:42:28')
        const result = helperCompetition.sortCompetitions(competitionArr, mockOPENDate)
        expect(result[0].open).toBe('2020-02-18 05:16:28')
        expect(result[1].open).toBe('2020-01-02 03:32:49')
        expect(result[0].closed).toBe('2020-02-25 15:40:05')
        expect(result[1].closed).toBe('2020-02-12 06:36:27')
        expect(competitionArr.length).toEqual(6)

    } )

    it('getCompetitionState', function () {
        const mockPENDINGDate = new Date('2020-01-01 05:16:28');
        const mockOPENDate = new Date('2020-01-20 03:32:4');
        const mockCLOSEDate = new Date('2020-02-26 07:42:28');

        const resultP = helperCompetition.getCompetitionState(competitionArr[0], mockPENDINGDate)
        expect(resultP).toBe('Pending')
        const resultO = helperCompetition.getCompetitionState(competitionArr[0], mockOPENDate)
        expect(resultO).toBe('Open')
        const resultC = helperCompetition.getCompetitionState(competitionArr[0], mockCLOSEDate)
        expect(resultC).toBe('Closed')

    })

    it('getAllBidCount', function () {

        const result = helperCompetition.getAllBidCount(mockBids, 'KyjgWVr')
        expect(result).toEqual(0)
        const resultnan = helperCompetition.getAllBidCount(mockBids, 'KyWVr')
        expect(resultnan).toEqual(0)


    } )

    it('getSuccessBidCount', function () {
        const result = helperCompetition.getSuccessBidCount(mockBids, 'jMNEjO5')
        expect(result).toEqual(788.32)
        const resultzero = helperCompetition.getSuccessBidCount(mockBids, 'lVGzoy2')
        expect(resultzero).toEqual(0)

    } )
})
