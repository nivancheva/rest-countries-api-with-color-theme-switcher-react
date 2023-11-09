import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import DropdownMenu from './components/DropDownMenu';
import CountryContainer from './components/CountryContainer';


function App() {

  const [countries, setCountries] = useState([]);

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

  useEffect(function() {
    getAllCountries();
  }, []);

  return (
    <div>
      <Header />

      <div className='bg-main-page'>



        <div className='search-section container'>
          <Search onSearch={handleSubmit}/>

          <DropdownMenu />
        </div>

        <div className='grid container'>
          {countries.map((country, idx) => {
            return (
              <CountryContainer key={idx} country={country}/>
            )
          })}
        </div>
        
        
        
        {/* <i className='bx bx-arrow-back'></i> */}
      </div>
    </div>
  )
}

export default App
