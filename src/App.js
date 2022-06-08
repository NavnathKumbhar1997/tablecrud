import React from "react";
import { Layout, Row} from "antd";
import "antd/dist/antd.css";
import EmployeeDesign from "./components/Employee/EmployeeDesign";

function App(props) {

  let { Header , Content , Footer } = Layout

  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>My First Crud</h1>
      </Header>
      <Content>
       
          <EmployeeDesign/>
      
      </Content>

      <Footer></Footer>
    </Layout>
  );
}

export default App;
