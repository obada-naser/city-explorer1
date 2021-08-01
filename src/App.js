

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';




class App extends React.Component {

  constructor(props){
    super(props);
     this.state={
       displayingName:' ',
       long:' ',
       lat:' ',
       showingMap:false,
       showError:false,
       disMsg:'API is not responding'
       
       
       



     }
  }


  gettingLocation=async(event) => {
    event.preventDefault();
    let findingLocation=event.target.myCity.value;
    let key='pk.028ecdc66354bb03aaacd741894ddb90';
    let url=` https://eu1.locationiq.com/v1/search.php?key=${key}&q=${findingLocation}&format=json`;

try{
    let gettingResult= await axios.get(url);

    this.setState({
      displayingName: gettingResult.data[0].display_name,
      long:gettingResult.data[0].lon,
      lat:gettingResult.data[0].lat,
      showingMap:true,
    })
    }
  catch{
    
    this.setState({
      showError:true,
      showingMap:false

     
    })


    }


   

  
  }




  render() {
    return (
      <>

      <h1>Finding my City</h1>

      <Form onSubmit={this.gettingLocation}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter a City:</Form.Label>
          <Form.Control type="text" placeholder="city" name='myCity'/>
          </Form.Group>
          <Button variant="primary" type="submit">
          Explore
        </Button>
        <p> {this.state.displayingName} </p>
       
  

        {
          this.state.showingMap && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.028ecdc66354bb03aaacd741894ddb90&center=${this.state.lat},${this.state.long}&zoom=22px&`} alt="map"/>
        }
    {/* size=10%x5%& */}
        {
          this.state.showError &&  this.state.disMsg
        }
        

      </Form>
      </>
    )



  }
}



export default App;
