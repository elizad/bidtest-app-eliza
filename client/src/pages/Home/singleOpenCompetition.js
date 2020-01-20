import React from 'react'

function SingleOpenCompetition(props) {
    const {competitionData, index} = props
    return (
        <tr className={props.competitionState}>
            <td>{index}</td>
            <td>{competitionData.id}</td>
            <td>{competitionData.name}</td>
            <td >{props.competitionState}</td>
            <td>{competitionData.open}</td>
            <td>{competitionData.closed}</td>
            <td>{competitionData.minimum_capacity}</td>
            <td>{props.getSuccessBidCount(competitionData.id)}</td>
        </tr>
    )
}

export default SingleOpenCompetition