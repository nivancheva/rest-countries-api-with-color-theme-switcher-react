import './Search.css';

export default function Search({ onSearch }) {
    return (
        <div className='margin-block-3'>
            <form className='input container'>
                <input 
                    className='search-country'
                    placeholder='Search for a country…'/>
                <i className='bx bx-search'></i>
            </form>
        </div>
    )
}