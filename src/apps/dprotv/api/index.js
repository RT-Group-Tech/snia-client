import { request } from "@/http";

class Api {
  /**
   * Creation d'un nouveau fertilisant
   * @function
   * @param {object} form
   * @return promise
   */
  static async creerProduitPhyto(form) {
    const { data, status } = await request({
      key: "",
      titre: form.libelle,
      image: form.image,
    });
    return new Promise((resolve, reject) => {
      if (status == 200 && data.status === "success") {
        resolve(true);
      } else reject(false);
    });
  }

  /**
   * Affichage de la liste des semences certifiées enregistrées
   * @callback data
   */
  static async voirProduitsPhyto(callback) {
    const { data, status } = await request({
      key: "",
    });
    if (status === 200 && data.status === "success") callback(data);
    else callback(null);
  }
}

export default Api;
