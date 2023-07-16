import CreateTask from "../../../components/createTask/CreateTask";
import ListTasks from "../../../components/tasks/ListTasks";
import TaskProvider from "../../../contexts/taskContext/TaskContext";
import "./tasksPage.css";

function TasksPage() {
	return (
		<section className="tasksPage">
			<TaskProvider>
				<CreateTask />
				<ListTasks />
			</TaskProvider>
		</section>
	);
}

export default TasksPage;
