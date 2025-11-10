import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    isDarkTheme: boolean,
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
         throw new Error("useTheme must be used within a ThemeProvider");
    }
    return theme;
}

const setThemeOnLoad = () => {
    let theme = localStorage.getItem("taskify-theme");
    return theme === "light" ? false : true;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(setThemeOnLoad);

    useEffect(() => {
        let theme = isDarkTheme ? "dark" : "light";
        localStorage.setItem("taskify-theme", theme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}