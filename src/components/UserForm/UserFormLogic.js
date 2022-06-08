import React, { createRef, useEffect, useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";

const UserFormLogic = (props) => {
  
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  const formRef = createRef();
  const [disabled,setDisabled] = useState(true)
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
return {
    name,
    age,
    address,
    formRef,
    resetFields,
    formSuccess,
    postData,
    nameField,
    formError,
    formItemLayout,
    setAge,setAddress,
    disabled
}
}

export default UserFormLogic