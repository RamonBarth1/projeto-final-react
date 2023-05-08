import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../shared/components/RegisterForms';
import Errants from '../pages/Errants';
import List from '../shared/components/Lista-Recados';
import Home from '../pages/Home';
import Login from '../shared/components/LoginForm';
import SignUp from '../pages/Register';



const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home struture={Login} />} />
        <Route path="/signup" element={<SignUp struture={Register} />} />
        <Route path="/recados" element={<Errants struture={List} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
 