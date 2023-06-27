import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PythonHomePage from './components/Python';
import BasicFE from './components/BasicFrontEnd';
import AdvancedFE from './components/AdvancedFrontEnd';
import BashScriptingPage from './components/BashScripting'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Python" element={<PythonHomePage />} />
        <Route path="/BasicFE" element={<BasicFE />} />
        <Route path="/AdvancedFE" element={<AdvancedFE />} />
        <Route path="/BashSC" element={<BashScriptingPage />} />
      </Routes>
    </Router>
  );
}
