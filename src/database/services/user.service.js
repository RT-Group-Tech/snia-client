import { nSQL } from "nano-sql";
import model from "../models/user.model";

class UserService {
  static init(callback) {
    nSQL("userdb")
      .model(model)
      .connect()
      .then((res) => {
        let data = localStorage.getItem("userdb");
        if (data !== null || data !== undefined) {
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

  static all(callback) {
    nSQL("userdb")
      .query("select")
      .exec()
      .then((res) => {
        localStorage.setItem("userdb", JSON.stringify(res));
        callback(res);
      });
  }

  static create(input, callback) {
    let data = {
      name: input.name,
      email: input.email,
      password: input.pwd,
    };
    nSQL("userdb")
      .query("upsert", data)
      .exec()
      .then((res) => {
        callback(res);
      });
  }
}

export default UserService;
