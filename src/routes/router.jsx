import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	AboutUs,
	Dashboard,
	HomePage,
	LogIn,
	SignIn,
} from "../pages/pages.index";
import { AuthProvider, ThemeProvider } from "../contexts/context.index";
import { TasksPage, WorkSpaces } from "../pages/dashboard/dashboard.index";
import Landing from "../layouts/landinpages/Landing";
import Home from "../layouts/dashboardpages/Home";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Landing />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/register" element={<SignIn />} />
							<Route path="/logIn" element={<LogIn />} />
							<Route psath="/aboutUs" element={<AboutUs />} />
							<Route path="*" element={<h1>Not Found</h1>} />
						</Route>
						<Route element={<Home />}>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/dashboard/workSpaces" element={<WorkSpaces />} />
							<Route path="/dashboard/groups" element={<h1>groups</h1>} />
							<Route path="/dashboard/task" element={<TasksPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
