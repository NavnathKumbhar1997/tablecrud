import React, { createRef, useEffect,useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";

const { Item } = Form;

const Update = (props) => {

    const [UpdateTable,setUpdateTable] = useState([]);


    // const updateData = (id) =>{
    //     axios.put(`http://localhost:8001/updateUserData/${id}`,{id:id}).then((temp)=>{
    //       setUpdateTable(temp.data.id)

    //     })
    //   }
      const updateData = (id) =>{      
          axios.put(`http://localhost:8001/updateUserData/${id}`,{
              id:id,
            })
        }

  return (
      <div>
     
      <Form 
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
          <Input placeholder='name' onChange={(event)=>{setUpdateTable(event.target.value)}}/>
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
          <Input placeholder='age' onChange={(event)=>{setUpdateTable(event.target.value)}}/>
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
          <Input placeholder='address' onChange={(event)=>{setUpdateTable(event.target.value)}}/>
        </Item>
        <Item>
          <Button 
            style={{ marginLeft: 50, marginRight: 50 }}
            type="primary"
            htmlType="submit"
            onClick={updateData}
          >
            Update
          </Button>
        </Item>
      </Form>
    </div>
  );
};


export default Update;
