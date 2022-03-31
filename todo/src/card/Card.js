import { Card } from "react-bootstrap";
import Todo from "../Todo";

import './card.scss';


const Cards = ({todo, index, markTodo, removeTodo}) => {

    return (
        <Card className="mb-3" style={{borderRadius: '15px'}} >
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
     )
}

export default Cards;