import React, { createRef, useEffect } from 'react'
import { Input, Button, Form } from 'antd';

const {Item} = Form;

const EditUserForm = (props) => {

    const formRef = createRef();

    const formSuccess = (datos) => {
        datos.id = props.currentUser.id
        props.updateUser(datos);
    }

    const formError = (error) => {
        console.log(error);
    }

    useEffect(() => { 
        formRef.current.setFieldsValue(props.currentUser); 
    });

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
                        message: "Enter your Name"
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Name is required"
                    />
                </Item>
                <Item
                    label="Age :"
                    name="age"
                    rules={[{
                        required: true,
                        message: "Enter Your Age"
                    }]}
                >
                    <Input
                        type="number"
                        placeholder="Age is required"
                    />
                </Item>
                <Item
                    label="Address :"
                    name="address"
                    rules={[{
                        required: true,
                        message: "Enter Your complete address"
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Address is required"
                    />
                </Item>
                <Item>
                    <Button style={{marginLeft: 50, marginRight: 50}} type="primary" htmlType="submit">Update</Button>
                </Item>
            </Form>
        </div>
    )
}

export default EditUserForm