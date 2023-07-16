import { useContext, useState } from "react";

import { TaskContext } from "../../contexts/taskContext/TaskContext";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

import Editable from "./Editable";
import Zoom from "./Zoom";
import "./css/task.css";

function Task({ taskInfo }) {
	const { dispatch } = useContext(TaskContext);

	const [update, setUpdate] = useState(true);
	const [zoom, setZoom] = useState(true);

	const { title, description, id, done } = taskInfo;

	const handleDelete = (id) => {
		dispatch({ type: "DELETE__TASK", payload: id });
	};

	const handleZoom = () => {
		setZoom(!zoom);
	};

	const handleEdit = () => {
		setUpdate(false);
	};

	const handleFinished = (e, id) => {
		dispatch({
			type: "UPDATE__FINISHED",
			payload: { id: id, done: e.target.checked },
		});
	};

	return (
		<li className="task">
			{update ? (
				<>
					<hgroup className="task__information">
						{zoom ? (
							<>
								<h3 className="task__information--title">{title}</h3>
								<p className="task__information--description">{description}</p>
							</>
						) : (
							<h3 className="task__information--title">{title}</h3>
						)}
					</hgroup>
					<div
						className={
							zoom ? "task__options--zoom-out" : "task__options--zoom-in"
						}
					>
						{zoom ? (
							<>
								<div className="task__done">
									<label htmlFor="doneIt">Done</label>
									<input
										type="checkbox"
										name="doneIt"
										id="doneIt"
										onChange={(e) => handleFinished(e, id)}
										checked={done}
									/>
								</div>
								<div className="task__buttons">
									<AiFillEdit size={"20px"} onClick={() => handleEdit()} />
									<BsFillTrashFill
										size={"20px"}
										onClick={() => handleDelete(id)}
									/>
								</div>
							</>
						) : (
							<>
								<input
									type="checkbox"
									name="doneIt"
									id="doneIt"
									onChange={(e) => handleFinished(e, id)}
									checked={done}
								/>
								<div className="task__buttons">
									<AiFillEdit size={"20px"} onClick={() => handleEdit()} />
									<BsFillTrashFill
										size={"20px"}
										onClick={() => handleDelete(id)}
									/>
								</div>
							</>
						)}
					<Zoom handleZoom={handleZoom} zoom={zoom} />
					</div>
				</>
			) : (
				<Editable currentTask={taskInfo} setUpdate={setUpdate} />
			)}
		</li>
	);
}

export default Task;
