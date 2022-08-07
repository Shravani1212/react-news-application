import React from 'react';
import Dashboad from './Components/dashboad/Dashboad';
import './App.css';
// import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
   <Header />
   <div className="container my-3">
     <h2>Latest News</h2>
      <Dashboad />
   </div>
    </div>
   
  }
}
export default App;
