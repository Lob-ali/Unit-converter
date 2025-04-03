'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaExchangeAlt, FaDollarSign } from 'react-icons/fa';

const UnitConverter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');
  const [convertedValue, setConvertedValue] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyValue, setCurrencyValue] = useState('');
  const [currencies, setCurrencies] = useState([]);

  const units = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084,
    inches: 39.3701,
  };

  useEffect(() => {
    fetchExchangeRate();
    fetchCurrencyList();
  }, [currencyFrom, currencyTo]);

  const fetchExchangeRate = async () => {
    try {
      const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
      setExchangeRate(res.data.rates[currencyTo] || 1);
    } catch (error) {
      console.error('Error fetching exchange rate', error);
    }
  };

  const fetchCurrencyList = async () => {
    try {
      const res = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      setCurrencies(Object.keys(res.data.rates));
    } catch (error) {
      console.error('Error fetching currency list', error);
    }
  };

  const handleConversion = () => {
    const result = (parseFloat(value) * units[toUnit]) / units[fromUnit];
    setConvertedValue(result.toFixed(4));
  };

  const handleCurrencyConversion = () => {
    const result = parseFloat(currencyValue) * exchangeRate;
    setConvertedValue(result.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Universal Unit Converter</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Unit Conversion</h2>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-700 border-none text-white" placeholder="Enter value" />
        
        <div className="flex justify-between">
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="p-2 rounded bg-gray-700">
            {Object.keys(units).map((unit) => <option key={unit} value={unit}>{unit}</option>)}
          </select>
          <FaExchangeAlt className="text-xl my-auto" />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="p-2 rounded bg-gray-700">
            {Object.keys(units).map((unit) => <option key={unit} value={unit}>{unit}</option>)}
          </select>
        </div>
        
        <button onClick={handleConversion} className="mt-4 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition">Convert</button>
        <p className="mt-4 text-xl">Result: {convertedValue}</p>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 mt-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaDollarSign className="mr-2" /> Currency Conversion
        </h2>
        <input type="number" value={currencyValue} onChange={(e) => setCurrencyValue(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-700 border-none text-white" placeholder="Enter amount" />
        
        <div className="flex justify-between">
          <select value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)} className="p-2 rounded bg-gray-700">
            {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
          <FaExchangeAlt className="text-xl my-auto" />
          <select value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)} className="p-2 rounded bg-gray-700">
            {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
          </select>
        </div>
        
        <button onClick={handleCurrencyConversion} className="mt-4 w-full bg-green-500 py-2 rounded-lg hover:bg-green-600 transition">Convert</button>
        <p className="mt-4 text-xl">Result: {convertedValue} {currencyTo}</p>
      </div>
    </div>
  );
};

export default UnitConverter;


