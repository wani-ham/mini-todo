import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import AddTodo from './AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'todo1',
      done: false,
      user_num: 1
    },
    {
      id: 2,
      title: 'todo2',
      done: false,
      user_num: 2
    },
    {
      id: 3,
      title: 'todo3',
      done: false,
      user_num: 1
    },
  ]);
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    newItem.user_num = 1;
    setTodoItems([...todoItems, newItem]);
  }
  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      {todoItems.map((item) => {
        console.log("items >>> ", item);
        return <Todo key={item.id} item={item}/>
      })}
    </div>
  );
}

export default App;
