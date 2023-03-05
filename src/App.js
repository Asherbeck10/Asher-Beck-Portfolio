import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/';
import Home from './Pages/Home/';
import Project from './Pages/Project/';
import NavBar from './Components/Header/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/Contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;


