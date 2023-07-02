import { useState } from 'react';

import PixMint from '../../components/PixMint';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import './styles.css';

function MintPixPage() {
  const [accounts, setAccounts] = useState([]);

  return (    
    <div className="overlay">
      <div className="overlay">
        <NavBar accounts = { accounts } setAccounts = {setAccounts}/>
        <PixMint accounts = { accounts } setAccounts = {setAccounts}/>
        <Footer/>
      </div>
      <div className="moving-background">
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default MintPixPage;
