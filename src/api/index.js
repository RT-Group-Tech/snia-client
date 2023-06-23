import { request } from "@/http";

class GlobalApi {

    /**
     * Fonction permettant de voir la liste des données collectées
     * @callback array
     */
    static async voirDonneesCollectes(callback) {
        const { data, status } = await request({
            key: "999e6e3f651b4b6fd7eb12acfcc8e2ca2a9c34fb",
        },"/collectes/all");

        let donneesCollectes = data.formulaires;
        if (status === 200) callback(donneesCollectes);
        else callback([]);
    }

    /**
     * Voir la liste des cultures
     * @callback array
     */
    static async voirCultures(callback) {
        const { data, status } = await request({
            key: "",
        },"/dantic/culture_url/viewculture");
        let cultures = data.cultures;
        if (status === 200) callback(cultures);
        else callback([]);
    }

    /* Voir les sujets enregistrés dans le systèmes */
    static async voirFormulairesSujets(callback) {
        const { data, status } = await request({
            key: "65bf8cb061d59e48bff8f64af71f640908f81103",
        },"/dantic/formulaire_url/viewsujet");
        if (status === 200) callback(data);
        else callback(false);
    }

  static async genererRaport(callback) {
    var data = {
      key: "9fceada2874804cd75ff649fc94b02de4e664dc8",
    };
    var res = await request(data,"/common/reporting");
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
        localStorage.setItem("userToken", JSON.stringify(data.reponse.data));
        resolve(data);
      } else {
        reject(false);
      }
    });
  }
}
export default GlobalApi;
