import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";

function Home() {
  return (
    <main className="dashboard__page">
      <SideBar />
      <Outlet />
    </main> 
  )
}

export default Home
