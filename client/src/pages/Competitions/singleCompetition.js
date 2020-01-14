import React, { useState, useEffect } from 'react'

function SingleCompetition(props) {
    const {competitionData} = props

    console.log(competitionData)

    return (
        <tr >
            <td>{competitionData.i}</td>
            <td>{competitionData.id}</td>
            <td>{competitionData.name}</td>
            <td>{competitionData.buyer}</td>
            <td>{competitionData.open}</td>
            <td>{competitionData.closed}</td>
            <td>{competitionData.minimum_capacity}</td>
            <td>{competitionData.currency}</td>

        </tr>
    )
}


export default SingleCompetition