import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RooterCustom from './RooterCustom';
import "./styles/style.scss";
ReactDOM.render(
  <BrowserRouter>
    <RooterCustom />
  </BrowserRouter>,
  document.getElementById('root')
);