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
    }, [])


    const filterBids = props.bids.filter(item => active === item.accepted)

    const toggleBidByState = () => {
        setActive(!active)
    }

    return (
        <div>
            <h1 className="my-3">**successful** bids by ID </h1>
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
                    <th>FILTER by state TRUE <ToggleBidByStateButton handleShowTrueAll={toggleBidByState} /></th>
                    <th>Created</th>
                    <th>create date within the associated competition's id `open` and `closed` dates
</th>
                    <th>Value</th>
                    <th>bidData.offered_capacity} >= competition's `minimum_capacity</th>
                    <th>associated `seller`'s id  ==> `verified` state is true</th>
                </tr>
                </thead>
                <tbody>

                {filterBids &&
                filterBids.map((item, i) => (
                    <SingleBid key ={i}
                               index={i + 1}
                               bidData = {item } />

                ))}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bids: state.bids
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBids: () => dispatch(actions.bids.getBids()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids)
