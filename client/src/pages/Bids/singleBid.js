import React, { useState, useEffect } from 'react'


function SingleBid(props) {
    const {bidData} = props;
    return (
        <tr>
            <td>{bidData.i}</td>
            <td>{bidData.id}</td>
            <td>{bidData.created}</td>
            <td>{bidData.accepted===true ? 'True' : bidData.accepted===null ? 'null' : 'False'}</td>
            <td>{bidData.competition}</td>
            <td>{bidData.value}</td>
            <td>{bidData.offered_capacity}</td>
        </tr>
    )
}

export  default  SingleBid