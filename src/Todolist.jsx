
const Todolist = (props) => {
    return (
        <div className='todo_style'>
            <i className="fa fa-times" aria-hidden="true" onClick={() => {
                props.onClick(props.id);
            }}></i>
            <li>{props.text}</li>
        </div>
    );
};
export default Todolist;
