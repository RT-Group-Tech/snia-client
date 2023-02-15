import http from "@/http";

class ApiDantic {
  static async login(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({
        key: "cc0523cbb903908ddd19590e1e99dacf03ae41ae",
        identifiant: data.identifiant,
        pass: data.pass,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async createIpa(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({
        key: "2f53b23743d1f836a4da181578aa4b518f0a7294",
        province: data.province,
        total_population: data.total_population,
        superficie: data.superficie,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async allIpa(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({ key: "01b5cbf370c7cb6029604d06b8fdc80c90ea8ac1" })
      .then(function (response) {
        console.log(response);
      });
    callaback(data);
  }

  static async viewIpa(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({ key: "01b5cbf370c7cb6029604d06b8fdc80c90ea8ac1" })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async searchIpa(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({ key: "d05cbd9f38be24d77ef2cc1a2a87aa4d4f6df79f" })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async createIta(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({
        key: "41cd043dd54a65c79f59b415b71c0d36374d4678",
        ipa_id: data.ipa_id,
        ita: data.ita,
        province: data.province,
        total_population: data.total_population,
        superficie: data.superficie,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async searchIta(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({
        key: "d517e711d949d61ca1edd11ae9c3c5304f7b367d",
        word: data.word,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async viewIta(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({ key: "c93877c55c4ab3d7961672578263d6de728a3984" })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async createAgent(data, callback) {
    /*console.log(JSON.stringify(data));*/
    const { rep } = await http
      .post("", {
        key: "702b7602260a75535560f1a21d698a9f51a808b9",
        nom_complet: data.nom_complet,
        email: data.email,
        telephone: data.telephone,
        pass: data.pass,
      })
      .then(function (response) {
        console.log(response, "Créer");
      })
      .catch((err) => console.log("erreur de la requete", err, rep));
    callback(data);
  }

  static async allAgents(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({ key: "9356560e3b9554c51aca9f7c997c4e369455e2a7" })
      .then(function (response) {
        console.log(response);
      });
    callaback(data);
  }

  static async searchAgent(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .post({
        key: "147fe3aee2d03493399e5ca51ea16f11e2c08cd7",
        word: data.word,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async createCategorie(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({
        key: "8ccd50b3e98abc0e27bec30c9f8c5ab90570ee1c",
        categorie: data.categorie,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }

  static async createCulture(data, callback) {
    console.log(JSON.stringify(data));
    const { response } = await http
      .get({
        key: "18edab2a8b33f8b3c7cefbbb3478cb531d52f603",
        categorie: data.categorie,
      })
      .then(function (response) {
        console.log(response);
      });
    callback(data);
  }
}

export default ApiDantic;
