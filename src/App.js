import React, { Component } from 'react';
import Header from './inc/header.js'
import Footer from './inc/footer.js'
import Quickmenu from './inc/quickmenu.js'
import IngList from './inc/ingList.js'

class App extends Component{
  render(){
    return (
      <div className="wrap">
        <Header/>
        <div className="container" id="container">

        </div>
        <Footer/>
        <Quickmenu/>
        <IngList/>
      </div>
    );
  }
}

export default App;
