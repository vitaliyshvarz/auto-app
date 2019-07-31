import React from 'react';
import autoLogo from './assets/auto-logo.svg';
import './auto-app.css';

function AutoApp() {
  return (
    <div className="AutoApp">
      <header className="AutoApp-header">
        <img src={autoLogo} className="auto-logo" alt="logo" />
      </header>
    </div>
  );
}

export default AutoApp;
