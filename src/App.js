

import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/css/app.css';



 class App extends React.Component {

  constructor(){
    // super(props);
    // this.state={
    //   lat:'',
    //   long:'',
    //   searchQuery:'',
    //   showMap:'false'


    }
  
    render(){
      return(
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
      )
    }
 }

export default App;
  
