import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import { Table } from "react-bootstrap"
import SingleBuyer from "./singleBuyer";
const Buyers = props => {
  useEffect(() => {
    props.getBuyers();
  }, []);
  return (
    <div>
      <h1 className="my-3">Buyers</h1>
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
                <SingleBuyer key={i}
                             index ={i+1}
                             buyerData={item} />
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
