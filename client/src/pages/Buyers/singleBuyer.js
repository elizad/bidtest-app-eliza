import React, { useState, useEffect } from 'react'

function SingleBuyer(props) {
    const {buyerData, index} = props

    return (
        <tr>
            <td>{index}</td>
            <td>{buyerData.id}</td>
            <td>{buyerData.name}</td>
        </tr>
    )
}

export default SingleBuyer