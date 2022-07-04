import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import useAuthenticated from './hooks/useAuthenticated';

function App() {
  const { isAuthenticated } = useAuthenticated();

  const Main = isAuthenticated ? <Home /> : <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route path="/" element={Main} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
