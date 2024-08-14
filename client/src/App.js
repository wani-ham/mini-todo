import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router >
      <div className="App">
        <Routes>
          <Route path='/'>

          </Route>
          <Route path='/mypage'>

          </Route>
          <Route path='/todos'>
            <AddTodo addItem={addItem}/>
                {todoItems.map((item) => {
                  console.log("items >>> ", item);
                  return <Todo key={item.id} item={item}/>
            })}
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
