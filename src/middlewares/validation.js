import { Users } from "../data/users";

export const VALIDATION = (user, TYPE_VALIDATION) => {
	const { username, email, password } = user;
	let VALIDATION_TOKEN = null;

	switch (TYPE_VALIDATION) {
		case "register":
			console.log(Users);
			VALIDATION_TOKEN = !Users.some(
				(user) => user.username === username && user.email === email
			);
			VALIDATION_TOKEN && Users.push(user);
			return VALIDATION_TOKEN;
		case "login":
			VALIDATION_TOKEN = Users.some(
				(user) => user.username === username && user.password === password
			);
			return VALIDATION_TOKEN;
		default:
			break;
	}
};
