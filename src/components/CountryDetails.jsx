import { useEffect, useState } from 'react';
import './CountryDetails.css';
import getCountries from '../helpers/getCountries';

export default function CountryDetails( {country, onBackClick} ) {
    const [borderCountries, setBorderCountries] = useState([]);

    async function getBorderCountries() {
        if (country.borders && country.borders.length) {
            const result = await getCountries(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`);
            
            console.log(result);
            setBorderCountries(result);
        }
    }

    useEffect(function() {
      getBorderCountries();
    }, []);

    return (
        <div className='container country-details-wrapper'>
            <button className='button-back' onClick={onBackClick}>
                <i className='bx bx-arrow-back'></i>
                <p>Back</p>
            </button>

            <div className='grid-col-2 wrapper-grid'>
                <img className='flag-img' src={country.flags.svg}/>
                <div>
                    <h3 className='card_country'>{country.name.common}</h3>
                    <div className='grid-col-2'>
                        <div>
                            <p className='card-data'>Native name: <span>{country.name.nativeName[0]}</span></p>
                            <p className='card-data'>Population: <span>{country.population}</span></p>
                            <p className='card-data'>Region: <span>{country.region}</span></p>
                            <p className='card-data'>Sub Region : <span>{country.subregion}</span></p>
                            <p className='card-data'>Capital: <span>{country.capital}</span></p>
                        </div>

                        <div>
                            <p className='card-data'>Top Level Domain: <span>{country.tld}</span></p>
                            <p className='card-data'>Currencies: <span>{Object.values(country.currencies).map(c => c.name).join(",")}</span></p>
                            <p className='card-data'>Languages: <span>{Object.values(country.languages).join(",")}</span></p>
                        </div>
                    </div>

                    <div className='card-data borders'>
                        <p>Border Countries:</p>
                        <div className='grid-borders'>
                            {borderCountries.map((borderCountry, idx) => {
                                return (
                                    <p className='border-countries' key={idx}>{borderCountry.name.common}</p>
                                );
                            })}
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}