import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Login from './Login';
// import './styles/App.scss';

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
          <Route path='/' element={<h1>Hello</h1>}/>
          {/* <Route path='/' element={!hasCoockie ? <Redirect to="/login" /> : <Redirect to="/todo" />s}/> */}
          <Route path='/login' element={<Login />}/>
          <Route path='register' element={<h1>register</h1>}/>
          <Route path='/mypage' element={<h1>mypage</h1>}/>
          <Route path='/todos' element={<AddTodo addItem={addItem}/>} />
            
                {/* {todoItems.map((item) => {
                  console.log("items >>> ", item);
                  return <Todo key={item.id} item={item}/> */}
            {/* })} */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
