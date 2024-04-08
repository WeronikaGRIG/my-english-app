import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './styles/reset.css';
import './styles/variables.css';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Vocab from './components/Vocab/Vocab';
import Contacts from './components/Contacts/Contacts';
import Table from './components/Table/Table';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocabs" element={<Vocab />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
