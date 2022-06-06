import { Table } from "antd";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";

const GetData = () =>{

//    const dataSource = [
//   {
//     key: {},
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

{/* <Table dataSource={dataSource} columns={columns} />; */}
// // to get the data to the front end 
const [APIData, setAPIData] = useState([
    
]);


const test  = useEffect(() => {
    axios.get(`http://localhost:8001/displayData`)
        .then((response) => {
            
            console.log(response.data);
            setAPIData(response.data);
            return response.data;
            // APIData(response.data)

        })
}, []) 


return (
   <>
         {APIData.map((data) => {
        return (
    <Table
      dataSource={test.data}
      columns={columns}
      >
      </Table>
    )
 })}
 </>
)
}


export default GetData;

