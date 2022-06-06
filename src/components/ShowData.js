import axios from "axios";
import { Table } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { Button,Datatable } from "antd";

const ShowData = (props) => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {}, []);

  useEffect(() => {
    axios.get(`http://localhost:8001/displayData`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteData/${id}`).then(() => {
      getData();
    });
  };
  const getData = (e) => {
    e.preventdefault()
    axios.get(`http://localhost:8001/displayData`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  const setData = (datas) => {
    let { id, name, age, address } = datas;
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("address", address);
    // localStorage.setItem('Checkbox Value', checkbox)
  };

  return (
    <Table.Body>
      {APIData.map((data) => {
        return (
          <Table celled>
          <Table.Header>
      <Table.Row>
        {/* <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row style={{display:"flex"}}>
                <Table.Cell style={{padding:"8px 11px"}} >{data.name}</Table.Cell>
                <Table.Cell style={{padding:"8px 11px"}}>{data.age}</Table.Cell>
                <Table.Cell style={{padding:"8px 11px"}}>{data.address}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Edit</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            {/* <Datatable propertys={data}></Datatable> */}
          </Table>
        );
      })}
    </Table.Body>
  );
};

export default ShowData;
