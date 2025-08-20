import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { UserContext } from "./context/UserContext";
import { NavBar } from "./components/NavBar";
import { LanguageWelcome } from "./components/LanguageWelcome";

export const App = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { user } = useContext(UserContext);

	return (
		<div className={`app ${theme === "light" ? "light" : "dark"}`}>
			<h1>Context Practice</h1>
			<div className="exercise">
				<h2>Toggle mode</h2>
				<button onClick={toggleTheme}>Toggle to {theme === "light" ? "Dark Mode" : "Light Mode"}</button>
			</div>
			<div className="exercise">
				<h2>Login State</h2>
				<NavBar />
				<LoginForm />
				{user && <p>Bienvenido {user?.name}</p>}
				{user?.role === "admin" && <button>Administrar</button>}
				{!user && <p>Bienvenido Invitado</p>}
			</div>
			<div className="exercise">
				<h2>Language selector</h2>
				<LanguageWelcome/>
			</div>
		</div>
	);
};
