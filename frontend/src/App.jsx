
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import About from './components/About';
import Authors from './components/Authors';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;






