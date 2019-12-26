import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import { Table } from "react-bootstrap"
const Buyers = props => {
  useEffect(() => {
    props.getBuyers();
  }, []);
  return (
    <div>
      <h1>Buyers</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.buyers &&
            props.buyers.map((item, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.id}</td>
                <td colSpan="2">{item.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    buyers: state.buyers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBuyers: () => dispatch(actions.buyers.getBuyers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buyers);
