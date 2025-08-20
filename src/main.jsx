import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { App } from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>
);
