import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Form from './Form';
import RBSelect from './RBSelect';
import ReactDOM from 'react-dom';
import './Coin.css';
var apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const x = new Boolean(false);



//const root = document.querySelector('#root');

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  let colors=["USD","EUR"];
  const [displaycolor,setcolor]=useState("USD");

  const [gender, setGender] = React.useState();
  //const [xchange, setXchange] = React.useState();
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        setcolor(target.value);
        apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency='+ displaycolor +'&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        //useEffect();
        handleSubmit();
       
        // if (gender === "$"){
        //   apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'


        // }

        // else if (gender === "€"){
        //   apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


        // }
        

      }
    };
    const handleSubmit = e => {
      // e.preventDefault();
      console.log(apiUrl);
      
    };

   
    
    
  
   


   useEffect(() => {
    axios
      .get(
        apiUrl

      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
        console.log(apiUrl)
      })
      .catch(error => console.log(error));
  }, []);

  const handleCoinChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())|
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Insert Currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleCoinChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div>
      {/* RADIO BUTTONS OPTION
      <div>
            <center>
            {/* <h1>ddd</h1>
            <h2>dff</h2>
            <hr /> * /}
            {colors.map(result=>(
                <>
            <input type="radio" value={result} name="radiovalues" checked={displaycolor===result} onChange={handleChange}/>
            <b>{"vdfer","c"}</b>
            </>



            ))

            }
            <h2>{displaycolor}</h2>
            </center>
          </div>*/}







 





















  
    
      </div>
      
      {filteredCoins.map(coin => {


        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
           currencySymbol={displaycolor}
           

          />
        );
      })}
    </div>
  );
}




export default App;