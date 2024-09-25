import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/home';  
import ReactDOM from 'react-dom';
import './style.css';
import CTA from './components/cta';  
import PreviewPage from './components/PreviewPage';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
