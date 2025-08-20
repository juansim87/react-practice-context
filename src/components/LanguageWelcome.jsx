import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const LanguageWelcome = () => {
	const { language, setLanguage, texts } = useContext(LanguageContext);
	const codes = Object.keys(texts);

	const languageOption = { en: "English", es: "Español" };

	return (
		<div>
			<select value={language} onChange={(event) => setLanguage(event.target.value)}>
				{codes.map((code) => (
					<option key={code} value={code}>
						{languageOption[code]}
					</option>
				))}
			</select>
			<p>
				{language === "es" && "¡"}
				{texts[language].hello}!
			</p>
			<p>{texts[language].cart}</p>
		</div>
	);
};
