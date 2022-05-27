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
                        message: "Name is Required"
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Enter your Name"
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
                        placeholder="Enter Your Age"
                    />
                </Item>
                <Item
                    label="Address :"
                    name="address"
                    rules={[{
                        required: true,
                        message: "Address is required"
                    }]}
                >
                    <Input
                        type="text"
                        placeholder="Enter Your complete address"
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