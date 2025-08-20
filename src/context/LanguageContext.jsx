import { useState, createContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");

	const texts = {
		en: { id: 1, hello: "Hello", cart: "Cart" },
		es: { id: 2, hello: "Hola", cart: "Carrito" },
	};

	return <LanguageContext value={{ language, setLanguage, texts }}>{children}</LanguageContext>;
};
