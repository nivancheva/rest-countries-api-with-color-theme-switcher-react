import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainView from './components/MainView';
import CountryDetails from './components/CountryDetails';
import getCountries from './helpers/getCountries';


function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  async function searchCountry(country) {
    const result = await getCountries(`https://restcountries.com/v3.1/name/${country}`);

    setCountries(result);
  }
  
  async function getAllCountries() {
    const result = await getCountries(`https://restcountries.com/v3.1/all`);
    
    setCountries(result);
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

  async function onRegionSelected(region) {
    const result = await getCountries(`https://restcountries.com/v3.1/region/${region}`);

    setCountries(result);
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
          <MainView handleSubmit={handleSubmit} countries={countries} handleClick={handleClick} onRegionSelected={onRegionSelected}/>
        }

      </div>
    </div>
  )
}

export default App
