import React from 'react';

interface AppContext {
  sidebarActive: boolean | null;
  theme: string;

  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContext>({
  sidebarActive: null,
  theme: 'light',

  setSidebarActive: () => {null},
  setTheme: () => {null},
});

export default AppContext;
