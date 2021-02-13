import React, { useState, useEffect } from 'react';
import { Card, Navbar } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

function App() {
  const [amount, setAmount] = useState("");
  const rate = 4;

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Exchange Rate</Navbar.Brand>
      </Navbar>
      <Card className="card">
        <div className="row">
          <label className="currency">BitCoin</label>
          <input className="rate" type="text" value={amount} placeholder="1"></input>
        </div>
        <div className="row">
          <label className="currency">USD</label>
          <input className="rate" type="text" value={parseInt(amount) * rate} disabled></input>
        </div>
        <Card.Footer>date</Card.Footer>
      </Card>
      
    </div>
  );
}

export default App;
