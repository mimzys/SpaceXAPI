import * as React from 'react'

const style = {
  marginTop: '.5rem',
  border: '5px solid green',
  borderRadius: '10px',
  textAlign: 'center',
  marginTop: '25px',
  padding: '25px',
  minWidth: '100px',
  fontSize: '1.5rem'
}

const LaunchesListItem = (props) => {
  return(
    <div style={style} onClick={props.clicky} value={props.launch.flight_number}>
      <div width="40%">
        <img width="100px" src={props.launch.links.mission_patch}/>
        {"  " + props.launch.mission_name}
      </div>
    </div>
  )
}

export default LaunchesListItem
