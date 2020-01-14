import React from 'react'

// const getSuccessfulBidsValue = (bids) =>  {
//
//     const filtered = bids?bids.filter(item=>item.accepted===true):[];
//     return filtered.length
// }
//
// const getSuccessFullBids = (bids) => {
//     return bids?bids.length:0;
// }

function SingleCompetition(props) {
    const {competitionData} = props

    return (
        <tr >
            <td></td>
            <td>{competitionData.id}</td>
            <td>{competitionData.name}</td>
            <td>{competitionData.buyer}</td>
            <td>{props.competitionState}</td>
            <td>{competitionData.open}</td>
            <td>{competitionData.closed}</td>
            <td>{competitionData.minimum_capacity}</td>
            <td>{competitionData.currency}</td>
            <td>{props.getSuccessBidCount(competitionData.id)}</td>
            <td>{props.getAllBidCount(competitionData.id)}</td>
        </tr>
    )
}


export default SingleCompetition