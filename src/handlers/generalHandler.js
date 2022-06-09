import axios from "axios";

const getInitizlizedApi = () => {
  //creating manual axios
  return axios.create({
    baseURL: "http://localhost:8001/", //single url for everywhere
    responseType: "json", //content type
    withCredentials: false,
    timeout: 100000, //getting reponse time limit(to avoid infinte loop)
  });
};



const handleResponse = (response) => {
  //handling multiple response

  try {
    console.log(response, "check response data");

    const responseBodyJson = {};
    responseBodyJson.status = response.status; //response for status
    responseBodyJson.data = response.data; //response for data
    responseBodyJson.message = response.message; //response for message

    return responseBodyJson ? responseBodyJson : null; //compairing responses
  } catch (error) {
    console.log(error); //consolling error
  }
};


const get = (url, headers) => {
  //creating get method for fetching data
  return getInitizlizedApi() //calling axios
    .get(url, { headers }) //passsing url and header in get method
    .then(
      (response) => handleResponse(response), //?
      (error) => {
        throw error.response;
      }
    ); //?
};



const dbdelete = (url, headers) => {
  //creating get method for fetching data
  return getInitizlizedApi()
    .delete(url, { headers }) //passsing url and header in delete method
    .then(
      (response) => handleResponse(response),
      (error) => {
        throw error.response;
      }
    );
};

const post = (url, data, headers) => {
  //creating post method for posting data

  console.log(data, "Data post method"); //consoliing data and conformation message
  return getInitizlizedApi()
    .post(url, data, { headers }) //passsing url,data and header in post method
    .then(
      (response) => handleResponse(response),
      (error) => {
        throw error.response;
      }
    );
};

const put = (url, data, headers) => {
  //creating post method for posting data

  console.log(data, "Data post method"); //consoliing data and conformation message
  return getInitizlizedApi()
    .put(url, data, { headers })
    .then(
      (response) => handleResponse(response),
      (error) => {
        throw error.response;
      }
    );
};

export default { get, put, post, dbdelete, getInitizlizedApi }; //exporting all methods
