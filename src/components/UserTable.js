import React, { Fragment,useState,useEffect } from "react";
import { Table, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";

const UserTable = (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => <p style={{ margin: "auto" }}>{text} years old</p>,
      sorter:(data1,data2)=>{
        return data1.age>data2.age
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters:[
        {text:'Pune',value:true},
        {text:'Anand',value:false}
      ],
      onFilter:(value,data)=>{
        return data.Pune ===value
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">   
          <Button
            onClick={() => {
              props.editUser(record);
            }}
            type={"primary"}
            size={"small"}
          >
            <EditOutlined style={{ fontSize: "15px" }} />
          </Button>
          <Button
            onClick={() => {
              props.deleteUser(record.id);
            }}
            type={"primary"}
            size={"small"}
            danger
          >
            <DeleteOutlined style={{ fontSize: "15px" }} />
          </Button>
        </Space>
      ),
    },
  ];

  
  
  
  return (
    <Fragment>
      {props.users.length > 0 ? (
        
        <Table
          dataSource={props.users}
          columns={columns}
          rowKey="id"
          scroll={{ x: 200 }}
          sticky
          pagination={true}
        />
        

      ) : (
        <p>There's no data around here </p>
          
      )}
     
       
      
  
       
     
 
    </Fragment>
  );
};

export default UserTable;
