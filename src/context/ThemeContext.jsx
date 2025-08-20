import { useState, createContext } from "react";

/*¿Por qué me da error en la exportación del contexto?*/

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
