import { useContext, useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { TaskContext } from "../../contexts/taskContext/TaskContext";
import Fields from "../createTask/Fields";

function Editable ({ currentTask, setUpdate }) {
    const [ updatedTask, setUpdatedTask ] = useState({...currentTask});
    const { dispatch } = useContext(TaskContext);

    const handleSave = () => {
        console.log(updatedTask)
        dispatch({type: "UPDATE__TASK", payload: {...updatedTask}})
        setUpdate(true);
    }

    const handleCancel = () => {
        setUpdate(true);
    }

    return(
        <>
            <Fields setTask={setUpdatedTask} task={updatedTask}/>
            <div className="task__options">
                <button onClick={(e) => handleSave(e)}>
                    Save
                    <BsCheckCircleFill size={"20px"} />
                </button>
                <button onClick={(e)=> handleCancel(e)}>Cancel</button>
            </div>
        </>
    )
}

export default Editable;