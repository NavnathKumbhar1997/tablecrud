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
    empAddress,
    setEmpAddress,
  } = EmployeeLogic();

  return (
    <>
      <Row>
        <Col>
          <Button type={"primary"} onClick={showModal}>
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table columns={tblHeader} dataSource={tblData} />
        </Col>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
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
              <Input value={name}  onChange={(e)=>{setName(e.target.value)}}/>
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
              <Input value={age}  onChange={(e)=>{setAge(e.target.value)}}/>
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
                value={empAddress}
              onChange={(e)=>{setEmpAddress(e.target.value)}}
              />
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </>
  );
};

export default EmployeeDesign;
