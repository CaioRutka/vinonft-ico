import { useState, Suspense } from 'react';
import i18n from '../../i18n';

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
import Loading from '../../components/Loading';
import LocaleContext from '../../LocaleContext';

import './index.css';

function Home() {
  const [accounts, setAccounts] = useState([]);
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const handleClickScroll = () => {
    const element = document.getElementById('swap-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollAbout = () => {
    const element = document.getElementById('about-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollRoad = () => {
    const element = document.getElementById('road-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (   
    <LocaleContext.Provider value={{locale, setLocale}}>
    <Suspense fallback={<Loading />}>
    <div className="overlay">
      <div className="overlay">
        <NavBar accounts = { accounts } setAccounts = {setAccounts} handleClickScrollAbout = {handleClickScrollAbout} handleClickScrollRoad = {handleClickScrollRoad}/>
        <div id="swap-section">
          <Swap accounts = { accounts } setAccounts = {setAccounts} handleClickScroll = {handleClickScroll}/>
        </div>
        
        <div id="about-section">
          <About handleClickScroll = {handleClickScroll}/>      
        </div>

        <Ecosystem />
        <Vinocoin />
        <ICOBox />
        <ICOAbout handleClickScroll = {handleClickScroll}/>
        <Tokenomics handleClickScroll = {handleClickScroll}/>
        <div id="road-section">
          <Roadmap/>             
        </div>   
        <Contact />
        <Footer/>
      </div>
      <div className="moving-background">
        <div className='opac-background'></div>
      </div>
    </div>
    </Suspense>
    </LocaleContext.Provider> 
  );
}

export default Home;
