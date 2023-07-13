import { useState } from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import './index.css';

function Profile() {
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
        <Footer/>
      </div>
      <div className="moving-background">
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default Profile;
