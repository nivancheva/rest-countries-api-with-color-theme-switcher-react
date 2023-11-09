import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainView from './components/MainView';
import CountryDetails from './components/CountryDetails';


function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  async function searchCountry(country) {
    await getCountries(`https://restcountries.com/v3.1/name/${country}`);
  }
  
  async function getAllCountries() {
    await getCountries(`https://restcountries.com/v3.1/all`);
  }

  async function getCountries(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const countryData = await response.json();
        setCountries(countryData); 
        console.log(countryData);
      }
      else {
        setCountries([]);
      }

    } catch {
      setCountries([]);
    }
  }

  function handleSubmit(country) {
    searchCountry(country);
  }

  function handleClick(country) {
    setSelectedCountry(country);
  }

  function handleBack() {
    setSelectedCountry(null);
  }

  useEffect(function() {
    getAllCountries();
  }, []);

  return (
    <div>
      <Header />

      <div className='bg-main-page'>

        {selectedCountry
          ?
          <CountryDetails country={selectedCountry} onBackClick={handleBack}/>
          :
          <MainView handleSubmit={handleSubmit} countries={countries} handleClick={handleClick}/>
        }

      </div>
    </div>
  )
}

export default App
