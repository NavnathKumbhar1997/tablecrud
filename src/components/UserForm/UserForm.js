import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import UserFormLogic from "./UserFormLogic";
import UpdateLogic from "../EditTable/UpdateLogic";

const { Item } = Form;

const UserForm = () => {

  let {
    resetFields,
    formSuccess,
    postData,
    nameField,
    formError,
    formItemLayout,
    setAge,setAddress,
    disabled
  } = UserFormLogic();


  let {
      name,
      age,address,
      updateData,
      formValues,
    setFormValues,
    handleChange,
    handleSubmit,
    
    } = UpdateLogic();
  

  return (
    <div>
   
      <Form
        name="form"
        onError={formError}
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
          />
        </Item>
        <Item>
        {disabled === true ? (
          <Button
            style={{ marginLeft: 50, marginRight: 50 }}
            type="primary"
            htmlType="submit"
            onClick={postData}
          >
            Add
          </Button>):(
            <Button
            style={{ marginLeft: 50, marginRight: 50 }}
            type="primary"
            htmlType="submit"
            onClick={updateData}
          >
            Update
          </Button>
          )}
          <Button type="default" onClick={resetFields}>
            Reset
          </Button>
         
        </Item>
      </Form>
    
    </div>
  );
  
};


export default UserForm;
