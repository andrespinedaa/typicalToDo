import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { BsArrowBarLeft } from "react-icons/bs";

function LogOut() {
	const { setLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        setLogin(() => {
            navigate("/");
            return false
        });
    }

	return <button onClick={()=> handleLogOut()}>log out <BsArrowBarLeft size={"20px"}/></button>;
}

export default LogOut;
