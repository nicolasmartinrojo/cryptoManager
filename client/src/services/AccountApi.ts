import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.SERVER_URL;
axios.defaults.headers.common["user-id"] = config.USER_ID;

type OperacionReturn = {
  success: boolean;
  error?: string;
};

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
  deposit: (data: object) => {
    return axios.post("account/depositar", data).then(function (response) {
      return response.data;
    });
  },
  withdraw: (data: object) => {
    return axios
      .post("account/retirar", data)
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
    return axios.post("account/transferir", data).then(function (response) {
      // handle success
      return response.data;
    });
  },
};
export type { OperacionReturn };
export default AccountApi;
