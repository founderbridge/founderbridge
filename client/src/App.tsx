import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import FounderDashboard from './pages/FounderDashboard';
import StartupDiscovery from './pages/StartupDiscovery';
import Messages from './pages/Messages';
import AIPitchGenerator from './pages/AIPitchGenerator';
import UserProfile from './pages/UserProfile';
import StartupDetail from './pages/StartupDetail';
// We'll import other pages as we create them

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<FounderDashboard />} />
            <Route path="/discovery" element={<StartupDiscovery />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/pitch-generator" element={<AIPitchGenerator />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/discovery/:id" element={<StartupDetail />} />
            {/* Add other routes here */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
