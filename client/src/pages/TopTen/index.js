import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { Table } from 'react-bootstrap'
import SingleTopTen from './singleTopTen'
import {compare, filteredArray } from './helperTopTenFunctions'

const TopTen = props => {
  useEffect(function () {
    props.getBuyers()
    props.getCompetitions()
  }, [props])

  return (
      <div>
        <h1 className="my-3"> Top Ten </h1>
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
          filteredArray(props.competitions, props.buyers).map((item, i) => (
              <SingleTopTen key={i}
                            index={i+1}
                            toptenData={item} />
          ))}
          </tbody>
        </Table>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    buyers: state.buyers,
    competitions: state.competitions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBuyers: () => dispatch(actions.buyers.getBuyers()),
    getCompetitions: () => dispatch(actions.competitions.getCompetitions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTen)
