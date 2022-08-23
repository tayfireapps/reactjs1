import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header title="Dashboard" actionGroups={null} primaryAction={null} />
        <Header title="Manage reviews" actionGroups={null} primaryAction={null} />
        <Footer />
    </div>
  );
}
 
export default App;