import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider( {children}) {
	const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;