import './Header.css';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
    return (
        <div className='header'>
            <div className='flex container header-info'>
                <p>Where in the world?</p>
                <ThemeSwitcher />
            </div>
        </div>
    )
}