import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ChartsPage from './components/pages/ChartsPage';
import CertificationDetailPage from './components/pages/CertificationDetailPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { AuthProvider } from './components/auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/charts" component={ChartsPage} />
          <Route path="/certification/:id" component={CertificationDetailPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
