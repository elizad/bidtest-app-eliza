import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap"
import SingleCompetition from "./singleCompetition";
import {
  sortCompetitions,
  getAllBidCount,
  getSuccessBidCount,
  getCompetitionState,
  getPendingCompetitions, getClosedCompetitions, getOpenCompetitions
} from "./helperCompetitionsFunctions"

let today = new Date();
const sorting = {
  pending: getPendingCompetitions,
  open: getOpenCompetitions,
  close: getClosedCompetitions
}

const Competitions = props => {
  const [sortingState, setSort] = useState('pending');
  useEffect(() => {
    props.getCompetitions();
    props.getBids();

  }, [props]);

  const sortedCompetitions = sorting[sortingState]
      ? sorting[sortingState](props.competitions, today)
      : props.competitions

  return (
    <div>
      <h1 className="my-3">Competitions</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Buyer</th>
            <th>State
              <select value={sortingState} id ="selectO" onChange={(e) => setSort(e.target.value)} >
              <option value='all' > all </option>
              <option value='pending' > pending</option>
              <option value='open' > open</option>
              <option value='close'> close </option>
            </select>
            </th>
            <th>Open Date</th>
            <th>Closed Date</th>
            <th>Min Capacity</th>
            <th>Currency</th>
            <th>Successful bids</th>
            <th>Total value of bids</th>
          </tr>
        </thead>
        <tbody>
        {/*{props.competitions &&*/}
        {/*props.competitions.map((item, i) => (*/}
        {sortedCompetitions && sortedCompetitions.map((item, i) => (


            <SingleCompetition key={i} competitionData = {item } competitionState={getCompetitionState(item)} getAllBidCount={(bidId) => getAllBidCount(props.bids, bidId)}
                               getSuccessBidCount={(bidId) => getSuccessBidCount(props.bids, bidId)} />
            ))}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    bids: state.bids
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCompetitions: () => dispatch(actions.competitions.getCompetitions()),
    getBids: () => dispatch(actions.bids.getBids())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);
