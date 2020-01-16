import React from 'react'

function SingleSeller(props) {
    const {sellerData, index} = props
    return(
        <tr>
            <td>{index}</td>
            <td>{sellerData.id}</td>
            <td>{sellerData.name}</td>
            <td>{sellerData.verified ? 'True' : 'False'}</td>
        </tr>
    )

}

export default SingleSeller