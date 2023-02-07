import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from  './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <div class="centerSection p-5">
      {renderPage()}
      </div>
<div>
  <Footer/>
</div>
      
    </div>
  );
}
