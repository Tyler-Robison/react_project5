import React from "react";
import "./App.css";
import Carousel from "./Carousel";
import CoinContainer from "./CoinContainer";

function App() {
  return (
    <div className="App">
      <Carousel />
      <CoinContainer 
      numCoins={6}
      />
    </div>
  );
}

export default App;
