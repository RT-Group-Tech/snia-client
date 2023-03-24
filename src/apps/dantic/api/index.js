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
   * voir les itas relatives  à l'Ipa sélectionnée
   * @param {String} ipaId
   * @param {void} callback
   */
  static async voirItasDeIpa(ipaId, callback) {
    const { status, data } = await request({
      key: "c42806c710889ad890b10fb6357d7fc58b04df05",
      ipa_id: ipaId,
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
    let agents = data.result.reponse;
    if (status === 200) callback(agents);
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

  /* Voir les sujets enregistrés dans le systèmes */
  static async voirFormulairesSujets(callback) {
    const { data, status } = await request({
      key: "65bf8cb061d59e48bff8f64af71f640908f81103",
    });
    if (status === 200) callback(data);
    else callback(false);
  }
  /* VOir les formulaires enregistrés dans le systèmes */
  static async voirFormulaires(callback) {
    const { data, status } = await request({
      key: "806fea571a3efd2a88285b43100ffaf3b6bdb699",
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création sujet
   * @param {String} sujet
   * @param {void} callback(response)
   */
  static async creerSujet(sujet, callback) {
    const { data, status } = await request({
      key: "d5e8d0821cc11475c8c07786b186f4deb8b4f26c",
      sujet: sujet,
    });
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création formulaire
   * @param {String} titre
   */
  static async creerFormulaire(titre, callback) {
    const { data, status } = await request({
      key: "f038d6de71414e2247f926d7089c794ab5e4bdab",
      titre: titre,
    });

    let res = data.result.reponse;
    return new Promise((resolve) => {
      if (status === 200 && res.status === "success")
        resolve({ formulaire_id: res.datas });
    });
  }

  /**
   * Lier formulaire au sujet
   * @param {Object} form
   * @param {void} callback(response)
   */
  static async lierFormulaireToSubject(form) {
    const { data, status } = await request({
      key: "92a5dd7af82ba6c03661201730b46457954776c3",
      formulaire_id: form.formulaire_id,
      sujet_id: form.sujet_id,
    });
    let res = data.result.reponse;
    return new Promise((resolve) => {
      if (status === 200 && res.status === "success") resolve(data);
    });
  }

  /**
   * Création section formulaire au sujet
   * @param {Object} form
   * @param {void} callback(response)
   */
  static async creerSectionFormulaire(form) {
    const { data, status } = await request({
      key: "7b3f20ae607014e48bdc1e8a02ed5f17ec7de9af",
      formulaire_id: form.formulaire_id,
      section: form.section,
    });
    let res = data.result.reponse;
    return new Promise((resolve) => {
      if (status === 200 && res.status === "success")
        resolve({ formulaire_section_id: res.datas });
    });
  }

  /**
   * Création Formulaire section Details
   * @param {Object} form
   * @param {void} callback(response)
   */
  static async creerFormulaireSectionDetails(form) {
    const { data, status } = await request({
      key: "87e4e76f05ddf374ca292f25d6f53115f5f15eb3",
      formulaire_section_id: form.formulaire_section_id,
      detail: form.detail,
      valeur: form.valeur,
    });
    console.log("Terminate on ", JSON.stringify(data));
    let res = data.result.reponse;
    return new Promise((resolve) => {
      if (status === 200 && res.status === "success") resolve(data);
    });
  }

  /**
   * Configuration globale du formulaire
   * @param {Object} formulaireData
   * @param {void} callback(response)
   */
  static async configurerFormulaire(formulaireData, callback) {
    let { formulaire_id } = await this.creerFormulaire(formulaireData.titre);
    if (formulaire_id !== undefined || formulaire_id !== null) {
      let liaisonReqData = {
        formulaire_id: formulaire_id,
        sujet_id: formulaireData.sujet_id,
      };
      let liaisonRes = await this.lierFormulaireToSubject(liaisonReqData);
      /* check formulaire_sujet link success*/
      if (liaisonRes.result.reponse.status === "success") {
        for (let i = 0; i < formulaireData.sections.length; i++) {
          let forms = formulaireData.sections[i];

          let f = {
            section: forms.section,
            formulaire_id: formulaire_id,
          };
          let { formulaire_section_id } = await this.creerSectionFormulaire(f);

          if (
            formulaire_section_id !== undefined ||
            formulaire_section_id !== null
          ) {
            for (let j = 0; j < forms.contents.length; j++) {
              let content = forms.contents[j];
              content.formulaire_section_id = formulaire_section_id;
              let contentsRes = await this.creerFormulaireSectionDetails(
                content
              );
            }
          }
        }
        callback(true);
      }
    }
  }
}

export default Api;
