import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Front.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import Rent from './Rent';
import Login from './Login';
import CarDetails from './components/CarDetails';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  </StrictMode>,
)
