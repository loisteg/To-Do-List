import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import './formTodo.scss';

const FormTodo = ({ addTodo }) => {
    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Form.Group style={{width: '100%'}}>
                <Form.Label>
                    <b>Add Todo</b>
                </Form.Label>
                <Form.Control style={{borderRadius: '25px'}} type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"/>
            </Form.Group>

            <Button style={{'width': '33%'}} className="mt-4" variant="primary" type="submit">
                 Submit
            </Button>
         
    </Form>
    )
}

export default FormTodo;