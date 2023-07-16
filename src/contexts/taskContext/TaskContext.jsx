import { createContext, useReducer } from "react";
import { TASK_INITIAL_STATE } from "./TaskState";
import { taskReducer } from "./TaskReducer";

export const TaskContext = createContext();

function TaskProvider({ children }) {
	const [tasksState, dispatch] = useReducer(taskReducer, TASK_INITIAL_STATE);

	return (
		<TaskContext.Provider
			value={{
				tasksState,
				dispatch,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}

export default TaskProvider;
