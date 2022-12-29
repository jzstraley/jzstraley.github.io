import {createElement, React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementByID('entry_point_1'));
root.render(
  <BrowserRouter>
    <SigninButton />
  </BrowserRouter>)