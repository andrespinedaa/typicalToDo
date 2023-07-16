import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { VALIDATION } from "../../middlewares/validation";
import { AuthContext } from "../../contexts/auth/AuthContext";
import "./logIn.css";

function LogIn() {
	const { setLogin } = useContext(AuthContext);
	const [fieldsValue, setFieldsValue] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleValues = (e) => {
		setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLogin(() => {
			if (VALIDATION({ ...fieldsValue }, "login")) {
				navigate("/dashboard");
				setFieldsValue({ ...fieldsValue, username: "", password: "" });
				return true;
			}
			return false;
		});
	};

	return (
		<form className="form__logIn" onSubmit={(e) => handleSubmit(e)}>
			<fieldset className="form__logIn--field">
				<legend>Log In</legend>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					className="addBarTitle"
					onChange={(e) => handleValues(e)}
					value={fieldsValue.username}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="addBarTitle"
					onChange={(e) => handleValues(e)}
					value={fieldsValue.password}
				/>
			</fieldset>

			<button type="submit">Log in</button>
		</form>
	);
}

export default LogIn;
