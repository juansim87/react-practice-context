import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginForm = () => {
	const [name, setName] = useState("");
  const {login} = useContext(UserContext);

	const onSubmit = () => {
		login(name);
    setName("");
	};

	return (
		<div>
			<p>Nombre</p>
			<input type="text" name="name" onChange={(event) => setName(event.target.value)} value={name}/>
			<button onClick={onSubmit}>Enviar</button>
		</div>
	);
};
