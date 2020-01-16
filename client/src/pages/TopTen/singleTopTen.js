import React from 'react'


function SingleTopTen(props) {
    const {toptenData, index} = props
    return(
        <tr>
            <td> {index} </td>
            <td> {toptenData.id} </td>
            <td> {toptenData.name} </td>
            <td> {toptenData.count} </td>
        </tr>
    )

}

export default SingleTopTen