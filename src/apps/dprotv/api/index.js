import { request } from "@/http";

class Api {
  /**
   * Creation d'un nouveau fertilisant
   * @function
   * @param {object} form
   * @return promise
   */
  static async creerProduitPhyto(form) {
    const { data, status } = await request(
      {
        titre: form.libelle,
        image: form.image,
      },
      "/dprotv/produits/add"
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
  static async voirProduitsPhyto(callback) {
    const { data, status } = await request(null, "/dprotv/produits/view");
    if (status === 200) callback(data);
    else callback(null);
  }
}

export default Api;
