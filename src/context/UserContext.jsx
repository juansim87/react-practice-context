import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = (name) => {
		const isAdmin = String(name).trim().toLowerCase() === "carmen";
		setUser({
			id: 1,
			name: name,
			surname: "López",
			role: isAdmin ? "admin" : "user",
		});
	};

  const logout = () => setUser(null);

	return <UserContext value={{ user, login, logout, setUser }}>{children}</UserContext>;
};
