import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Auth from './pages/Auth';

function App() {
  return (    
    <Router>
      <Routes>
        <Route path = "/" element = { <Home />}/>
        <Route path = "/login" element = { <Login />}/>
        <Route path = "/login/auth" element = { <Auth />}/>
      </Routes>
    </Router>
  );
}

export default App;
