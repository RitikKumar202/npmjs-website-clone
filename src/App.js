import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import PackageDetailPage from './pages/PackageDetailPage';
import PackageVersionPage from './pages/PackageVersionPage';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (navigate) => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="min-h-screen font-Poppins">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/package/:packageName" element={<PackageDetailPage />} />
        <Route path="/package/:packageName/v/:version" element={<PackageVersionPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;