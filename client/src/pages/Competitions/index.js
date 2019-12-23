import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap";
const Competitions = props => {
  useEffect(() => {
    props.getCompetitions();
    props.getBids()
  }, [])
    const getSuccefulBids = (id) => {
        let filtered = props.bids.filter(item => item.competition == id )
        let accepted  = filtered.filter(item => item.accepted === true)
        return parseInt(filtered.length / accepted.length)
    }
  return (
    <div>
      <h1>Competitions</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>buyer</th>
            <th>open</th>
            <th>closed</th>
            <th>minimum_capacity</th>
            <th>currency</th>
            <th>successful bids</th>
          </tr>
        </thead>
        <tbody>
          {props.competitions &&
            props.competitions.map((item, i) => (
              <tr key={i}>
                  <td>{i}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.buyer}</td>
                  <td>{item.open}</td>
                  <td>{item.closed}</td>
                  <td>{item.minimum_capacity}</td>
                  <td>{item.currency}</td>
                  <td>{props.bids && getSuccefulBids(item.id)}</td>
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
