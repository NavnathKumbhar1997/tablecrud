import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('id'))
            setName(localStorage.getItem('name'));
            setAge(localStorage.getItem('age'));
            setAddress(localStorage.getItem('address'))
    }, []);
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='age' value={age} onChange={(e) => setAge(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}