import { nSQL } from "nano-sql";
import model from "../models/user.model";
import GlobalApi from "../../global/index"

class UserService {
  /*create & init database */
  static async init(callback) {
    nSQL("userdb")
      .model(model)
      .connect()
      .then((res) => {
        let data = localStorage.getItem("userdb");
        if (data !== null || data !== undefined || data.length === 0) {
          let fields = JSON.parse(data);
          nSQL("userdb")
            .query("upsert", fields)
            .exec()
            .then((res) => {
              nSQL("userdb")
                .query("select")
                .exec()
                .then((res) => {
                  localStorage.setItem("userdb", JSON.stringify(res));
                  callback(res);
                });
            });
        }
      });
  }

  /*Get all records @param callback:void(resutlt) */
  static async all(callback) {
    nSQL("userdb")
      .query("select")
      .exec()
      .then((res) => {
        localStorage.setItem("userdb", JSON.stringify(res));
        callback(res);
      });
  }

  /***create new record to database. @param [input:Object, callback:void(result)]*/
  static async create(input, callback) {
    nSQL("userdb")
      .query("upsert", input)
      .exec()
      .then((res) => {
        callback(res);
      });
  }

  static login(user, callback)
  {
      GlobalApi.login();
    nSQL("userdb")
      .query("select")
      .where([
        ["email", "=", user.email],
        "AND",
        ["password", "=", user.password],
      ])
      .exec()
      .then((res) => {
        let access = false;
        if (res.length > 0) {
          localStorage.setItem("userToken", JSON.stringify(res[0]));
          access = true;
        } else {
          access = false;
        }
        callback(access, res);
      });
  }
}

export default UserService;
