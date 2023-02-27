import React from 'react';
import styles from './style.js';
import {NavBar,Feedback,Footer,Working,Hero,Zk} from './componets';
import Ipfs from './componets/Ipfs.jsx';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import Dashboard from './Page/Dashboard.jsx';
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Router>
          <Routes>
          <Route path='Dashboard'element={<Dashboard/>}/>
          </Routes>
        </Router>
        <NavBar />
        
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer/>
      <Working/>
      <Feedback/>
      <Zk/>
      <Ipfs/>
      </div>
    </div>
  </div>
);
};

export default App