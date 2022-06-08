import React, { useState } from "react";
import axios from "axios";
import api from "../../services/api";

const UpdateLogic = (props) => {

    const [formValues, setFormValues] = useState()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [address, setAddress] = useState('')


    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }

      let handleSubmit = (record) => {
        console.log("clicked");
        console.log(record);
        setId(record.id)
        setName(record.name)
        setAge(record.age)
        setAddress(record.address)
        
    }

    const getSingleRecord =async (id) =>{
      await axios.get(`http://localhost:8001/findSingle/${id}`).then((data)=>{
        console.log(data);
      })
    }

 
  return {
    id,
    name,
    age,
    address,
    formValues,
    setFormValues,
    handleChange,
    handleSubmit
  }

}

export default UpdateLogic