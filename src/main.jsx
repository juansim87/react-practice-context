import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { App } from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</ThemeProvider>
	</StrictMode>
);
