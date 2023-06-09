import React from 'react';

interface AppContext {
  sidebarActive: boolean | null;
  editorTheme: string | null;
  siteTheme: string;

  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  setEditorTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContext>({
  sidebarActive: null,
  editorTheme: null,
  siteTheme: 'dark',

  setSidebarActive: () => {null},
  setEditorTheme: () => {null},
});

export default AppContext;
