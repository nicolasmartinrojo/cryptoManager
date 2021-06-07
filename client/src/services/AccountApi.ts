import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/";
const AccountApi = {
  list: () => {
    return axios
      .get("account")
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
