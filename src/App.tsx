import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setToDos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setToDos([{ id: Math.random.toString(), text: text }]);
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
