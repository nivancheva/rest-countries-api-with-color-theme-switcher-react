import './CountryDetails.css';

export default function CountryDetails( {country, onBackClick} ) {
    return (
        <div className='container country-details-wrapper'>
            <button className='button-back' onClick={onBackClick}>
                <i className='bx bx-arrow-back'></i>
                <p>Back</p>
            </button>

            <div>
                <img />
                <div>
                    
                </div>
            </div>
        </div>
    )
}