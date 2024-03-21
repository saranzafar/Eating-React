import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider
//we are accessing the "ThemeContext" with "ThemeProvider"

export default function useTheme() {
    //just  a hook to get the context values in any component that is wrapped by <ThemeProvider /> 
    // Custom hook to access the context
    return useContext(ThemeContext)
}