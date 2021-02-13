import React, { useState, useEffect } from 'react';
import { Card, Navbar } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment'
import './App.css';

function App() {
  // bitCoin amount
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");

  const handleAmount = (event) => {
    setAmount(event.target.value);
  }

  useEffect(()=>{
    async function result() {
      await axios({
        method: "get",
        url: "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=U3HPNCLSBK8SO87H"
      }).then((data)=>{
        // console .log(data.data["Realtime Currency Exchange Rate"]);
        setRate(data.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      }).catch((err)=>console.log(err));
    }
    result();
  },[])

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
              <input className="rate" value={amount} placeholder="1" onChange={handleAmount}></input>
            </div>
            
          </div>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <label className="currency">USD($)</label>
            </div>
            <div className="col-md-4">
              {/* update USD according to the amount of Bitcoin*/}
              {amount ? parseInt(amount) ? <input className="rate" type="text" value={parseInt(amount) * parseFloat(rate)} disabled></input>
                : <input className="rate" value={parseFloat(rate)} disabled></input>
                : <input className="rate" value={parseFloat(rate)} disabled></input>}
              
            </div>
            
          </div>
        </Card.Body>
        
  <Card.Footer>Date: {moment().format("DD/MM/YYYY")}</Card.Footer>
      </Card>
      
    </div>
  );
}

export default App;
