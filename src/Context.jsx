import { useState, useContext, createContext, useEffect } from 'react';

const AppContext = createContext();

const getPrefersDarkMode = () => {
    const prefersDarkMode = window.matchMedia('prefers-color-scheme:dark').matches;
    return prefersDarkMode || localStorage.getItem('dark theme') === 'true';
}

  
const AppContextProvider = ( {children} ) => {
    const [isDarkTheme, setIsDarkTheme]  = useState(getPrefersDarkMode());
    const [searchText, setSearchText] = useState('cat');
    useEffect(()=> {
        document.querySelector('body').classList.toggle('dark-theme', isDarkTheme);
    },[])
    
    return (
        <AppContext.Provider  value={ { isDarkTheme, setIsDarkTheme, searchText, setSearchText, getPrefersDarkMode } }>
           {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export default AppContextProvider;