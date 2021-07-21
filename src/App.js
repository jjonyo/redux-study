import "./App.css";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

function App() {
  return (
    <div>
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
