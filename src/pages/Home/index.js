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

  const handleClickScroll = () => {
    const element = document.getElementById('swap-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (    
    <div className="overlay">
      <div className="overlay">
        <NavBar accounts = { accounts } setAccounts = {setAccounts}/>
        <div id="swap-section">
          <Swap accounts = { accounts } setAccounts = {setAccounts} handleClickScroll = {handleClickScroll}/>
        </div>
        
        <About handleClickScroll = {handleClickScroll}/>
        <Vinocoin />
        <ICOBox />
        <ICOAbout handleClickScroll = {handleClickScroll}/>
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
