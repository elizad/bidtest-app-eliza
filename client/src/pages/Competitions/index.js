import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap"

function sortCompetitions(competitionsArr) {
  const today = new Date();
  const pendingCompetitions = getPendingCompetitions(competitionsArr, today);
  const closedCompetitions = getClosedCompetitions(competitionsArr, today);
  const openCompetitions = getOpenCompetitions(competitionsArr, today);
  return [...pendingCompetitions, ...openCompetitions, ...closedCompetitions];
}

function getPendingCompetitions(competitionsArr, today) {

  const filterCompetitions = competitionsArr.filter(item => {
    const open = new Date(item.open);
    return open - today > 0 ? true : false;
  });
  return filterCompetitions.sort((a, b) => a.open - b.open);
}

function getClosedCompetitions(competitionsArr, today) {

  const filterCompetitions = competitionsArr.filter(item => {
    const closed = new Date(item.close);
    return today - closed > 0 ? true : false;
  });
  return filterCompetitions.sort((a, b) => a.open - b.open);
}

function getOpenCompetitions(competitionsArr, today) {

  const filterCompetitions = competitionsArr.filter(item => {
    const open = new Date(item.open);
    const closed = new Date(item.close);
    return (today - open >= 0 && closed - today >= 0) ? true : false;
  })
  return filterCompetitions.sort((a, b) => a.open - b.open);
}


const Competitions = props => {
  useEffect(() => {
    props.getCompetitions();
    props.getBids();

  }, [props]);
  const getSuccessFullBids = id => {
    let filtered = props.bids.filter(item => item.competition === id);
    let accepted = filtered.filter(item => item.accepted === true);
    return parseInt((accepted.length / filtered.length) * 100);
  };
  const getSuccessfulBidsValue = id => {
    let filtered = props.bids.filter(item => item.competition === id);
    let accepted = filtered.filter(item => item.accepted === true);
    let sum = accepted.reduce((sum, current) => {
      return sum + Number(current.value);
    }, 0)
    return sum;
  }

  const sortedCompetitopns = sortCompetitions(props.competitions)


  const getCompetitionState = (competition) => {
    const today = new Date();
    const open = new Date(competition.open);
    const closed = new Date(competition.closed);
    if (today - open >= 0 && closed - today >= 0) {
      return 'Open'
    }
    if (today > closed) {
      return 'Closed'
    }
    if (today < open) {
      return 'Pending'
    }
  }

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
            <th>State </th>
            <th>Open Date</th>
            <th>Closed Date</th>
            <th>Min Capacity</th>
            <th>Currency</th>
            <th>Successful bids</th>
            <th>Total value of bids</th>
          </tr>
        </thead>
        <tbody>
        {sortedCompetitopns && sortedCompetitopns.map((item, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.buyer}</td>
                <td> </td>
                <td>{item.open}</td>
                <td>{item.closed}</td>
                <td>{item.minimum_capacity}</td>
                <td>{item.currency}</td>
                <td>{props.bids && getSuccessFullBids(String(item.id))}</td>
                <td>{props.bids && getSuccessfulBidsValue(String(item.id))}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    bids: state.bids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompetitions: () => dispatch(actions.competitions.getCompetitions()),
    getBids: () => dispatch(actions.bids.getBids())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Competitions);
