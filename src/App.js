import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
//import Form from './Form';
import ReactDOM from 'react-dom';
import './Coin.css';



const root = document.querySelector('#root');

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const Form = props => {
    const [gender, setGender] = React.useState();
    
    
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        setGender(target.value);
      }
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(gender);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="radio" value="male" checked={gender === 'male'} 
                   onChange={handleChange} />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" value="female" checked={gender === 'female'} 
                   onChange={handleChange} />
            <span>Female</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      
  
      
    );
    
  };

  

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())|
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Input Currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div>
      <Form></Form>
    
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
            currencySymbol={"F"}
           

          />
        );
      })}
    </div>
  );
}




export default App;