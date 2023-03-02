import React from 'react';
import styles from './style.js';
import { NavBar, Feedback, Footer, Working, Hero, Zk } from './componets';
import Ipfs from './componets/Ipfs.jsx';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Page/Dashboard.jsx';

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Working />
            <Feedback />
            <Zk />
            <Ipfs />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
