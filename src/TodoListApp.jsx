import React, { useState } from 'react';
import Todolist from './Todolist';

const TodoListApp = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    };

    const deleteItes = (id) => {
        console.log("Deleted")

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className='main_div' >
                <div className="center_div">
                    <h1> ToDo List </h1><br />
                    <input type="text" placeholder='Add a Items...' value={inputList} onChange={itemEvent} />
                    <button onClick={listofItems}> + </button>
                    <ol>
                        {items.map((itemval, index) => (
                            <Todolist
                                key={index}
                                id={index}
                                text={itemval}
                                onClick={deleteItes}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default TodoListApp;


