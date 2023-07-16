import { useContext } from "react";

import { TaskContext } from "../../contexts/taskContext/TaskContext";
import Task from "./Task";
import "./css/listTasks.css"

function ListTasks() {

	const {tasksState: {tasksList, finished}} = useContext(TaskContext);

	return (
		<section className="listTasks">
		<div className="listTasks__information">
			<span>ToDos: {tasksList.length}</span>
			<span>Finished: {finished}</span>
		</div>
		<ol className="tasks">
			{tasksList.map((task) => (
				<Task taskInfo={task} key={task.id}/>
			))}
		</ol>
		</section>
	);
}

export default ListTasks;
