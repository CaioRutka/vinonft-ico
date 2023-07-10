import { useState } from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import Swap from '../../components/Swap';
import About from '../../components/About';
import Vinocoin from '../../components/Vinocoin';
import ICOBox from '../../components/ICOBox';
import ICOAbout from '../../components/ICOAbout';
import Ecosystem from '../../components/Ecosystem';
import Tokenomics from '../../components/Tokenomics';
import Roadmap from '../../components/Roadmap';
import Contact from '../../components/Contact';

import './index.css';

function Home() {
  const [accounts, setAccounts] = useState([]);

  return (    
    <div className="overlay">
      <div className="overlay">
        <NavBar accounts = { accounts } setAccounts = {setAccounts}/>
        <Swap accounts = { accounts } setAccounts = {setAccounts}/>
        <About />
        <Vinocoin />
        <ICOBox />
        <ICOAbout/>
        <Ecosystem />
        <Tokenomics />
        <Roadmap/>
        <Contact />
        <Footer/>
      </div>
      <div className="moving-background">
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default Home;
