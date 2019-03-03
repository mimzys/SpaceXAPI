import * as React from 'react'
import LaunchesListItem from './LaunchesListItem'

const LaunchesList = (props) => {
  if ( props.isLoading ) {
    return (
      <div> Loading... </div>
    )
  }
  return(
    <div>
      <div>
        {
          props.launches.map((l, i) => {
            return (<LaunchesListItem key={i} launch={l} clicky={props.onClick}/>)
          })
        }
      </div>
    </div>
  )
}

export default LaunchesList
