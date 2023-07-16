export const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD__TASK":
			return {
				...state,
				tasksList: [...state.tasksList, action.payload],
			};

		case "DELETE__TASK":
			return {
				...state,
				tasksList: [...state.tasksList].filter(
					(task) => task.id != action.payload
				),
			};

		case "UPDATE__TASK":
			return {
				...state,
				tasksList: state.tasksList.map((task) => {
					if (task.id === action.payload.id) {
						task = action.payload;
						return task;
					}
					return task;
				}),
			};

		case "UPDATE__FINISHED":
			console.log(state.tasksList)
			return {
				...state,
				finished: [...state.tasksList]
					.map((task) => {
						if (task.id === action.payload.id) {
							task.done = action.payload.done;
							return task;
						}
						return task;
					})
					.filter((task) => task.done === true).length,
			};

		default:
			return state;
	}
};
