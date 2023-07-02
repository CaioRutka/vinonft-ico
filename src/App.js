import { HashRouter as Router, Routes, Route } from "react-router-dom";

import MintPage from './pages/MintPage/MintPage';
import MintPixPage from './pages/MintPixPage/MintPixPage';

function App() {
  return (    
    <Router>
      <Routes>
        <Route path = "/" element = { <MintPage />}/>
        <Route path = "/pix" element = { <MintPixPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
