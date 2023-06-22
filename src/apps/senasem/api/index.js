import { request } from "@/http";

class Api {
    /**
     * Creation d'une nouvelle semence
     * @function
     * @param {object} form
     * @return promise
     */
    static async creerSemence(form) {
        const { data, status } = await request({
            key: "ac8c7763ba32fffa0d4c7d5832558b885935dd51",
            culture_id: form.culture_id,
            semence: form.libelle,
            image: form.image,
        },"/senasem/semences/add");
        console.clear(); console.log(data);
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
            key: "6ac78bbb1a254aba23d70859ebe9dd0848d3145e",
        });
        if (status === 200 && data.status === "success") callback(data);
        else callback(null);
    }
}

export default Api;