import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/';
import Home from './Pages/Home/';
import Project from './Pages/Projects';
import NavBar from './Components/Header/NavBar';
import ProjectInfo from './Pages/ProjectInfo';
import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: 'GTM-THQP9Z47',
};
TagManager.initialize(tagManagerArgs);
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
