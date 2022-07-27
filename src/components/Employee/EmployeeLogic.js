import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import handler from "../../handlers/generalHandler"

const EmployeeLogic = () => {
  // Below State store data comes from back-end.
  const [tblData, setTblData] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [vaccineName,setVaccineName]=useState();
  const [vaccineNumber,setVaccineNumber] = useState();
  const [age, setAge] = useState();
  const [address, setEmpAddress] = useState();
  const [FVaccineDate, setFVaccineDate] = useState();
  const [SVaccineDate, setSVaccineDate] = useState();

  //below state used to set edit mode on click
  const [isEdit, setIsEdit] = useState(false);
  //to get the data and store in state
  useEffect(() => {
    handler.get("displayData",{}).then((response) => {
      setTblData(response.data);
      console.log(response);
    })
  }, []);

  //below state store modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const saveData = () => {
    handler.post(`addusers`, {
      name,
      age,
      address,
      vaccineName,vaccineNumber,FVaccineDate,SVaccineDate
    });
  };
  const updateData = () => {
    const rec = {
      id: id,
      name: name,
      address,
      age: age,
      vaccineName:vaccineName,vaccineNumber:vaccineNumber,
      FVaccineDate:FVaccineDate,SVaccineDate:SVaccineDate
    };
    updateEmp(rec);
  };

  // to insert the data onclick of ok button
  const handleOk = () => {
    setIsModalVisible(false);
    isEdit ? updateData() : saveData();
    getData();
  };

  //to delete single record from table
  let empDelData = (id) => {
    handler.dbdelete(`deleteData/${id}`).then(() => {
      getData();
    });
    return empDelData.data;
  };
  // to used to get the data after delete
  const getData = (e) => {
    handler.get(`displayData`).then((gData) => {
      setTblData(gData.data);
    });
  };

  //to update the table data
  let updateEmp = (rec) => {
    handler
      .put(`updateUserData/${rec.id}`, {
        name: rec.name,
        age: rec.age,
        address: rec.address,
      }).catch((ex) => console.error(ex.toJSON()));
    setId(rec.id);
    setName(rec.name);
    setAge(rec.age);
    setEmpAddress(rec.address);
    getData();
    return updateEmp.data;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [tblHeader, setTbleHeader] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vaccine Name",
      dataIndex: "Vaccine Name",
      key: "vaccineName",
    },
    {
      title: "Vaccine No",
      dataIndex: "Vaccine No",
      key: "Vaccine No",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "first Vaccine Date",
      dataIndex: "first Vaccine Date",
      key: "first Vaccine Date",
    },
    {
      title: "second Vaccine Date",
      dataIndex: "second Vaccine Date",
      key: "addsecond Vaccine Dateress",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setIsModalVisible(true);
              setIsEdit(true);
              console.log(record);
              setId(record.id);
              setName(record.name);
              setAge(record.age);
              setEmpAddress(record.address);
            }}
            type={"primary"}
            size={"small"}
          >
            <EditOutlined style={{ fontSize: "15px" }} />
          </Button>
          <Button
            onClick={() => {
              empDelData(record.id);
            }}
            type={"danger"}
            size={"small"}
          >
            <DeleteOutlined style={{ fontSize: "15px" }} />
          </Button>
        </Space>
      ),
    },
  ]);

  return {
    tblData,
    name,
    age,
    address,
    tblHeader,
    isModalVisible,
    isEdit,
    vaccineName,vaccineNumber,FVaccineDate,SVaccineDate,setVaccineName,setVaccineNumber,
    setFVaccineDate,setSVaccineDate,
    setIsEdit,
    showModal,
    setTblData,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    setName,
    setAge,
    setEmpAddress,
  };
};

export default EmployeeLogic;
