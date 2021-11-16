import React from 'react';
import './Coin.css';
//import Form from './Form';
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  currencySymbol
  
  
}) => {

  
   const root = document.querySelector('#root');
   //  ReactDOM.render(<Form />, root );
  return (

<div>
    
    
    
    
    <div className='coin-container'>

      
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>{currencySymbol+" "}{price}</p>
          <p className='coin-volume'>{currencySymbol+" "}{volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: {currencySymbol+" "}{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Coin;