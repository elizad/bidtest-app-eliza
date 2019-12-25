import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap";

let TopTen;
TopTen = props => {
  useEffect(function () {
    const arr1 = props.getBuyers();
    const arr2 = props.getCompetitions();
  }, []);

  const filteredArray = () => {
    let newBuyers = [];

    function compare(a, b) {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1;
      }
      return 0;
    }

    props.buyers.map(item => {
      let length = props.competitions.filter(comp => (comp.buyer = item.id)).length
      console.log("l" + length);
      item.count = length;
      newBuyers.push(item);
    });

    newBuyers.sort(compare);
    return newBuyers.slice(0, 10);
  };

  return (
      <div>
      <h1> Top Ten </h1>
          <Table striped bordered hover size = "sm" >
      <thead>
      <tr>
        <th> # </th>
        <th> ID </th>
        <th> Name </th>
        <th> Count </th>
      </tr>
      </thead>
      <tbody>
      {
        props.buyers &&
            props.competitions &&
            filteredArray().map((item, i) => (
        <tr key = {i}>
          <td> {i+1} </td>
          <td> {item.id} </td>
          <td> {item.name} </td>
          <td> {item.count} </td>
        </tr>
      ))
      }
      </tbody>
  </Table>
  </div>
)
  ;
};

const mapStateToProps = state => {
  return {
    buyers: state.buyers,
    competitions: state.competitions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBuyers: () => dispatch(actions.buyers.getBuyers()),
    getCompetitions: () => dispatch(actions.competitions.getCompetitions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTen);
