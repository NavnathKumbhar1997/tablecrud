import React from "react";
import { Button, Col, Row, Table, Modal, Input, Form } from "antd";
import EmployeeLogic from "./EmployeeLogic";

const EmployeeDesign = () => {
  let {
    tblData,
    setTblData,
    tblHeader,
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    name,
    setName,
    age,
    setAge,
    address,
    setEmpAddress,
    isEdit,
      setIsEdit,
  } = EmployeeLogic();

  return (
    <>
      <Row>
        <Col>
          <Button
            type={"primary"}
            onClick={showModal}
            style={{ margin: "20px" }}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={tblHeader}
            dataSource={tblData}
            style={{ marginLeft: "20px" }}
          />
        </Col>
        <Modal
          title={isEdit ? "Update Data" : "Add New Data"}
          visible={isModalVisible}
          onOk={handleOk}
          okText={isEdit ? "Update":"Save"}
          onCancel={handleCancel}
        >
          <div>
            <Input
              label="Name"
              value={name}
              name="name"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={age}
              name="age"
              placeholder="Enter Your age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={address}
              name="address"
              placeholder="Enter Your address"
              onChange={(e) => {
                setEmpAddress(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
          </div>
          {/* <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="text"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input value={name} name="name"  onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Item>
            <Form.Item
              label="Age"
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input value={age} name="age"  onChange={(e)=>{setAge(e.target.value)}}/>
            </Form.Item>
            <Form.Item
              label="Address"
              name="textt"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input
                value={address}
                name="address"
              onChange={(e)=>{setEmpAddress(e.target.value)}}
              />
            </Form.Item>
          </Form> */}
        </Modal>
      </Row>
    </>
  );
};

export default EmployeeDesign;
