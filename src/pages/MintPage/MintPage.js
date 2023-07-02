import { useState } from 'react';

import MainMint from '../../components/MainMint';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import './styles.css';

function MintPage() {
  const [accounts, setAccounts] = useState([]);

  return (    
    <div className="overlay">
      <div className="overlay">
        <NavBar accounts = { accounts } setAccounts = {setAccounts}/>
        <MainMint accounts = { accounts } setAccounts = {setAccounts}/>
        <Footer/>
      </div>
      <div className="moving-background">
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default MintPage;
