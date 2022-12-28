import React from 'react';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        IMTechEd
      </h1>
      <AuthContextProvider>
        <Routes>
          <Switch>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            </Switch>
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};