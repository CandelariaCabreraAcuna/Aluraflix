import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import PostList from '../src/api/PostList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NewVideo />} />
      </Routes>
      <PostList /> {/* Integración del componente PostList */}
    </Router>
  );
};

export default App;
