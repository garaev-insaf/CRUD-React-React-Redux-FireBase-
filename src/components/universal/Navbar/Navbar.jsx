import React from 'react';
import "./styles/Navbar.sass"; // импорт стилей

const Navbar = () => {
    return (
        <header className="Navbar">
            <img src="/images/universal/Navbar/reka_logo.svg" alt="логотип" />
        </header>
    );
}

export { Navbar };