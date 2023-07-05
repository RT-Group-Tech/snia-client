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
    const { data, status } = await request(user, "/connexion/connexion_url");
    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * Création d'une Ipa
   * @param {Object} form
   * @param {void} callback
   */
  static async creerIpa(form, callback) {
    const { data, status } = await request(
      {
        key: "2f53b23743d1f836a4da181578aa4b518f0a7294",
        code_ipa: form.code_ipa,
        province: form.province,
        superficie: form.superficie,
        longitude: form.longitude,
        latitude: form.latitude,
      },
      "/dantic/ipa_url/safeguardIpa"
    );

    console.clear();
    console.log(data);

    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * voir les ipas
   * @param {void} callback
   */
  static async voirIpas(callback) {
    const { data, status } = await request(
      {
        key: "01b5cbf370c7cb6029604d06b8fdc80c90ea8ac1",
      },
      "/dantic/ipa_url/viewIpa"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création d'une Ita
   * @param {Object} form
   * @param {void} callback
   */
  static async creerIta(form, callback) {
    const { data, status } = await request(
      {
        key: "41cd043dd54a65c79f59b415b71c0d36374d4678",
        ipa_id: form.ipa_id,
        ita: form.ita,
        province: form.province,
        code_ita: form.code_ita,
        superficie: form.superficie,
        longitude: form.longitude,
        latitude: form.latitude,
      },
      "/dantic/ita_url/safeguardIta"
    );
    if (status === 200) callback(data);
    else callback(false);
  }
  /**
   * Voir les Itas
   * @param {void} callback
   */
  static async voirItas(callback) {
    const { data, status } = await request(
      {
        key: "c93877c55c4ab3d7961672578263d6de728a3984",
      },
      "/dantic/ita_url/viewIta"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * voir les itas relatives  à l'Ipa sélectionnée
   * @param {String} ipaId
   * @param {void} callback
   */
  static async voirItasDeIpa(ipaId, callback) {
    const { status, data } = await request(
      {
        key: "c42806c710889ad890b10fb6357d7fc58b04df05",
        ipa_id: ipaId,
      },
      "/dantic/ipa_url/viewItaById"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création
   * @param {Object} form
   * @param {void} callback
   */
  static async creerAgent(form, callback) {
    const { data, status } = await request(
      {
        key: "702b7602260a75535560f1a21d698a9f51a808b9",
        nom_complet: form.nom_complet,
        fonction_publique_status: form.statut,
        fonction: form.fonction,
        grade: form.grade,
        sexe: form.sexe,
        date_naissance: form.date_naissance,
        numero_reference: form.numero_reference,
        email: form.email,
        telephone: form.telephone,
        pass: form.pass,
        access: form.access,
      },
      "/dantic/agent_url/safeguardAgent"
    );
    console.clear();
    console.log(data);
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Voir tous les agents
   * @param {void} callback
   */
  static async voirAgents(callback) {
    const { data, status } = await request(
      {
        key: "9356560e3b9554c51aca9f7c997c4e369455e2a7",
      },
      "/dantic/agent_url/viewAgent"
    );
    let agents = data.reponse;
    if (status === 200) callback(agents);
    else callback(false);
  }

  /**
   * Création d'une catégorie de culture
   * @param {Object} form
   * @param {void} callback
   */
  static async creerCategorie(form, callback) {
    const { data, status } = await request(
      {
        key: "8ccd50b3e98abc0e27bec30c9f8c5ab90570ee1c",
        categorie: form.categorie,
      },
      "/dantic/culture_url/safeguardcategorie"
    );
    console.clear();
    console.log(data);
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Voir toutes categories cultures
   * @param {void} callback
   */
  static async voirCategories(callback) {
    const { data, status } = await request(
      {
        key: "141b6053fe7e3046487d72f92a30437e5ba0d1a4",
      },
      "/dantic/culture_url/viewcategories"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création d'une culture
   * @param {Object} form
   * @param {void} callback
   */
  static async creerCulture(form, callback) {
    const { data, status } = await request(
      {
        culture_categorie_id: form.culture_categorie_id,
        nom: form.nom,
        detail: form.detail,
        valeur: form.valeur,
      },
      "/dantic/culture_url/safeguardculture"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /* VOir les formulaires enregistrés dans le systèmes */
  static async voirFormulaires(callback) {
    const { data, status } = await request(
      {
        key: "44daa070bcc93a83a0af787630620c35f3b4be6f",
      },
      "/dantic/formulaire_url/viewformulaire"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création sujet
   * @param {String} sujet
   * @param {void} callback(response)
   */
  static async creerSujet(sujet, callback) {
    const { data, status } = await request(
      {
        key: "d5e8d0821cc11475c8c07786b186f4deb8b4f26c",
        sujet: sujet,
      },
      "/dantic/formulaire_url/safeguardsujet"
    );
    if (status === 200) callback(data);
    else callback(false);
  }

  /**
   * Création formulaire
   * @param {String} titre
   */
  static async creerFormulaire(titre, callback) {
    const { data, status } = await request(
      {
        key: "f038d6de71414e2247f926d7089c794ab5e4bdab",
        titre: titre,
      },
      "/dantic/formulaire_url/safeguardformulaire"
    );

    let res = data.reponse;
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
    const { data, status } = await request(
      {
        key: "92a5dd7af82ba6c03661201730b46457954776c3",
        formulaire_id: form.formulaire_id,
        sujet_id: form.sujet_id,
      },
      "/dantic/formulaire_url/linkformulaire"
    );
    let res = data.reponse;
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
    const { data, status } = await request(
      {
        key: "7b3f20ae607014e48bdc1e8a02ed5f17ec7de9af",
        formulaire_id: form.formulaire_id,
        section: form.section,
      },
      "/dantic/formulaire_url/safeguardsection"
    );
    let res = data.reponse;
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
    console.log(JSON.stringify(form));
    let options = [];
    if (form.options !== undefined) {
      form.options.forEach((el) => {
        options.push(el.input_option);
      });
    }
    console.log(options.toString());
    const { data, status } = await request({
      key: "87e4e76f05ddf374ca292f25d6f53115f5f15eb3",
      formulaire_section_id: form.formulaire_section_id,
      input: form.input,
      input_type: form.input_type,
      options: options.toString(),
    });
    //console.log("Terminate on ", JSON.stringify(data));
    let res = data.reponse;
    //console.log(res);
    return new Promise((resolve) => {
      if (status === 200 && res.status === "success") {
        /**
         * Send options & sousInputs.
         */
        if (form.options !== undefined && form.options.length > 0) {
          Api.saveInputOptions(res.formulaire_input_id, form.options);
        }
        resolve(data);
      }
    });
  }

  /**
   * Enregistrer chaque option.
   * @param formulaireInputId
   * @param options
   * @returns {Promise<void>}
   */
  static async saveInputOptions(formulaireInputId, options) {
    var data = {
      key: "3a912dbce826b33c2a47c1fd42e3c4a06f488156",
      formulaire_input_id: formulaireInputId,
    };
    console.log("####Save sous options", JSON.stringify(options));
    for (var i = 0; i < options.length; i++) {
      data.input_option = options[i].input_option;
      var res = await request(data);

      var reponse = res.data.reponse;
      console.log(JSON.stringify(reponse));
      if (reponse.status !== undefined && reponse.status === "success") {
        /**
         * Save sous inputs si nécessaire.
         */
        if (options[i].sous_inputs !== undefined) {
          console.log("####Save sous options start");
          await Api.saveSousInputs(
            reponse.formulaire_input_option_id,
            options[i].sous_inputs
          );
        }
      }
    }
  }

  static async saveSousInputs(formulaireInputOptionId, sous_inputs) {
    var data = {
      key: "7f113d48e98e7bba0ecab83fdbd6e3d2ff3b3c3c",
      formulaire_input_option_id: formulaireInputOptionId,
    };
    console.log("####save sous inputs options");
    for (var i = 0; i < sous_inputs.length; i++) {
      data.sous_input = sous_inputs[i].sous_input;
      data.type = sous_inputs[i].type;

      var res = await request(data);
      //console.log(res);
      var reponse = res.data.reponse;
      console.log(JSON.stringify(reponse));
      if (reponse.status !== undefined && reponse.status === "success") {
        if (
          sous_inputs[i].sous_options !== undefined &&
          sous_inputs[i].sous_options.length > 0
        ) {
          /**
           * Enregistrer les options des sous inputs si nécessaires.
           */
          console.log("####save sous inputs options start");
          await Api.saveSousInputOptions(
            reponse.formulaire_sous_input_id,
            sous_inputs[i].sous_options
          );
        }
      }
    }
  }

  /**
   * Enregistrer les options d'un sous champ.
   * @param formulaireSousInputId
   * @param options
   * @returns {Promise<void>}
   */
  static async saveSousInputOptions(formulaireSousInputId, sous_options) {
    var data = {
      key: "fb71b7ba4037aba288e227ccfe974a8fc3e5c109",
      formulaire_sous_input_id: formulaireSousInputId,
    };

    for (var i = 0; i < sous_options.length; i++) {
      data.sous_input_option = sous_options[i].sous_input_option;
      var res = await request(data);
      //console.log(data); console.log(res);
      var reponse = res.data.reponse;
    }
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
            for (let j = 0; j < forms.inputs.length; j++) {
              let content = forms.inputs[j];
              content.formulaire_section_id = formulaire_section_id;
              let inputsRes = await this.creerFormulaireSectionDetails(content);
            }
          }
        }
        callback(true);
      }
    }
  }

  /**
   * Modification section formulaire
   * @param {Object} sectionData
   * @param {resolve, reject} true|false
   */
  static async modifierSectionFormulaire(s) {
    console.log("input length", s.inputs.length, JSON.stringify(s));
    let req1 = await request({
      key: "42f39eeec46be85329dc54480a9a2e72ba3a5653",
      formulaire_section_id: s.formulaire_section_id,
      formulaire_id: s.formulaire_id,
      section: s.section,
    });
    /* console.log("section update", JSON.stringify(req1)); */
    if (req1.status === 200) {
      for (let i = 0; i < s.inputs.length; i++) {
        let input = s.inputs[i];
        /* let opts = []; */
        /* if (input.options !== undefined) {
                                                                                                          input.options.forEach((el) => {
                                                                                                            opts.push(el.input_option);
                                                                                                          });
                                                                                                          console.log(opts.toString());
                                                                                                        } */
        if (input.formulaire_input_id === undefined) {
          input.formulaire_section_id = s.formulaire_section_id;
          let fieldRes = await this.creerFormulaireSectionDetails(input);
          console.log("Nouveau champs=>", JSON.stringify(fieldRes));
        } else {
          var req2 = await request({
            key: "f895191d72dc1488483a26c0f9dbd93b3a405fc8",
            formulaire_input_id: input.formulaire_input_id,
            formulaire_section_id: s.formulaire_section_id,
            input: input.input,
            input_type: input.input_type,
          });
          console.log("input update", JSON.stringify(req2));
        }
      }
      return true;
    }
    return false;
  }
  static async supprimerFormulaire(formulaireId, callback) {
    let { data, status } = await request({
      key: "e464b90fb62cb10624551926bb58084884905ba3",
      formulaire_id: formulaireId,
    });
    let res = data.result.reponse.status;
    console.log(JSON.stringify(data));
    if (status == 200 && res === "success") callback(true);
    else callback(false);
  }

  static async editFormTitre(data) {
    data.key = "a306375b18af9454030614b49285fcc3e1361376";
    await request(data);
  }

  static async refreshDashboard(state) {
    let danticDashboard = {
      itasCount: state.itas.length,
      ipasCount: state.ipas.length,
      agentsCount: state.agents.length,
    };
    return new Promise((resolve, reject) => {
      resolve(danticDashboard);
    });
  }
}

export default Api;
