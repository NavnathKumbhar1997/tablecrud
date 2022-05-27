import React, { createRef, useEffect } from 'react'
import { Input, Button, Form } from 'antd';

const {Item} = Form;

const UserForm = (props) => {

    const formRef = createRef();
    
    const resetFields = () => {
        formRef.current.resetFields()
    }
    
    const formSuccess = (datos) => {
        props.addUser(datos);
    }

    useEffect(() => { 
        formRef.current.resetFields();; 
    });

    const formError = (error) => {
        console.log(error);
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 12,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 4,
            },
            sm: {
                span: 20,
            },
        },
    }

    return (
        <div>
            <Form 
                name="form"
                onFinish={formSuccess}
                onError={formError}
                ref={formRef}
                {...formItemLayout}
                style={{maxWidth: 400}}
            >
                <Item
                    label="Name: "
                    name="name"
                    rules={[{
                        required: true,
                        message: "Name is required."
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Enter Your Name"
                    />
                </Item>
                <Item
                    label="Age :"
                    name="age"
                    rules={[{
                        required: true,
                        message: "Age is required"
                    }]}
                >
                    <Input
                        type="number"
                        placeholder="Enter your age"
                    />
                </Item>
                <Item
                    label="Address :"
                    name="address"
                    rules={[{
                        required: true,
                        message: "address is required"
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Enter completed address"
                    />
                </Item>
                <Item>
                    <Button style={{marginLeft: 50, marginRight: 50}} type="primary" htmlType="submit">Add</Button>
                    <Button type="default" onClick={resetFields}>Reset</Button>
                </Item>
            </Form>
        </div>
    )
}

export default UserForm