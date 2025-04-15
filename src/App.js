import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { translations } from './translations';
import './styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function App() {
  const [fromCurrency,setFromCurrency]=useState('USD');
  const [toCurrency,setToCurrency]=useState('EUR');
  const [amount,setAmount]=useState(1);
  const [exchangeRate,setExchangeRate]=useState(null);
  const [lastUpdated,setLastUpdated]=useState('');
  const [selectedDate,setSelectedDate]=useState(new Date().toISOString().split('T')[0]);
  const [historicalRates,setHistoricalRates]=useState([]);
  const [fromInput,setFromInput]=useState('USD');
  const [toInput,setToInput]=useState('EUR');
  const [showFromDropdown,setShowFromDropdown]=useState(false);
  const [showToDropdown,setShowToDropdown]=useState(false);
  const [currentLanguage,setCurrentLanguage]=useState('en');
  const [currencyRates,setCurrencyRates]=useState({});
  const t=translations[currentLanguage];
  const currencies=[
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD',
    'AED', 'INR', 'SGD', 'MXN', 'BRL'
  ];//Currencies of Popluar Currencies
  const fromDropdownRef=useRef(null);
  const toDropdownRef=useRef(null);
  const handleExchange=()=>{
    const tempCurrency=fromCurrency;
    const tempInput=fromInput;
    setFromCurrency(toCurrency);
    setFromInput(toCurrency);
    setToCurrency(tempCurrency);
    setToInput(tempInput);
  };//Handle the Exchange Function of Button: Swap types and input of currencies
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (fromDropdownRef.current&&!fromDropdownRef.current.contains(event.target)) {
        setShowFromDropdown(false);
      }
      if (toDropdownRef.current&&!toDropdownRef.current.contains(event.target)) {
        setShowToDropdown(false);
      }
    };
    document.addEventListener('mousedown',handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside);
    };
  }, []);//Hanle the event of dropdown
  useEffect(()=>{
    fetchExchangeRate();
    fetchHistoricalRates();
    fetchAllRates();
  }, [fromCurrency,toCurrency,selectedDate]);//Update all exchangerates when user change input
  const fetchAllRates=async()=>{
    try{
      const response=await fetch(`https://v6.exchangerate-api.com/v6/f74f34edf584668426ca1f2e/latest/USD`);
      const data=await response.json();
      setCurrencyRates(data.conversion_rates);
    }catch(error){
      console.error('Error fetching all rates:',error);
    }
  };
  const fetchExchangeRate=async()=>{
    try{
      const response=await fetch(`https://v6.exchangerate-api.com/v6/f74f34edf584668426ca1f2e/latest/${fromCurrency}`);//Fetch API
      const data=await response.json();//Get data from API
      setExchangeRate(data.conversion_rates[toCurrency]);//Get the ExchangeRate from API data
      setLastUpdated(new Date().toLocaleString());//Get the updateTime which is local time
    }catch(error){
      console.error('Error fetching exchange rate:',error);
    }
  };//Get the ExchangeReate that we need
  const fetchHistoricalRates=async()=>{
    try{
      const dates=[];
      const rates=[];
      const endDate=new Date();
      const startDate=new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      for (let d=startDate;d<=endDate;d.setDate(d.getDate()+5)) {
        const dateStr=d.toISOString().split('T')[0];
        const response=await fetch(`https://v6.exchangerate-api.com/v6/f74f34edf584668426ca1f2e/latest/${fromCurrency}`);
        const data=await response.json();
        dates.push(dateStr);
        rates.push(data.conversion_rates[toCurrency]);
      }
      setHistoricalRates({
        labels:dates,
        datasets:[
          {
            label:`${fromCurrency} to ${toCurrency}`,
            data:rates,
            fill:false,
            borderColor:'rgb(75, 192, 192)',
            tension:0.1
          }
        ]
      });
    }catch(error){
      console.error('Error fetching historical rates:', error);
    }
  };//Fecth the historicalrates
  const convertAmount=()=>{
    if(exchangeRate === null) return '';
    return (amount * exchangeRate).toFixed(2);
  };//The result after exchange
  const handleFromInputChange=(e)=>{
    const value=e.target.value.toUpperCase();
    setFromInput(value);
    setShowFromDropdown(true);
    const matchedCurrencies = currencies.filter(currency =>
      currency.toUpperCase().includes(value)
    );
    if(matchedCurrencies.length>0){
      setFromCurrency(matchedCurrencies[0]);
    }
  };//Handle the inputchange of start currrency
  const handleToInputChange=(e)=>{
    const value=e.target.value.toUpperCase();
    setToInput(value);
    setShowToDropdown(true);
    const matchedCurrencies=currencies.filter(currency =>
      currency.toUpperCase().includes(value)
    );
    if (matchedCurrencies.length>0) {
      setToCurrency(matchedCurrencies[0]);
    }
  };//Handle the outputchange of start currrency
  const handleFromCurrencySelect=(currency)=>{
    setFromCurrency(currency);
    setFromInput(currency);
    setShowFromDropdown(false);
  };//Handle the select of user's start currency
  const handleToCurrencySelect=(currency)=>{
    setToCurrency(currency);
    setToInput(currency);
    setShowToDropdown(false);
  };//Handle the select of user's exchange currency
  const handleAmountChange=(e)=>{
    setAmount(e.target.value);
  };//Handle the amount change of fromCurrency
  const handleDateChange=(e)=>{
    setSelectedDate(e.target.value);
  };//Handle the dataSelection change
  const filteredFromCurrencies=currencies.filter(currency =>
    currency.toUpperCase().includes(fromInput.toUpperCase())
  );
  const filteredToCurrencies=currencies.filter(currency =>
    currency.toUpperCase().includes(toInput.toUpperCase())
  );
  //Filted the matched currency of fromcurrency and tocurrecny
  const LanguageSelector=()=>(
    <div className="language-selector">
      {Object.keys(translations).map((lang)=>(
        <button
          key={lang}
          className={`language-button ${currentLanguage === lang ? 'active' : ''}`}
          onClick={()=>setCurrentLanguage(lang)}
        >
          {translations[lang].languages[lang]}
        </button>
      ))}
    </div>
  );//The LanguageChange function and LanguageChange Component
  const chartOptions={
    responsive:true,
    plugins:{
      legend:{
        position:'top',
      },
      title:{
        display:true,
        text:'Exchange Rate Trend'
      }
    },
    scales:{
      y: {
        beginAtZero:false
      }
    }
  };
  return (//Layout the website
    <div className="app">
      <LanguageSelector />
      <h1>{t.title}</h1>
      
      <div className="main-container">
        <div className="left-panel">
          <div className="converter-container">
            <div className="currency-inputs">
              <div className="currency-row">
                <div className="currency-input">
                  <div className="currency-select" ref={fromDropdownRef}>
                    <input /*The input component of currency of fromcurrency*/
                      type="text"
                      value={fromInput}
                      onChange={handleFromInputChange}
                      onFocus={() => setShowFromDropdown(true)}
                      placeholder={t.selectCurrency}
                    />
                    {showFromDropdown && filteredFromCurrencies.length > 0 && (
                      <div className="currency-dropdown" /*The dropdown component */>
                        {filteredFromCurrencies.map(currency => (
                          <div
                            key={currency}
                            className="currency-option"
                            onClick={() => handleFromCurrencySelect(currency)}
                          >
                            {currency} - {t.currencyNames[currency]}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button className="exchange-button" onClick={handleExchange}/* Exchange Button component*/>
                  <span className="exchange-icon">⇄</span>
                </button>
                
                <div className="currency-input" /*The input component of currency of tocurrency*/>
                  <div className="currency-select" ref={toDropdownRef}>
                    <input
                      type="text"
                      value={toInput}
                      onChange={handleToInputChange}
                      onFocus={() => setShowToDropdown(true)}
                      placeholder={t.selectCurrency}
                    />
                    {showToDropdown && filteredToCurrencies.length > 0 && (
                      <div className="currency-dropdown" /*The dropdown component */>
                        {filteredToCurrencies.map(currency => (
                          <div
                            key={currency}
                            className="currency-option"
                            onClick={() => handleToCurrencySelect(currency)}
                          >
                            {currency} - {t.currencyNames[currency]}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="amount-row" /*the input componen of amount */>
                <div className="amount-input">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder={t.amount}
                  />
                </div>
                <div className="amount-result">
                  <input
                    type="text"
                    value={convertAmount()}
                    readOnly
                    placeholder={t.convertedAmount}
                  />
                </div>
              </div>

              <div className="date-row">
                <div className="date-input">
                  <input /* the data select component */
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <span className="last-updated">
                  {t.lastUpdated}: {lastUpdated}
                </span>
              </div>
            </div>
          </div>

          <div className="chart-container" /* charline component */>
            <h2>{t.historicalRates}: {fromCurrency} {t.to} {toCurrency}</h2>
            {historicalRates.datasets && (
              <Line data={historicalRates} options={chartOptions} />
            )}
          </div>
        </div>

        <div className="watchlist-container" /*watchlist component */>
          <h2>{t.popularCurrencies}</h2>
          <div className="watchlist">
            {currencies.map(currency => (
              <div key={currency} className="watchlist-item">
                <span className="currency-code">{currency}</span>
                <span className="currency-name">{t.currencyNames[currency]}</span>
                <span className="currency-rate">
                  {currencyRates[currency] ? 
                    `1 USD = ${currencyRates[currency].toFixed(4)} ${currency}` 
                    : 'Loading...'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}