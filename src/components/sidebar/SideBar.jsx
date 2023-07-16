import { Link } from "react-router-dom";
import {MdWorkspacesFilled, MdGroups, MdOutlineAddTask, MdDashboard} from "react-icons/md";

import LogOut from "../logout/LogOut";
import "./sidebar.css"

function SideBar() {
	return (
		<aside className="sidebar">
			<nav className="sidebar__navbar">
				<ul className="sidebar__navbar--menu">
					
					<li className="sidebar__navbar--item">
						< MdDashboard/>
						<Link to={"/dashboard"} className="sidebar__navbar--link">
							Dashboard
						</Link>
					</li>
					<li className="sidebar__navbar--item">
						< MdWorkspacesFilled/>
						<Link to={"/dashboard/workSpaces"} className="sidebar__navbar--link">
							WorkSpaces
						</Link>
					</li>
					<li className="sidebar__navbar--item">
						< MdGroups/>
						<Link to={"/dashboard/groups"} className="sidebar__navbar--link">
							Groups
						</Link>
					</li>
					<li className="sidebar__navbar--item">
						<MdOutlineAddTask />
						<Link to={"/dashboard/task"} className="sidebar__navbar--link">
							task
						</Link>
					</li>
				</ul>
				<LogOut />
			</nav>
		</aside>
	);
}

export default SideBar;
