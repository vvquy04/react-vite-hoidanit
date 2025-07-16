import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import TodoNew from "./components/todo/TodoNew";
const App = () => {
  const hoidanit = "Quy";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  const addNewTodo = () => {
    alert("call me")
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={hoidanit} age={age} 
      data={data} addNewTodo={addNewTodo}
      />
      <img src={reactLogo} />
    </div>
  );
};

export default App;
