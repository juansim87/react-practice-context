import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const NavBar = () => {

    const {logout, user} = useContext(UserContext);

	return (
		<nav>
			<a>Inicio</a>
			<a>Tus mierdas</a>
			
			{user && <button onClick={logout}>Log out</button>}
		</nav>
	);
};
