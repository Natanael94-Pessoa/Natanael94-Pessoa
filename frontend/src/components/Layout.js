import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;
