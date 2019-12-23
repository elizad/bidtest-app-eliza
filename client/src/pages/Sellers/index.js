import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap";
const Sellers = props => {
  useEffect(() => {
    props.getSellers();
  }, []);
  return (
    <div>
      <h1>Sellers</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.sellers &&
            props.sellers.map((item, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.id}</td>
                <td colSpan="2">{item.name}</td>
                <td>{item.verified ? "True" : "False"}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sellers: state.sellers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSellers: () => dispatch(actions.sellers.getSellers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sellers);
