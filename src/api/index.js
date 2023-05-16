import { request } from "@/http";

class GlobalApi {
  static async voirDonneesCollectes(callback) {
    const { data, status } = await request({
      key: "999e6e3f651b4b6fd7eb12acfcc8e2ca2a9c34fb",
    });
    let donneesCollectes = data.result.formulaires;
    if (status === 200) callback(donneesCollectes);
    else callback([]);
  }

  /* Voir les sujets enregistrés dans le systèmes */
  static async voirFormulairesSujets(callback) {
    const { data, status } = await request({
      key: "65bf8cb061d59e48bff8f64af71f640908f81103",
    });
    if (status === 200) callback(data);
    else callback(false);
  }
}
export default GlobalApi;
