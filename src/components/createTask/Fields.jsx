function Fields({ setTask, task }) {

	const handleValue = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value
		});
	};

	return (
		<>
			<fieldset className="task__container">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					className="addBarTitle"
					onChange={(e) => handleValue(e)}
					name="title"
					value={task.title}
					id="title"
				/>
				<label htmlFor="description">Description</label>
				<textarea
					type="text"
					className="addBarDescription"
					onChange={(e) => handleValue(e)}
					name="description"
					value={task.description}
					id="description"
				/>
			</fieldset>
		</>
	);
}

export default Fields;
