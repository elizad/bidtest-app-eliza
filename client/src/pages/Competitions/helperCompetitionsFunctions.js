


export function sortCompetitions(competitionsArr) {
    let today = new Date();
    const pendingCompetitions = getPendingCompetitions(competitionsArr, today);
    const closedCompetitions = getClosedCompetitions(competitionsArr, today);
    const openCompetitions = getOpenCompetitions(competitionsArr, today);
    return [...pendingCompetitions, ...openCompetitions, ...closedCompetitions];
}

export function getPendingCompetitions(competitionsArr, today) {

    const filterCompetitions = competitionsArr.filter(item => {
        const open = new Date(item.open);
        return open - today > 0 ? true : false;
    });

    return filterCompetitions.sort((a, b) => new Date(b.open) - new Date(a.open));
}

export function getClosedCompetitions(competitionsArr, today) {

    const filterCompetitions = competitionsArr.filter(item => {
        const closed = new Date(item.closed);
        return today - closed > 0 ? true : false;
    });
    return filterCompetitions.sort((a, b) => new Date(b.open) - new Date(a.open));
}

export function getOpenCompetitions(competitionsArr, today) {

    const filterCompetitions = competitionsArr.filter(item => {
        const open = new Date(item.open);
        const closed = new Date(item.closed);
        // console.log (today - open === 0 && closed - today  : false;)
        return (today - open >= 0 && closed - today > 0) ? true : false;

    })
    return filterCompetitions.sort((a, b) => new Date(b.open) - new Date(a.open));
}

export const getCompetitionState = (competition) => {
    const today = new Date();
    const open = new Date(competition.open);
    const closed = new Date(competition.closed);

    if (today - open >= 0 && closed - today >= 0) {
        return 'Open'
    }
    if (today > closed) {
        return 'Closed'
    }
    if (today < open) {
        return 'Pending'
    }
}


export const getAllBidCount = (bids, id) => {
    let filtered = bids.filter(item => item.competition === id)
    let accepted = filtered.filter(item => item.accepted === true)
    return parseInt((accepted.length / filtered.length) * 100)
}


export const getSuccessBidCount = (bids, id) => {
    let filtered = bids.filter(item => item.competition === id)
    let accepted = filtered.filter(item => item.accepted === true)
    let sum = accepted.reduce((sum, current) => {
        return sum + Number(current.value)
    }, 0)
    return sum
}






