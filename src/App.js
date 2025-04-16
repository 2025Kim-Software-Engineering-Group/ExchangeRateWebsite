import React, { useState, useEffect } from 'react';
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

// 语言选择器组件
const LanguageSelector = ({ currentLanguage, setCurrentLanguage }) => {
  const t = translations[currentLanguage];
  return (
    <div className="language-selector">
      {Object.keys(translations).map((lang) => (
        <button
          key={lang}
          className={`language-button ${currentLanguage === lang ? 'active' : ''}`}
          onClick={() => setCurrentLanguage(lang)}
        >
          {translations[lang].languages[lang]}
        </button>
      ))}
    </div>
  );
};

const CurrencyConverter = ({
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  exchangeRate,
  lastUpdated,
  selectedDate,
  setSelectedDate,
  currencies,
  t,
  timeframe,
  setTimeframe
}) => {
  const [fromInput, setFromInput] = useState(fromCurrency);
  const [toInput, setToInput] = useState(toCurrency);
  const [showDropdownFrom, setShowDropdownFrom] = useState(false);
  const [showDropdownTo, setShowDropdownTo] = useState(false);

  const handleCurrencyChange = (type, value) => {
    const upperValue = value.toUpperCase().trim();
    if (currencies.includes(upperValue) || upperValue === '') {
      if (type === 'from') {
        setFromCurrency(upperValue);
        setFromInput(upperValue);
        setShowDropdownFrom(false);
      } else {
        setToCurrency(upperValue);
        setToInput(upperValue);
        setShowDropdownTo(false);
      }
    } else {
      if (type === 'from') setFromInput(upperValue);
      else setToInput(upperValue);
    }
  };

  const handleSelectCurrency = (type, currency) => {
    if (type === 'from') {
      setFromCurrency(currency);
      setFromInput(currency);
      setShowDropdownFrom(false);
    } else {
      setToCurrency(currency);
      setToInput(currency);
      setShowDropdownTo(false);
    }
  };

  const handleExchange = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromInput(toInput);
    setToInput(fromInput);
  };

  return (
    <div className="converter-container">
      <div className="currency-inputs">
        {/* 添加时间范围选择器 */}
        <div className="timeframe-selector">
          <button
            className={`timeframe-btn ${timeframe === 'weekly' ? 'active' : ''}`}
            onClick={() => setTimeframe('weekly')}
          >
            {t.weekly}
          </button>
          <button
            className={`timeframe-btn ${timeframe === 'yearly' ? 'active' : ''}`}
            onClick={() => setTimeframe('yearly')}
          >
            {t.yearly}
          </button>
        </div>
        {/* Currency Selection Row */}
        <div className="currency-row">
          <div className="currency-input fromCurrency">
            <input
              type="text"
              value={fromInput}
              onChange={(e) => {
                handleCurrencyChange('from', e.target.value);
                setShowDropdownFrom(true);
              }}
              onFocus={() => setShowDropdownFrom(true)}
              placeholder={t.selectCurrency}
            />
            {showDropdownFrom && (
              <div className="dropdown">
                {currencies.filter(currency =>
                  currency.toUpperCase().includes(fromInput.toUpperCase())
                ).map(currency => (
                  <div
                    key={currency}
                    className="dropdown-item"
                    onClick={() => handleSelectCurrency('from', currency)}
                  >
                    {currency} - {t.currencyNames[currency]}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* From Currency 的国旗 */}
          <div className="country-flag">
            {fromCurrency && (
              <img
                style={{
                  width: '48px',      // 与API国旗宽度一致
                  height: '32px',     // 3:2标准国旗比例 (48*2/3)
                  objectFit: 'cover', // 保持比例填充容器
                  display: 'block'    // 避免行内元素间隙
                }}
                src={
                  fromCurrency.slice(0, 2) === 'EU'
                    ? '/EU.jpg'
                    : `https://flagsapi.com/${fromCurrency.slice(0, 2)}/flat/48.png`
                }
                alt={`${fromCurrency} flag`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>
          <div className="exchange-button-container">
            <button className="exchange-button" onClick={handleExchange}>
              <span className="exchange-icon">⇄</span>
            </button>
          </div>
          {/* To Currency 的国旗 */}
          <div className="country-flag">
            {toCurrency && (
              <img
                style={{
                  width: '48px',
                  height: '32px',
                  objectFit: 'cover',
                  display: 'block'
                }}
                src={
                  toCurrency.slice(0, 2) === 'EU'
                    ? '/EU.jpg'
                    : `https://flagsapi.com/${toCurrency.slice(0, 2)}/flat/48.png`
                }
                alt={`${toCurrency} flag`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>
          <div className="currency-input toCurrency">
            <input
              type="text"
              value={toInput}
              onChange={(e) => {
                handleCurrencyChange('to', e.target.value);
                setShowDropdownTo(true);
              }}
              onFocus={() => setShowDropdownTo(true)}
              placeholder={t.selectCurrency}
            />
            {showDropdownTo && (
              <div className="dropdown">
                {currencies.filter(currency =>
                  currency.toUpperCase().includes(toInput.toUpperCase())
                ).map(currency => (
                  <div
                    key={currency}
                    className="dropdown-item"
                    onClick={() => handleSelectCurrency('to', currency)}
                  >
                    {currency} - {t.currencyNames[currency]}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Amount Input/Output Row */}
        <div className="amount-row">
          <div className="amount-input">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={t.amount}
              min="0"
            />
          </div>
          <div className="amount-result">
            <input
              type="text"
              value={exchangeRate ? (amount * exchangeRate).toFixed(2) : ''}
              readOnly
              placeholder={t.convertedAmount}
            />
          </div>
        </div>

        <div className="date-row">
          <div className="date-input">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          <span className="last-updated">
            {t.lastUpdated}: {lastUpdated}
          </span>
        </div>
      </div>
    </div>
  );
};
// 历史汇率图表组件
const HistoricalChart = ({ historicalRates, fromCurrency, toCurrency, t }) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${fromCurrency} ${t.to} ${toCurrency} ${t.exchangeTrend}`
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: t.exchangeRate
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2>{t.historicalRates}</h2>
      {historicalRates.datasets && (
        <Line data={historicalRates} options={chartOptions} />
      )}
    </div>
  );
};

// 热门货币列表组件
const PopularCurrencies = ({ currencyRates, currencies, t }) => (
  <div className="watchlist-container">
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
);

// 主组件
export default function App() {
  const [timeframe, setTimeframe] = useState('weekly');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [historicalRates, setHistoricalRates] = useState({ labels: [], datasets: [] });
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currencyRates, setCurrencyRates] = useState({});

  const t = translations[currentLanguage];
  const currencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD',
    'AED', 'INR', 'SGD', 'MXN', 'BRL'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 获取实时汇率
        const rateResponse = await fetch(
          `https://v6.exchangerate-api.com/v6/70cbad844562588cd1b8e54d/latest/${fromCurrency}`
        );
        const rateData = await rateResponse.json();

        // 获取历史汇率
        // 历史汇率获取逻辑修改
        const generateDateArray = () => {
          const endDate = new Date(selectedDate);
          const dates = [];

          if (timeframe === 'weekly') {
            // 生成过去7天（包含当天）
            for (let i = 6; i >= 0; i--) {
              const date = new Date(endDate);
              date.setDate(date.getDate() - i);
              dates.push(new Date(date));
            }
          } else {
            // 生成过去12个月首日（包含当前月）
            const currentMonth = endDate.getMonth();
            const currentYear = endDate.getFullYear();

            for (let i = 0; i < 12; i++) {
              const targetMonth = currentMonth - i;
              const year = currentYear + Math.floor(targetMonth / 12);
              const month = (targetMonth + 12) % 12;
              dates.push(new Date(year, month, 1));
            }
            dates.reverse();
          }
          return dates;
        }

        const dateArray = generateDateArray();
        const historicalPromises = dateArray.map(async (date) => {
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // 月份从1开始
          const day = date.getDate();

          try {
            const response = await fetch(
              `https://v6.exchangerate-api.com/v6/70cbad844562588cd1b8e54d/history/${fromCurrency}/${year}/${month}/${day}`
            );
            const data = await response.json();

            return data.conversion_rates?.[toCurrency] ? {
              date: date.toISOString().split('T')[0],
              rate: data.conversion_rates[toCurrency]
            } : null;
          } catch (error) {
            console.error('Fetch error:', error);
            return null;
          }
        });

        const historicalResults = await Promise.all(historicalPromises);
        const validData = historicalResults.filter(item => item !== null);

        setHistoricalRates({
          labels: validData.map(d => d.date),
          datasets: [{
            label: `${fromCurrency} ${t.to} ${toCurrency}`,
            data: validData.map(d => d.rate),
            borderColor: '#4bc0c0',
            tension: 0.1
          }]
        });

        // 获取所有货币汇率
        const allRatesResponse = await fetch(
          `https://v6.exchangerate-api.com/v6/70cbad844562588cd1b8e54d/latest/USD`
        );
        const allRatesData = await allRatesResponse.json();

        // 更新状态
        setExchangeRate(rateData.conversion_rates[toCurrency]);
        setLastUpdated(new Date().toLocaleString());
        
        setCurrencyRates(allRatesData.conversion_rates);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency, selectedDate, t, timeframe]);

  return (
    <div className="app">
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <h1>{t.title}</h1>

      <div className="main-container">
        <div className="left-panel">
          <CurrencyConverter
            timeframe={timeframe}
            setTimeframe={setTimeframe}
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
            amount={amount}
            setAmount={setAmount}
            exchangeRate={exchangeRate}
            lastUpdated={lastUpdated}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currencies={currencies}
            t={t}
          />
          <HistoricalChart
            historicalRates={historicalRates}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            t={t}
          />
        </div>

        <PopularCurrencies
          currencyRates={currencyRates}
          currencies={currencies}
          t={t}
        />
      </div>
    </div>
  );
}