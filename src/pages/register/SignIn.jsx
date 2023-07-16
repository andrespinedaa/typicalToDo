import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { AuthContext } from "../../contexts/auth/AuthContext";
import { VALIDATION } from "../../middlewares/validation";
import "./signIn.css";

function SignIn() {
	const { setLogin } = useContext(AuthContext);
	const navigate = useNavigate()

	const [fieldsValue, setFieldsValue] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleValue = (e) => {
		setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLogin(() => {
			if (VALIDATION({...fieldsValue, id: uuid()}, "register")) {
				navigate("/dashboard");
				setFieldsValue({
					...fieldsValue,
					username: "",
					email: "",
					password: "",
				});
				return true;
			}
			return false;
		});
		
	};

	return (
		<form className="form__signIn" onSubmit={(e) => handleSubmit(e)}>
			<fieldset className="form__signIn--field">
				<legend>Register</legend>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					className="addBarTitle"
					onChange={(e) => handleValue(e)}
					value={fieldsValue.username}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="addBarTitle"
					onChange={(e) => handleValue(e)}
					value={fieldsValue.email}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="addBarTitle"
					onChange={(e) => handleValue(e)}
					value={fieldsValue.password}
				/>
			</fieldset>

			<button>Register</button>
		</form>
	);
}

export default SignIn;
