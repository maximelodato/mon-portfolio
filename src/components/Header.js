import React from 'react';
import '/home/maxim/THP/dev++_semaine_6/mon-portfolio/src/styles/Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>Portfolio de John Doe</h1>
      <div className="header-right">
        <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
          <img src="lien_vers_logo_github" alt="GitHub" className="github-logo" />
        </a>
        <button onClick={toggleTheme}>
          Mode {theme === 'jour' ? 'nuit' : 'jour'}
        </button>
      </div>
    </header>
  );
}

export default Header;
