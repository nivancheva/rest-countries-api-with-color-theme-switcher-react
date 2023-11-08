import './DropdownMenu.css';
import { useState } from 'react';

const regions= [
    {text:'Africa', url:'#'},
    {text:'America', url:'#'},
    {text:'Asia', url:'#'},
    {text:'Europe', url:'#'},
    {text:'Oceania', url:'#'}
]

export default function DropdownMenu() {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    return (
        <div className='region_dropdown'>
            <button onClick={toggleMenu} className='flex btn_show_regions'>
                <p>Filter by Region</p>
                <i className='bx bxs-chevron-down'></i>
            </button>

            <ul className={`regions ${menuVisible ? "" : "regions-hidden"}`}>
                {regions.map((region, idx) => {
                    return (
                        <li key={idx}>{region.text}</li>
                    )
                })}
            </ul>
        </div>
    )
}