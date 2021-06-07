import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/account";
const AccountApi = {
  list: () => {
    return axios
      .get("")
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
  deposit: (data: object) => {
    return axios
      .post("depositar", data)
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
  withdraw: (data: object) => {
    return axios
      .post("retirar", data)
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
  transfer: (data: object) => {
    return axios
      .post("transferir", data)
      .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};

export default AccountApi;
