import React, { useState, useEffect } from 'react';
import { Card, Navbar } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment'
import './App.css';

function App() {
  const [amount, setAmount] = useState("");
  const rate = 4;

  return (
    <div>
      <Navbar className="bg-dark justify-content-center" variant="dark">
        <Navbar.Brand>Exchange Rate</Navbar.Brand>
      </Navbar>
      <Card className="card">
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <label className="currency">BitCoin</label>
            </div>
            <div className="col-md-4">
              <input className="rate" type="text" value={amount} placeholder="1"></input>
            </div>
            
          </div>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <label className="currency">USD</label>
            </div>
            <div className="col-md-4">
              <input className="rate" type="text" value={parseInt(amount) * rate} disabled></input>
            </div>
            
          </div>
        </Card.Body>
        
  <Card.Footer>Date: {moment().format("DD/MM/YYYY")}</Card.Footer>
      </Card>
      
    </div>
  );
}

export default App;
