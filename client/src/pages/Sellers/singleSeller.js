import React from 'react'


function SingleSeller(props) {
    const {sellerData} = props
    return(
        <tr >
            <td>{sellerData.i}</td>
            <td>{sellerData.id}</td>
            <td >{sellerData.name}</td>
            <td>{sellerData.verified ? 'True' : 'False'}</td>
        </tr>
    )

}

export default SingleSeller