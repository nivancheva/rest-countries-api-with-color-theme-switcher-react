import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';


function App() {

  const [getCountry, setGetCountry] = useState();

  async function searchCountry(country) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      if (response.ok) {
        const countryData = await response.json();
        // setGetCountry(countryData[0]); 
        console.log(countryData);
      }
      else {
        setGetCountry(null);
      }

    } catch {
      setGetCountry(null);
    }       
  }

  function handleSubmit(country) {
    searchCountry(country);
  }

  return (
    <div>
      <Header />

      <Search onSearch={handleSubmit}/>

      
      <i className='bx bxs-chevron-down'></i>
      <i className='bx bx-arrow-back'></i>
    </div>
  )
}

export default App
