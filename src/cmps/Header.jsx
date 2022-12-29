import { Link as NavLink } from 'react-router-dom';

export function Header() {
    return (
        <div className='header-container'>
            <header className="flex justify-between align-center main-layout">
                <h1 className="logo">Mr BitCoin</h1>
                <nav>
                    <ul className="flex clean-list">
                        <NavLink to="/signup">
                            <li>Sign Up</li>
                        </NavLink>
                        <NavLink to="/user">
                            <li>Your profile</li>
                        </NavLink>
                        <NavLink to="/Chart">
                            <li>Statistics</li>
                        </NavLink>
                        <NavLink to="/">
                            <li>Contacts</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
