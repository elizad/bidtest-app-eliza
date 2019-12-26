import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Table } from "react-bootstrap";

const TopTen = props => {
  useEffect(function() {
    props.getBuyers();
    props.getCompetitions();
  }, []);

  const filteredArray = () => {
    let newBuyers = []
    function compare(a, b) {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1
      }
      return 0
    }

    props.buyers.map(item => {
      let length = props.competitions.filter(comp => comp.buyer === item.id).length
      item.count = length
      newBuyers.push(item)
    })

    newBuyers.sort(compare)
    let filterArray = []
    const push = item => {
      filterArray.push(item)
      return item
    }
    newBuyers.filter(item =>
      filterArray.some(top => top.id === item.id) ? null : push(item)
    )
    return filterArray.slice(0, 10)
  };

  return (
    <div>
      <h1> Top Ten </h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> # </th>
            <th> ID </th>
            <th> Name </th>
            <th> Count </th>
          </tr>
        </thead>
        <tbody>
          {props.buyers &&
            props.competitions &&
            filteredArray().map((item, i) => (
              <tr key={i}>
                <td> {i + 1} </td>
                <td> {item.id} </td>
                <td> {item.name} </td>
                <td> {item.count} </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    buyers: state.buyers,
    competitions: state.competitions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBuyers: () => dispatch(actions.buyers.getBuyers()),
    getCompetitions: () => dispatch(actions.competitions.getCompetitions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTen);
