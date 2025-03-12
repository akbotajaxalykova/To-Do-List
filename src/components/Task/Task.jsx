import './Task.css';
const Task = ({ task, deleteTask }) => {
    return (
        <div className='wrap'>
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                <img
                    src='basket.png'
                    alt='basket icon'
                    className='image' />
            </button>
        </div>
    );
};

export default Task;