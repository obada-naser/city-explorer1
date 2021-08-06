import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../App.css';

class FindCity extends React.Component {
  submit = (event) => {
    event.preventDefault();
    this.props.showLocation();
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Group controlId='cityName'>
          <Form.Label>Where do you want to go?</Form.Label>
          <Form.Control
            onChange={this.props.updateCity}
            type='text'
            placeholder='Enter a City'
          />
        </Form.Group>
        {this.props.hasError && (
          <>
            <strong className='mr-auto'>Error </strong>
            {this.props.errorMessage}, please try another search.
          </>
        )}
        <Button variant='primary' type='submit'>
          Explore!
        </Button>
      </Form>
    );
  }
}

export default FindCity;
