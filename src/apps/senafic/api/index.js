import { request } from "@/http";

class Api {
    /**
     * Creation d'un nouveau fertilisant
     * @function
     * @param {object} form
     * @return promise
     */
    static async creerFertilisant(form) {
        const { data, status } = await request({
            key: "c3dbca6ab6c27ab4228f579cc4939e7b7a4b768a",
            fertilisant: form.libelle,
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
    static async voirFertilisant(callback) {
        const { data, status } = await request({
            key: "c367484f52a3b74989f77b3f8a1e2e108f044871",
        });
        if (status === 200 && data.status === "success") callback(data);
        else callback(null);
    }
}

export default Api;