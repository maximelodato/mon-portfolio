import React, { useState } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Travaux from './components/Travaux';
import Contact from './components/Contact';
import '/home/maxim/THP/dev++_semaine_6/mon-portfolio/src/App.css';

function App() {
  const [theme, setTheme] = useState('jour');

  const toggleTheme = () => {
    const newTheme = theme === 'jour' ? 'nuit' : 'jour';
    setTheme(newTheme);
    console.log('Le thème est maintenant :', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Presentation />
        <Travaux />
        <Contact />
      </main>
    </div>
  );
}

export default App;
