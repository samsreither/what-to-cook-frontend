import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import Recipes from '../Recipes/Recipes';
import About from '../About/About';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <div className="page">
        <div className="page__content">
          <Header/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
