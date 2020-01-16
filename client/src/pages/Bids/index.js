import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { Table } from 'react-bootstrap'
import {returnTotal,returnTotalCapacity} from './helperBidsFunctions'
import SingleBid from './singleBid'
import ToggleBidByStateButton from './toggleBidByStateButton/toggleBidByStateButton'



const Bids = props => {
    let [active, setActive] = useState(false)
    useEffect(() => {
        props.getBids()
    }, [props])

    const filterBids = props.bids.filter(item=>{
        if (active) {return item.accepted === true} else {return item.accepted!== true}
    })

    const toggleBidByState = () => {
        setActive(!active)
    }

    return (
        <div>
            <h1 className="my-3">Bids </h1>
            <div className="my-3">Total Value of Accepted Bids {'  '}
                {props.bids.length!==0 && returnTotal(props.bids)}
            </div>
            <div className="my-3">Total Offered Capacity of Accepted Bids {'  '}
                {props.bids.length!==0 && returnTotalCapacity(props.bids)}
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Created</th>
                    <th> <ToggleBidByStateButton handleShowTrueAll={toggleBidByState} /> </th>
                    <th>Competition</th>
                    <th>Value</th>
                    <th>Offered Capacity</th>
                </tr>
                </thead>
                <tbody>

                {filterBids &&
                filterBids.map((item, i) => (
                    <SingleBid key ={i} bidData = {item } />

                ))}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bids: state.bids,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBids: () => dispatch(actions.bids.getBids()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids)
