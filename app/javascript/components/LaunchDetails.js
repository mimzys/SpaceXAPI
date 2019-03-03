import * as React from 'react'

const LaunchDetails = (props) => {
  if ( props.isLoading ) {
    return (
      <div> Loading... </div>
    )
  }
  let details
  if (props.launch) {
    if (props.launch.details) {
      details = (
        <li>Details: {props.launch.details}</li>
      )
    }
  }
  return(
    <div>
      <ul>
        {details}
        <li>Rocket Name: {props.launch.rocket.rocket_name}</li>
        <li>Fligh Number: {props.launch.flight_number}</li>
        <li>Launch Site: {props.launch.launch_site.site_name_long}</li>
        <li>Launch Year: {props.launch.launch_year}</li>
        <li><a href={props.launch.links.article_link} target="_blank">Read More</a></li>
        <li><a href={props.launch.links.video_link} target="_blank">Watch the Video</a></li>

      </ul>
    </div>
  )
}

export default LaunchDetails
