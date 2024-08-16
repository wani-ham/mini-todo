import React, {useState} from 'react';
// import './styles/AppTodo.scss';

export default function AddTodo({addItem}) {
    const [todoItem, setTodoItem] = useState({
        title: ''
    });
    const onButtonClick = () => {
        addItem(todoItem);
        setTodoItem({
            title: '',
        })
    };
    return (
        <>
            <div className="AddTodo">
                <input 
                    type="text"
                    placeholder='Add your new todo'
                    value={todoItem.title}
                    onChange={(e) => setTodoItem({title: e.target.value})}
                ></input>
                <button onClick={{onButtonClick}}>Add</button>
            </div>
            
        </>
    );
}