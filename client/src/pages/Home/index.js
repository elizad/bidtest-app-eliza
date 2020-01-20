import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { Table } from 'react-bootstrap'
import SingleOpenCompetition from './singleOpenCompetition'
import SingleClosedCompetition from "./singleClosedCompetition";
import {
  sortCompetitions,
  sortOpenCompetitions,
  sortClosedCompetitions,
  getAllBidCount,
  getSuccessBidCount,
  getCompetitionState,
  getPendingCompetitions, getClosedCompetitions, getOpenCompetitions,
} from './helperHomeFunctions'



class selectCompetitionState extends React.Component {
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
    event.preventDefault()
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            State
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="all">ALL</option>
              <option value="pending">PENDING</option>
              <option value="open">OPEN</option>
              <option value="close">CLOSE</option>
            </select>
          </label>

        </form>
    );
  }
}


const Home = props => {
  // const [sortingState, setSort] = useState('all')

  useEffect(() => {
    props.getCompetitions()
    props.getBids()
  }, [])


  const sortedOpenCompetitons = sortOpenCompetitions(props.competitions)
  const sortedClosedCompetitions = sortClosedCompetitions(props.competitions)

  return (
      <div className="main">
        <div>
          <h1 className="my-3"> Open competitions</h1>

          <Table striped bordered hover size="sm">
            <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th> State</th>
              <th>Open Date</th>
              <th>Closed Date</th>
              <th>Min Capacity</th>
              <th>Successful Bid</th>

            </tr>
            </thead>
            <tbody>
            {sortedOpenCompetitons && sortedOpenCompetitons.map((item, i) => (
                <SingleOpenCompetition key={i}
                                       index={i + 1}
                                       competitionData = {item }
                                       competitionState={getCompetitionState(item)}
                                       getSuccessBidCount={(bidId) => getSuccessBidCount(props.bids, bidId)}

                />
            ))}
            </tbody>
          </Table>
        </div>

        <div>
          <h1 className="my-3"> **closed** competitions</h1>

          <Table striped bordered hover size="sm">
            <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th><b>Name</b></th>
              <th><b>Buyer</b></th>
              <th> State</th>
              <th>Open Date</th>
              <th>Closed Date</th>
              <th>Min Capacity</th>
              <th><b>Total value of Successful bids </b></th>
              <th><b>Total volume  for successful bids</b></th>
            </tr>
            </thead>
            <tbody>
            {sortedClosedCompetitions && sortedClosedCompetitions.map((item, i) => (
                <SingleClosedCompetition key={i}
                                         index={i + 1}
                                         competitionData = {item }
                                         competitionState={getCompetitionState(item)}
                                         getAllBidCount={(bidId) => getAllBidCount(props.bids, bidId)}
                                         getSuccessBidCount={(bidId) => getSuccessBidCount(props.bids, bidId)} />
            ))}
            </tbody>
          </Table>
        </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
