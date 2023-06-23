import { request } from "@/http";

import { useStore } from "vuex";

class Api {
  /**
   * Creation d'un nouveau fertilisant
   * @function
   * @param {object} form
   * @return promise
   */
  static async creerFertilisant(form) {
    const { data, status } = await request(
      {
        fertilisant: form.libelle,
        image: form.image,
      },
      "/senafic/fertilisants/add"
    );

    return new Promise((resolve, reject) => {
      if (status == 200 && data.reponse.status === "success") {
        resolve(true);
      } else reject(false);
    });
  }

  /**
   * Affichage de la liste des semences certifiées enregistrées
   * @callback data
   */
  static async voirFertilisants(callback) {
    const { data, status } = await request(null, "/senafic/fertilisants/view");
    if (status === 200) callback(data);
    else callback(null);
  }
}

export default Api;
