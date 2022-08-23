import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function OpenSubmenu() {
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        OpenSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
