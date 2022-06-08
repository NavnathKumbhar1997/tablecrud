import React, {useEffect, useState } from "react";
import { Space, Button} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import UpdateLogic from "../EditTable/UpdateLogic";


const GetDataLogic = () => {

    let {
        updateData,
        UpdateStudent,
        handleSubmit,
        handleChange,

    } = UpdateLogic();
  
    // Below State store data comes from back-end.
  const [tblData, setTblData] = useState([]);

  //delete data and get that after deleted using getData

  const [updatedTable,setUpdateTable] = useState()
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState(); 


  // Below state is used to store headers for Ant Design Table
  const [tblHeader, setTbleHeader] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
          
        <Space size="middle">   
        
          <Button
            onClick={()=>{handleSubmit(record)}}
            type={"primary"}
            size={"small"}
          >
            <EditOutlined style={{ fontSize: "15px",marginRight:"5px",padding:"10px" }} />
          </Button>
          <Button
            onClick={() => onDelete()}
            type={"danger"}
            size={"small"}
            danger
          >
            <DeleteOutlined style={{ fontSize: "15px" }} />
          </Button>
        
        </Space>
      ),
    },
  ]);

  
  const onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteData/${id}`)
 .then(() => {
    getData();
})
}

  const getData = (e) => {
    
    axios.get(`http://localhost:8001/displayData`).then((getData) => {
      setTblData(getData.data);
    });
  };


  useEffect(() => {
    axios.get(`http://localhost:8001/displayData`).then((response) => {
      // console.log(response.data);
      setTblData(response.data);
    });
  }, []);

  return {
    tblData,
    tblHeader,
    
  }
}

export default GetDataLogic