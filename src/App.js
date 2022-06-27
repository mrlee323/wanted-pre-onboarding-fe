import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const authenticated = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      <Route
        path="/"
        element={authenticated ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route path="/login" element={<Login authenticated={authenticated} />} />
    </Routes>
  );
}

export default App;
