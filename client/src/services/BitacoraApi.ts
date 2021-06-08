import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.SERVER_URL;
axios.defaults.headers.common["user-id"] = config.USER_ID;
const BitacoraApi = {
  list: () => {
    return axios
      .get(`${config.SERVER_URL}bitacora`)
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

export default BitacoraApi;
