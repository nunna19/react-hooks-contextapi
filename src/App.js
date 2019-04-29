import React from 'react';
import './App.css';
import Deals from './Components/Deals.js'
import { JssProvider } from "@andywer/style-api-jss"

function App() {
  return (
    <div className="App">
    <JssProvider>
    <Deals/>
    </JssProvider>
   
    </div>
    
  );
}

export default App;


