import './DropdownMenu.css';
import { useState } from 'react';

const regions= [
    {text:'Africa', value:'africa'},
    {text:'America', value:'america'},
    {text:'Asia', value:'asia'},
    {text:'Europe', value:'europe'},
    {text:'Oceania', value:'oceania'}
]

export default function DropdownMenu({ onSelected }) {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    function onRegionClick(region) {
        setMenuVisible(false);
        onSelected(region.value);
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
                        <li key={idx} onClick={() => onRegionClick(region)}>{region.text}</li>
                    )
                })}
            </ul>
        </div>
    )
}