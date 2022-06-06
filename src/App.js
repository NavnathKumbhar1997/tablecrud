import React, { useState } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import EditUserForm from "./components/EditUserForm";
import GetData from "./components/GetData";
import { Layout, Row, Col, Table } from "antd";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import ShowData from "./components/ShowData";
import Update from "./components/Update";
function App() {
  const { Header, Footer, Content } = Layout;

  const dataSource = [
    {
      id: uuidv4(),
      name: "Navanth",
      age: 25,
      address: "Pune Maharashtra",
    },
    {
      id: uuidv4(),
      name: "Kirtiraj",
      age: 26,
      address: "Anand Gujarat",
    },
    {
      id: uuidv4(),
      name: "Raj",
      age: 24,
      address: "Hydrabad",
    },
  ];

  const [users, setUsers] = useState(dataSource);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    age: null,
    address: null,
  });

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      age: user.age,
      address: user.address,
    });
  };

  const updateUser = (user) => {
    setEditing(false);
    setUsers( 
      users.map((val) => {
        return val.id === user.id ? user : val;
      })
    );
  };
//   const updateAPIData = () => {
//     axios.put(`http://localhost:8001/updateUserData/:id`, {
//         name,
//          age,
//          address
// 	})
// }

  const deleteUser = (id) => {
    const usersFiltered = users.filter((item, i) => {
      return item.id !== id;
    });
    setUsers(usersFiltered);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>My First Crud</h1>
      </Header>
      <Content>
        <br />
        <br />
        <Row justify="space-around">
          <Col xs={20} sm={14} md={12} lg={8}>
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setEditing={setEditing}
                  updateUser={updateUser}
                  currentUser={currentUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <UserForm addUser={addUser} />
              </div>
            )}
          </Col>
          <Col xs={20} sm={20} md={16} lg={12}>
            <h2>View Users</h2>
            {/* <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            /> */}
            <ShowData/>
              {/* <GetData/> */}
              {/* <Update/> */}
          </Col>
        </Row>
      </Content>

      <Footer></Footer>
    </Layout>
  );
}

export default App;
