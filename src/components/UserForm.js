import React, { createRef, useEffect, useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";
import api from "../services/api";

const { Item } = Form;

const UserForm = (props) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  const formRef = createRef();

  const resetFields = () => {
    formRef.current.resetFields();
  };

  const formSuccess = (datos) => {
    props.addUser(datos);
  };

  useEffect(() => {
    // formRef.current.resetFields();;
  });

  const formError = (error) => {
    console.log(error);
  };

  // insert data
  const postData = () => {
    axios.post(`http://localhost:8001/addusers`, {
      name,
      age,
      address,
    });
    formRef.current.resetFields();
  };
  const nameField = (e) => {
    setName(e.target.value);
  };

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

  return (
    <div>
      <Form
        name="form"
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
              message: "Name is required.",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={nameField}
          />
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
          <Input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Item>
        <Item
          label="Address :"
          name="address"
          rules={[
            {
              required: true,
              message: "address is required",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Enter completed address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Item>
        <Item>
          <Button
            style={{ marginLeft: 50, marginRight: 50 }}
            type="primary"
            htmlType="submit"
            onClick={postData}
          >
            Add
          </Button>
          <Button type="default" onClick={resetFields}>
            Reset
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default UserForm;
