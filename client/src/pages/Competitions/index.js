import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { Table } from 'react-bootstrap'
import SingleCompetition from './singleCompetition'
import {
  sortCompetitions,
  getAllBidCount,
  getSuccessBidCount,
  getCompetitionState,
  getPendingCompetitions, getClosedCompetitions, getOpenCompetitions,
} from './helperCompetitionsFunctions'

let today = new Date()
const sorting = {
  all: sortCompetitions,
  pending: getPendingCompetitions,
  open: getOpenCompetitions,
  close: getClosedCompetitions,
}


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}


const Competitions = props => {
  const [sortingState, setSort] = useState('all')
  useEffect(() => {
    props.getCompetitions()
    props.getBids()
  }, [props])

  const sortedCompetitions = sorting[sortingState]
      ? sorting[sortingState](props.competitions, today)
      : props.competitions

  return (
    <div>
      <h1 className="my-3"> **closed** competitions</h1>
      <FlavorForm />,
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Buyer</th>
            <th>State
              <select value={sortingState} id ="selectO" onChange={(e) => setSort(e.target.value)} >
                <option value="all"> all </option>
                <option value="pending"> pending</option>
                <option value="open"> open</option>
                <option value="close"> close </option>
            </select>
            </th>
            <th>Open Date</th>
            <th>Closed Date</th>
            <th>Min Capacity</th>
            <th>Currency</th>
            <th>total value of Successful bids in the competition</th>
            <th>Total volume `offered_capacity` for successful bids</th>
          </tr>
        </thead>
        <tbody>
        {sortedCompetitions && sortedCompetitions.map((item, i) => (
            <SingleCompetition key={i}
                               index={i + 1}
                               competitionData = {item }
                               competitionState={getCompetitionState(item)}
                               getAllBidCount={(bidId) => getAllBidCount(props.bids, bidId)}
                               getSuccessBidCount={(bidId) => getSuccessBidCount(props.bids, bidId)} />
            ))}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    competitions: state.competitions,
    bids: state.bids,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCompetitions: () => dispatch(actions.competitions.getCompetitions()),
    getBids: () => dispatch(actions.bids.getBids()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitions)
