import axios from "axios";
import base_url from "@/http/base_url";

let token = localStorage.getItem("userToken");
// create a new axios instance
var domain = base_url.url;

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

/***
 * Fait passer les requetes HTTP en GET ou en POST,
 * si data est defini c'est la requete POST qui sera lancée,
 * Autrement c'est la requete GET qui sera lancer
 * @param {String} [url=null]
 * @param {Object} data
 * @returns {data, status} data: http response if status equal 200 or 201
 */
export async function request(data = null, url = null)
{
  return new Promise((resolve, reject) => {
    if (data === null) {
      instance
        .get(url)
        .then((result) => {
          var data = result.data;
          let status = result.status;
          resolve({ data, status });
        })
        .catch((err) => reject(err));
    } else {
      instance
        .post(url, data)
        .then(function (result) {
            //console.log(result); console.clear();
          var data = result.data;
          let status = result.status;
          resolve({ data, status });
        })
        .catch((err) => reject(err));
    }
  });
}
