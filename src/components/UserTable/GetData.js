import React,{useState}from "react";
import { Table} from "antd";
import GetDataLogic from "./GetDataLogic";


const GetData = () => {
  let {
    tblData,
    tblHeader
  } = GetDataLogic();


  

  return <>
    <Table dataSource={tblData} columns={tblHeader} />;
  </>;
};

export default GetData;
