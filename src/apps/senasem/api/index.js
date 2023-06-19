import http from "@/http";

class Api {
  /**
   * Creation d'une nouvelle semence
   * @function
   * @param {object} form
   * @return promise
   */
  static async creerSemence(form) {
    const { data, status } = await request({
      key: "",
      culture_id: form.culture_id,
      semence: form.libelle,
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
  static async voirSemences(callback) {
    const { data, status } = await request({
      key: "",
    });
    if (status === 200 && data.status === "success") callback(data);
    else callback(null);
  }
}

export default Api;
