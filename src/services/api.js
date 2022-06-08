import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8001',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

// update information
// const updateTableData = async (payload) => {
//     let api = await axios
//         .put(`http://localhost:8001/updateUserData/${payload.id}`, {
//             name: payload.name,
//             age: payload.age,
//             address: payload.address
//         })
//         .catch((ex) => console.error(ex.toJSON()))
//     return api.data

// }
// const api  = {
//     apiData,
//     updateTableData
// }

export default api;