import { request } from "@/http";

class GlobalApi {
  /**
   * Fonction permettant de voir la liste des données collectées
   * @callback array
   */
  static async voirDonneesCollectes(callback) {
    const { data, status } = await request(
      {
        key: "999e6e3f651b4b6fd7eb12acfcc8e2ca2a9c34fb",
      },
      "/collectes/all"
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
    const { data, status } = await request("/dantic/formulaire_url/viewsujet");
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

  static async login(agent, callback) {
    var form = {
      identifiant: agent.identifiant,
      pass: agent.pass,
    };

    var { data, status } = await request(
      form,
      "/connexion/connexion_url/login"
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
}
export default GlobalApi;
