import {useState} from "react";
import Todo from "./Todo";
import FormTodo from "./form-to-do/FormTodo";
import StartPage from "./start-page/StartPage"
import Cards from './card/Card';
import bgVideo from './video/Bonfire.mp4'

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Just example",
      isDone: false
    }
  ]);

  const mountForLenghtList = document.body.clientWidth < 768 ? 9 : 6;

  const addTodo = text => {
	if (todos.length < mountForLenghtList) {
		const newTodos = [...todos, { text }];
    	setTodos(newTodos);
	}
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
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
	  	<video autoPlay loop muted className="background__video">
		  	<source src={bgVideo} type="video/mp4"/>
		  </video>
       <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Cards
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}/>
            ))}
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
