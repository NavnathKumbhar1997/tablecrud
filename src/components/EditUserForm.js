import React, { createRef, useEffect,useState } from "react";
import { Input, Button, Form } from "antd";

const { Item } = Form;

const EditUserForm = (props) => {
   
  const formRef = createRef();

  const formSuccess = (datos) => {
    datos.id = props.currentUser.id;
    props.updateUser(datos);
  };

  const formError = (error) => {
    console.log(error);
  };

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
  };
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
      <Form
        name="form"
        onFinish={formSuccess}
        onError={formError}
        ref={formRef}
        {...formItemLayout}
        style={{ maxWidth: 400 }}
      >
        <Item
          label="Name: "
          name="name"
          rules={[
            {
              required: true,
              message: "Name is Required",
            },
          ]}
        >
          <Input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </Item>
        <Item
          label="Age :"
          name="age"
          rules={[
            {
              required: true,
              message: "Age is required",
            },
          ]}
        >
          <Input placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
        </Item>
        <Item
          label="Address :"
          name="address"
          rules={[
            {
              required: true,
              message: "Address is required",
            },
          ]}
        >
          <Input placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
        </Item>
        <Item>
          <Button 
            style={{ marginLeft: 50, marginRight: 50 }}
            type="primary"
            htmlType="submit"
          >
            Update
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default EditUserForm;
