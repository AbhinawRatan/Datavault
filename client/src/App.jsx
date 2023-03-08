import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardMain from './Page/DashboardMain';
import Home from './Page/Home';
import YourAccount from './componets/YourAccount';
import Shared from './componets/Shared';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Dashboard' element={<DashboardMain />} />
        <Route path='/Upload' element={<DashboardMain />} />
        <Route path='/YourAccount' element={<YourAccount />} />
        <Route path='/Shared' element={<Shared />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;