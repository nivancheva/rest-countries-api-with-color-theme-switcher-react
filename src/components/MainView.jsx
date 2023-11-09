import Search from '../components/Search';
import DropdownMenu from '../components/DropDownMenu';
import CountryContainer from '../components/CountryContainer';

export default function MainView( {handleSubmit, countries, handleClick, onRegionSelected} ) {

    function detailsCountry(country) {
        handleClick(country)
    }

    return (
        <div>
            <div className='search-section container'>
                <Search onSearch={handleSubmit}/>

                <DropdownMenu onSelected={onRegionSelected} />
                </div>

                <div className='grid container'>
                {countries.map((country, idx) => {
                    return (
                        <div key={idx} onClick={() => detailsCountry(country)}>
                            <CountryContainer country={country} />
                        </div>
                    )
                })}
                </div>
        </div>
    )
}