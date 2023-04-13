import { request } from "@/http";

class Api {
  /**
   * Création nouveau secteur
   * @param {Array} forms
   * @param {void} callback
   */
  static async creerSecteur(forms, callback) {
    let len = forms.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const { data, status } = await request({
          key: "0bfa3afa59c17be9a2ac8469fc8f254c40571ce4",
          secteur: forms[i].secteur,
          ita_id: forms[i].ita_id,
        });
        console.log(JSON.stringify({ data, status }));
      }
      callback(true);
    }
    callback(false);
  }

  /**
   * Voir tous les secteurs créés dans le système pour un ita
   * @param {String} itaId
   * @param {void} callback
   */
  static async voirSecteurs(itaId, callback) {
    const { data, status } = await request({
      key: "6295c4afe14c6a48e908ab63dd25b4ea2f683759",
      ita_id: itaId,
    });
    let secteurs = data.result.reponse.data;
    if (status === 200) callback(secteurs);
    else callback([]);
  }
}

export default Api;
