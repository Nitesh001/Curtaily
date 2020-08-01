import React, { useState } from 'react';
import fire from '../config/Firebase'
import { Button, Modal, Form } from 'react-bootstrap';

const Login = () => {
    const [show, setShow] = useState(false);
    const login = (event) => {
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(event.target.email.value,event.target.password.value).then((res)=>{
            console.log(res);
            setShow(false)
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return ( 
        <>
            <Button variant="light" className="mr-4" onClick={() => setShow(true)}>Login</Button>
            <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Modal.Body>
           
        </Modal>
        </>
     );
}
 
export default Login;