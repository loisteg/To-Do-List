import {useState} from "react";
import { Card } from 'react-bootstrap';
import Todo from "./Todo";
import FormTodo from "./FormTodo";
import StartPage from "./StartPage"

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Just example",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
      <StartPage/>
       {/* <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
      </div> */}
    </div>
    </>
  );
}

export default App;
