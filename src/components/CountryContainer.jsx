import './CountryContainer.css';

export default function CountryContainer( {country} ) {
    return (
        <div className='wrapper'>
            <div className='card-data'>
                <img className='flag-img' src={country.flags.svg} />
                <div className='card'>
                    <h3 className='card_country'>{country.name.common}</h3>
                    <p className='card-data'>Population: <span>{country.population}</span></p>
                    <p className='card-data'>Region: <span>{country.region}</span></p>
                    <p className='card-data'>Capital: <span>{country.capital}</span></p>
                </div>
            </div>

        </div>
    )
}