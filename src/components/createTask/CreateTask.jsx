import { useContext, useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

import { TaskContext } from "../../contexts/taskContext/TaskContext";
import Fields from "./Fields";
import "./css/addbar.css";

function CreateTask() {
	const { dispatch } = useContext(TaskContext);

	const [createdTask, setCreatedTask] = useState({
		title: "",
		description: "",
		done: false,
	});

	const handleSave = (e) => {
		e.preventDefault();
		dispatch({
			type: "ADD__TASK",
			payload: {...createdTask, id: uuidv4()} ,
		});
		setCreatedTask({...createdTask, title: "", description: ""})
	};

	return (
		<form className="addTask" onSubmit={(e) => e.preventDefault()}>
			<Fields setTask={setCreatedTask} task={createdTask}/>
			<button onClick={(e) => handleSave(e)}>
				Save
				<BsCheckCircleFill size={"20px"} />
			</button>
		</form>
	);
}

export default CreateTask;
