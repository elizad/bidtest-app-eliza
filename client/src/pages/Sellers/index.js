import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { Table } from 'react-bootstrap'
import SingleSeller from "./singleSeller";
const Sellers = props => {
  useEffect(() => {
    props.getSellers()
  }, [props])
  return (
    <div>
      <h1>Sellers</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {props.sellers &&
            props.sellers.map((item, i) => (
             <SingleSeller key ={i} sellerData={item} />
            ))}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sellers: state.sellers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSellers: () => dispatch(actions.sellers.getSellers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sellers)
