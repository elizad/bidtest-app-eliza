import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap";
const Bids = props => {
  useEffect(() => {
    props.getBids();
  }, [])
    const returnTotal = () => {
        let filtered = props.bids.filter(item => item.accepted == true)
        var res = filtered.length!== 0 && filtered.reduce((sum, current) => { return sum + Number(current.value)}, 0)
        console.log(filtered);
        return res
    }
    const returnTotalCapacity = () => {
        let filtered = props.bids.filter(item => item.accepted == true)
        var res = filtered.length!== 0 && filtered.reduce((sum, current) => { return sum + Number(current.offered_capacity)}, 0)
        console.log(filtered);
        return res
    }
  return (
    <div>
      <h1>Bids</h1>
      <div className="my-3">Total Value of Accepted Bids {"  "}
            {props.bids.length!==0 && returnTotal()}
        </div>
        <div className="my-3">Total Offered Capacity of Accepted Bids {"  "}
            {props.bids.length!==0 && returnTotalCapacity()}
        </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Created</th>
            <th>Accepted</th>
            <th>Competition</th>
            <th>Value</th>
            <th>Offered Capacity</th>
          </tr>
        </thead>
        <tbody>
          {props.bids &&
            props.bids.map((item, i) => (
              <tr key={i}>
                  <td>{i}</td>
                  <td>{item.id}</td>
                  <td>{item.created}</td>
                  <td>{item.accepted===true  ? "True" : item.accepted===null ? "null" : "False"}</td>
                  <td>{item.competition}</td>
                  <td>{item.value}</td>
                  <td>{item.offered_capacity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bids: state.bids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBids: () => dispatch(actions.bids.getBids())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bids);
