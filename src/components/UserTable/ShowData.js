import axios from "axios";
// import { Table } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Update from "../EditTable/Update";

const ShowData = (props) => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {}, []);

  useEffect(() => {
    axios.get(`http://localhost:8001/displayData`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  //delete data and get that after deleted using getData
  const onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteData/${id}`).then(() => {
      getData();
    });
  };
  const getData = (e) => {
    
    axios.get(`http://localhost:8001/displayData`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  // const updateData = (id) =>{
  //   const 

  //   axios.put(`http://localhost:8001/updateUserData/${id}`,{newData:newData,id:id})
  // }

  //update data
  const setData = (datas) => {
    // let { id, name, age, address } = datas;
    // localStorage.setItem("id", id);
    // localStorage.setItem("name", name);
    // localStorage.setItem("age", age);
    // localStorage.setItem("address", address);
    //   // localStorage.setItem('Checkbox Value', checkbox)
  };

  return (
    <div>
      <Table></Table>
   
    <Table.Body>
      {APIData.map((data) => {
        return (
          <Table celled>
            <Table>
              <Table.Row style={{ display: "flex" }}>
                <Table.Cell style={{ padding: "8px 11px" }}>
                  {data.name}
                </Table.Cell>
                <Table.Cell style={{ padding: "8px 11px" }}>
                  {data.age}
                </Table.Cell>
                <Table.Cell style={{ padding: "8px 11px" }}>
                  {data.address}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={()=>updateData(data.id)}
                    type={"primary"}
                    size={"small"}
                  >
                    <EditOutlined style={{ fontSize: "15px" }} />
                  </Button>

                  {/* <Button >Edit</Button> */}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => onDelete(data.id)}
                    type={"danger"}
                    size={"small"}
                  >
                    <DeleteOutlined style={{ fontSize: "15px" }} />
                  </Button>
                  {/* <Button >Delete</Button> */}
                </Table.Cell>
              </Table.Row>
            </Table>
            {/* <Datatable propertys={data}></Datatable> */}
          </Table>
        );
      })}
    </Table.Body>
    </div>
  );
};

export default ShowData;
