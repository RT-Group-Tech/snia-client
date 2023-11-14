import { request } from "@/http";

class GlobalApi {

  static async editAgent(data,callback)
  {
    var res=await request(data,"/agents/update");

    callback(res);
  }

  /**
   * Fonction permettant de voir la liste des données collectées
   * @callback array
   */
  static async voirDonneesCollectes(callback,filter)
  {
    var url="/collectes/all";
    if(filter!==undefined)
    {
      url+="?f=1";

      if(filter.from!==undefined && filter.from.length>1)
      {
        url+="&from="+filter.from+"&to="+filter.to;
      }

      if(filter.status!==undefined && filter.status!==null)
      {
        url+="&status="+filter.status;
      }
    }
    const { data, status } = await request(
      {
        key: "999e6e3f651b4b6fd7eb12acfcc8e2ca2a9c34fb",
      },
      url
    );
    let donneesCollectes = data.formulaires;
    if (status === 200) callback(donneesCollectes);
    else callback([]);
  }

  /**
   * Voir la liste des cultures
   * @callback array
   */
  static async voirCultures(callback) {
    const { data, status } = await request(
      {
        key: "",
      },
      "/dantic/culture_url/viewculture"
    );
    let cultures = data.reponse.data;
    if (status === 200) callback(cultures);
    else callback([]);
  }

  /* Voir les sujets enregistrés dans le systèmes */
  static async voirFormulairesSujets(callback) {
    const { data, status } = await request(
      null,
      "/dantic/formulaire_url/viewsujet"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  static async genererRaport(callback) {
    var data = {
      key: "9fceada2874804cd75ff649fc94b02de4e664dc8",
    };
    var res = await request(data, "/common/reporting");
    console.log(res);
    callback(res.data);
  }

  /**
   *
   * Boite de connexion au système
   * @param {Object} agent,
   * @param {*} callback
   */
  static async login(agent) {
    var form = {
      identifiant: agent.identifiant,
      pass: agent.pass,
    };

    var url="collectes/all";
    url="/connexion/connexion_url/login";
    var { data, status } = await request(
      form,
      url
    );
    return new Promise((resolve, reject) => {
      if (status === 200) {
        if (data.error === undefined) {
          localStorage.setItem("userToken", JSON.stringify(data.reponse.data));
        }
        resolve(data);
      } else {
        reject(false);
      }
    });
  }

  /**
   *
   * Reset user account password
   * @param {*} user,
   * @param {Boolean} connected: check si le user le fait en étant connecté
   */
  static async resetPassword(user) {
    console.log(JSON.stringify(user));
    let form = {
      agent_id: user.agent_id,
      current_pass: user.current_pass,
      new_pass: user.new_pass,
    };
    let { data, status } = await request(form, "/agents/password");
    let success = data.reponse.status === "success";
    console.log(data);
    return new Promise((resolve, reject) => {
      if (status === 200 && success) {
        resolve(data);
      } else {
        reject(null);
      }
    });
  }

  /**
   * send otp
   * @param {*} mail
   */
  static async handleResetPass(user) {
    let form = {
      identifiant: user.email,
    };
    let { data, status } = await request(form, "/agents/password/recover");
    return new Promise((resolve, reject) => {
      let success = data.reponse.status === "success";
      if (status === 200 && success) {
        resolve(data);
      } else {
        reject(null);
      }
    });
  }

  static async checkOtp(user) {
    let form = {
      agent_id: user.agent_id,
      otp: user.otp,
    };
    let { data, status } = await request(form, "/agents/password/checkotp");
    return new Promise((resolve, reject) => {
      let success = data.reponse.status === "success";
      if (status === 200 && success) {
        resolve(data);
      } else {
        reject(null);
      }
    });
  }

  static async updatePassword(user) {
    let form = {
      agent_id: user.agent_id,
      new_pass: user.new_pass,
    };
    let { data, status } = await request(form, "/agents/password/update");
    return new Promise((resolve, reject) => {
      let success = data.reponse.status === "success";
      if (status === 200 && success) {
        resolve(data);
      } else {
        reject(null);
      }
    });
  }

  /**
   * Signaler et porter une correction sur un champs de données collectées
   * @param {*} form
   * @returns promise
   */
  static async signalerDonnee(form) {
    var form = {
      collecte_detail_id: form.collecte_detail_id,
      correction: form.correction,
    };
    var { data, status } = await request(form, "/collectes/corrections");
    let success = data.reponse.status === "success";
    return new Promise((resolve, reject) => {
      if (status === 200 && success) {
        resolve(data);
      } else {
        reject(null);
      }
    });
  }

  static async validateCollecte(data,callback)
  {
    var res=await request(data,"/collectes/validate")
    callback(res);
  }

  static async getAvailableAccess(callback,from=null)
  {
    var res;
    if(from!==null)
    {
      res=await request(null,"/dantic/access?config");
    }
    else
    {
      res=await request(null,"/dantic/access");
    }
    callback(res.data);
  }
}
export default GlobalApi;
