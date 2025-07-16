import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deletedTodo = (id) => {
    const newTodo = todoList.filter(item => item.id != id)
    setTodoList(newTodo)
  }
  const randomIntFromInterval = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
      <TodoData  
      todoList={todoList}
      deletedTodo={deletedTodo}
      />
    :
    <img src={reactLogo} />
   }
      
      
      
    </div>
  );
};

export default App;
