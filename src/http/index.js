import axios from "axios";

let token = localStorage.getItem("userToken");
// create a new axios instance
var domain = "http://127.0.0.1/back-snia/";
//domain="https://backend.rtgroup-rdc.com/url/security_rtg";
domain="http://snia.verifixs.com";

const instance = axios.create({
  baseURL: domain,
  headers: {
    Authorization: ``,
  },
});

// before a request is made start the nprogress
instance.interceptors.request.use((config) => {
  //NProgress.start();
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use((response) => {
  //NProgress.done();
  return response;
});

export async function request(data, url = null) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then(function (result) {
        var data = result.data;
        let status = result.status;
        resolve({ data, status });
      })
      .catch((err) => reject(err));
  });
}
