import './AddTaskForm.css'

const AddTaskForm = ({ currentTask, onInputChange, handleAddTask }) => {
    return (
        <>
            <input type="text"
                value={currentTask}
                onChange={onInputChange}
                placeholder="enter new task"
                className="inputForm" />
            <button onClick={handleAddTask}>Add</button>
        </>
    );
};
export default AddTaskForm;