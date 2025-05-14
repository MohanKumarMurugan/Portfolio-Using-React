import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "About",
        to: '/about'
    },
    {
        label: "Contact",
        to: '/contact'
    },
    {
        label: "Skills",
        to: '/skills'
    },
    {
        label: "Projects",
        to: '/projects'
    },
    {
        label: "Portfolio",
        to: '/portfolio'
    }
]


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className="navbar-container`-menu">
                    {data.map((item) => (
                        <li className="navbar-container-menu-item">
                            <Link className="navbar-container-menu-item-link" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </div>
    )
}

export default Navbar; 