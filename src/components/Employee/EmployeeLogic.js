import axios from 'axios';
import React,{useState,useEffect}  from 'react'

const EmployeeLogic = () => {

    // Below State store data comes from back-end.
  const [tblData, setTblData] = useState([]);
  const [id,setId] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [empAddress, setEmpAddress] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8001/displayData`).then((response) => {
      // console.log(response.data);
      setTblData(response.data);
    });
  }, []);

  const [isModelOpen,setIsModelOpen] = useState(false)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(name);
    console.log(age);
    console.log(empAddress);
    
        axios.post(`http://localhost:8001/addusers`, {
          name,
          age,
          empAddress,
        });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
    }
])

  return {
      tblData,
      setTblData,
      tblHeader,
      isModalVisible,
      showModal,
      handleOk,
      handleCancel,
      onFinish,
      onFinishFailed,
      name,setName,age,setAge,empAddress,setEmpAddress



  }
}

export default EmployeeLogic