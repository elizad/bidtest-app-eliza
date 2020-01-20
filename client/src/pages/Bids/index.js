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
        props.getSellers()
        props.getCompetitions()
    }, [])

    const filterBids = props.bids.filter(bid =>{
        const matchedSeller = props.sellers.filter(seller=>seller.id===bid.seller&&seller.verified)[0]
        const active = bid.accepted;
        const matchedCompetition = props.competitions.filter(c=>c.id===bid.competition)[0];
        let bidCapacityCondition = true
        let associatedDateCondition = true
        if (matchedCompetition) {
            bidCapacityCondition = bid.offered_capacity >= matchedCompetition.minimum_capacity;
            const bidDate = new Date(bid.created);
            const openDate = new Date(matchedCompetition.open);
            const closedDate = new Date(matchedCompetition.closed);
            associatedDateCondition = bidDate > openDate && bidDate <=closedDate;
        }

        return matchedSeller && active && bidCapacityCondition && associatedDateCondition;
    })

    const toggleBidByState = () => {
        setActive(!active)
    }
    console.info('============>compensations', props.compensations)
    const getVerifiedSeller = props.bids.filter(bid =>{
        const matchedSeller = props.sellers.filter(seller=>seller.id===bid.seller&&seller.verified)[0]
        // const matchbidData = props.bids.offered_capacity >= competitions.minimum_capacity
        const active = bid.accepted;
        return matchedSeller && active;
    })

    return (
        <div>
            <h1 className="my-3">Successful bids </h1>
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
                    <th> Created</th>
                    <th>FILTER by state TRUE </th>
                    <th>Competition id</th>
                    <th>Value</th>
                    <th>offered_capacity >= competition's `minimum_capacity</th>
                    <th>associated seller's id  => `verified` state === true</th>
                </tr>
                </thead>
                <tbody>

                {filterBids &&
                filterBids.map((item, i) => (
                    <SingleBid key ={i}
                               index={i + 1}
                               bidData = {item }
                               />



                ))}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bids: state.bids,
        sellers: state.sellers,
        competitions: state.competitions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBids: () => dispatch(actions.bids.getBids()),
        getSellers: () => dispatch(actions.sellers.getSellers()),
        getCompetitions: () => dispatch(actions.competitions.getCompetitions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids)
