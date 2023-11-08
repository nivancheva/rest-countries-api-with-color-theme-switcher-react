import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    return (
        <button className='flex btn-dark-mode' onClick={toggleDarkMode}>
            <i className='bx bxs-moon'></i>
            <p>Dark Mode</p>
        </button>
    )
}