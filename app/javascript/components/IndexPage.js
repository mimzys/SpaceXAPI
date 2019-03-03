import React from "react"
import PropTypes from "prop-types"
import Axios from "axios"
import LaunchesList from './LaunchesList'
import LaunchDetails from './LaunchDetails'

const styleAll = {
  fontFamily: 'Roboto, sans-serif'
}

const styleList = {
  float: 'left',
  margin: '25px',
  width: '30%'
}

const styleDetails = {
  position: 'fixed',
  left: '64%',
  padding: '25px',
  margin: '25px',
  width: '50%',
  border: '5px solid green',
  borderRadius: '10px',
  fontSize: '1.25rem',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}


class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      launches: [],
      launchListIsLoading: false,
      launchDetailsIsLoading: false,
      selected: "0"
    }
    this.selectLaunch = this.selectLaunch.bind(this)
  }

  selectLaunch(event) {
    this.setState({
      launchDetailsIsLoading: true
    })
    if (this.state.selected !== event.currentTarget.attributes.value.value) {
      this.setState({
        selected: event.currentTarget.attributes.value.value,
        launchDetailsIsLoading: false
      })
    } else {
      this.setState({
        selected: '0',
        launchDetailsIsLoading: false
      })
    }
  }

  componentDidMount() {
    this.setState({
      launchListIsLoading: true
    })
    Axios.get('https://api.spacexdata.com/v3/launches')
      .then(res => {
        this.setState( {
          launches: res.data,
          launchListIsLoading: false
        } )
      })
  }
  render () {
    let launchDetails
    if (this.state.selected !== '0') {
      launchDetails = (
        <div style={styleDetails}>
          <LaunchDetails
            launch={this.state.launches.find( launch => launch["flight_number"] == this.state.selected)}
            isLoading={this.state.launchDetailsIsLoading}
          />
        </div>
      )
    }
    return (
      <div style={styleAll}>
        <div style={styleList}>
          <h1>Space X Launches</h1>
          <LaunchesList
            launches={this.state.launches}
            isLoading={this.state.launchListIsLoading}
            onClick={this.selectLaunch}
          />
        </div>
          {launchDetails}
      </div>
    );
  }
}

export default IndexPage
