import { request } from "@/http";

class Api {
  /**
   * Login
   * @param {Object} form
   * @param {void} callback
   */
  static async login(form, callback) {
    const user = {
      key: "cc0523cbb903908ddd19590e1e99dacf03ae41ae",
      identifiant: form.identifiant,
      pass: form.pass,
    };
    const { data, status } = await request(user);
    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * Création d'une Ipa
   * @param {Object} form
   * @param {void} callback
   */
  static async creerIpa(form, callback) {
    const { data, status } = await request({
      key: "2f53b23743d1f836a4da181578aa4b518f0a7294",
      province: form.province,
      total_population: form.total_population,
      superficie: form.superficie,
    });

    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * voir les ipas
   * @param {void} callback
   */
  static async voirIpas(callback) {
    const { data, status } = await request({
      key: "01b5cbf370c7cb6029604d06b8fdc80c90ea8ac1",
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création d'une Ita
   * @param {Object} form
   * @param {void} callback
   */
  static async creerIta(form, callback) {
    const { data, status } = await request({
      key: "41cd043dd54a65c79f59b415b71c0d36374d4678",
      ipa_id: form.ipa_id,
      ita: form.ita,
      province: form.province,
      total_population: form.total_population,
      superficie: form.superficie,
    });
    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * Voir les Itas
   * @param {void} callback
   */
  static async voirItas(callback) {
    const { data, status } = await request({
      key: "c93877c55c4ab3d7961672578263d6de728a3984",
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création
   * @param {Object} form
   * @param {void} callback
   */
  static async creerAgent(form, callback) {
    const { data, status } = await request({
      key: "702b7602260a75535560f1a21d698a9f51a808b9",
      nom_complet: form.nom_complet,
      email: form.email,
      telephone: form.telephone,
      pass: form.pass,
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Voir tous les agents
   * @param {void} callback
   */
  static async voirAgents(callback) {
    const { data, status } = await request({
      key: "9356560e3b9554c51aca9f7c997c4e369455e2a7",
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création d'une catégorie de culture
   * @param {Object} form
   * @param {void} callback
   */
  static async creerCategorie(form, callback) {
    const { data, status } = await request({
      key: "8ccd50b3e98abc0e27bec30c9f8c5ab90570ee1c",
      categorie: form.categorie,
    });
    if (status === 200) callback(data);
    else callback(false);
  }
}

export default Api;
