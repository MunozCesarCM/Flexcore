import React from 'react';

interface AppContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContext>({
  theme: 'light',
  setTheme: () => {null},
});
export default AppContext;
