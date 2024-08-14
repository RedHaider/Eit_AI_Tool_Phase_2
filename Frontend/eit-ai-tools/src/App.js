import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Login from './Components/pages/loginComponent';
import BodyComponent from './Components/bodyComponent';
import ModelComponent from './Components/pages/modeComponent';
import Footer from './Components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<BodyComponent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
