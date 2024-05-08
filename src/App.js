import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Vocab from './components/Vocab/Vocab';
import Table from './components/Table/Table';
import Error from './components/Error/Error';

import './App.css';
import './styles/reset.css';
import './styles/variables.css';



function App() {
  return (
    <Router>

      <div className="App">
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/vocabs" element={<Vocab />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />

        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
