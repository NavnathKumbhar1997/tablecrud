// import React, { createRef, useEffect, useState } from "react";
// import { Input, Button, Form } from "antd";
// import axios from "axios";
// import UpdateLogic from "./UpdateLogic";


// const { Item } = Form;

// const Update = (props) => {
 
//   let {
//     id,
//     name,
//     age,
//     address,
//     updateData
//   } = UpdateLogic();

//   return (
//     <div>
//       <Form style={{ maxWidth: 400 }}>
//         <Item
//           label="Name: "
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: "Name is Required",
//             },
//           ]}
//         >
//           <Input
//             placeholder="name"
            
//           />
//         </Item>
//         <Item
//           label="Age :"
//           name="age"
//           rules={[
//             {
//               required: true,
//               message: "Age is required",
//             },
//           ]}
//         >
//           <Input
//             placeholder="age"
           
//           />
//         </Item>
//         <Item
//           label="Address :"
//           name="address"
//           rules={[
//             {
//               required: true,
//               message: "Address is required",
//             },
//           ]}
//         >
//           <Input
//             placeholder="address"
            
//           />
//         </Item>
//         <Item>
//           <Button
//             style={{ marginLeft: 50, marginRight: 50 }}
//             type="primary"
//             htmlType="submit"
//             onClick={updateData}
//           >
//             Update
//           </Button>
//         </Item>
//       </Form>
//     </div>
//   );
// };

// export default Update;
