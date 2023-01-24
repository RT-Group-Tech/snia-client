import { nSQL } from "nano-sql";
import model from "../../models/dantic/agent.model";
class AgentService {
  /*create & init database */
  static init(callback) {
    nSQL("agents_table")
      .model(model)
      .connect()
      .then((__) => {
        let data = localStorage.getItem("agents_table");
        if (data !== null || data !== undefined) {
          let fields = JSON.parse(data);
          nSQL("agents_table")
            .query("upsert", fields)
            .exec()
            .then((_) => {
              nSQL("agents_table")
                .query("select")
                .exec()
                .then((res) => {
                  localStorage.setItem("agents_table", JSON.stringify(res));
                  callback(res);
                });
            });
        }
      });
  }

  /*Get all records @param callback:void(resutlt) */
  static getAll(callback) {
    nSQL("agents_table")
      .query("select")
      .exec()
      .then((res) => {
        localStorage.setItem("agents_table", JSON.stringify(res));
        callback(res);
      });
  }

  /*create new record to database. @params[input:Object, callback:void(result)]*/
  static create(input, callback) {
    console.log(JSON.stringify(input));
    nSQL("agents_table")
      .query("upsert", input)
      .exec()
      .then((res) => {
        callback(res);
      });
  }
}

export default AgentService;
