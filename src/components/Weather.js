import React from 'react';

class Weather extends React.Component {
  render() {
    return this.props.weather.map((day) => (
      <>
        <p>day: {day.date}</p>
        <p>description: {day.description}</p>
      </>
    ));
  }
}

export default Weather;
