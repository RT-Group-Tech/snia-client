import { nSQL } from "nano-sql";
import model from "../../models/dantic/ipa.model";
class IpaService {
  /*create & init database */
  static init(callback) {
    nSQL("ipa_table")
      .model(model)
      .connect()
      .then((__) => {
        let data = localStorage.getItem("ipa_table");
        if (data !== null || data !== undefined) {
          let fields = JSON.parse(data);
          nSQL("ipa_table")
            .query("upsert", fields)
            .exec()
            .then((_) => {
              nSQL("ipa_table")
                .query("select")
                .exec()
                .then((res) => {
                  localStorage.setItem("ipa_table", JSON.stringify(res));
                  callback(res);
                });
            });
        }
      });
  }

  /*Get all records @param callback:void(resutlt) */
  static getAll(callback) {
    nSQL("ipa_table")
      .query("select")
      .exec()
      .then((res) => {
        localStorage.setItem("ipa_table", JSON.stringify(res));
        callback(res);
      });
  }

  /*create new record to database. @params[input:Object, callback:void(result)]*/
  static create(input, callback) {
    nSQL("ipa_table")
      .query("upsert", input)
      .exec()
      .then((res) => {
        callback(res);
      });
  }
}

export default IpaService;
