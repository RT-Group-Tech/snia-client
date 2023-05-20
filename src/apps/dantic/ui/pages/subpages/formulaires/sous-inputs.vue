<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card p-2 mb-0 mt-1 m-0">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <label for="" class="fw-bold"> Sous champs :</label>
                    <button type="button" class="btn btn-icon btn-sm btn-danger"><i class="icon-trash"></i></button>
                </div>
                <div v-for="sousInput in sousInputs" :key="sousInput" class="p-0">
                    <div class="input-group mb-2">
                        <input type="text" placeholder="Détail" v-model="sousInput.sous_input" class="form-control"
                            required>
                        <select name="input_type" v-model="sousInput.type" class="custom-select form-control"
                            id="input_type" required>
                            <option value="">Sélectionner </option>
                            <option value="text">Zone de texte</option>
                            <option value="select">Liste déroulante</option>
                            <option value="checkbox">Case à cocher</option>
                            <option value="file">Fichier</option>
                            <option value="date">Date</option>
                            <option value="number">Numéro</option>
                            <!--<option value="file"
                            >Zone de fichier</option>!-->
                        </select>*

                        <div class="input-group-append" @click.prevent="addSousInput">
                            <button type="button" class="btn btn-primary btn-icon">
                                <i class="flaticon-add"></i></button>
                        </div>
                    </div>

                    <!-- ajout de sous inputs options !-->
                    <div v-if="sousInput.type === 'select' || sousInput.type === 'checkbox'">
                        <div class="input-group mb-2">
                            <ul class="list-unstyled">
                                <li v-for="(option, index) in sousInput.options" :key="index">Option {{ index + 1 }}: {{
                                    option }}
                                </li>
                            </ul>

                        </div>
                        <div class="input-group mb-2">
                            <button @click.prevent="addOption(sousInput)" type="button"
                                style="background-color: transparent; border:1px solid black"><span
                                    class="fa fa-plus"></span> option</button>
                        </div>
                    </div>

                </div>
                <div v-if="canSave">
                    <button @click.prevent="saveSousChamps" class="btn btn-success btn-sm mr-2" type="submit"><span
                            class="fa fa-save"></span> Sauvegarder </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "sous-inputs",
    data() {
        return {
            sousInputs: [
                {
                    sous_input: "",
                    type: "",
                    options: []
                }
            ],
            canSave: true
        }
    },
    props: {
        index: Number
    },
    methods: {
        addOption(sousInput) {
            /**
             * Display the swal to user input option.
             */
            this.$swal({
                text: "Entrez une ooption",
                input: 'text',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Entrer",
                cancelButtonText: "Annuler",
                confirmButtonColor: 'green',
                cancelButtonColor: 'red'
            }).then((result) => {

                if (result.isConfirmed) {
                    sousInput.options.push(result.value)
                }

            });
        }
        ,
        addSousInput() {
            this.sousInputs.push({
                sous_input: "",
                type: ""
            });
        },
        saveSousChamps() {
            this.canSave = false;
            this.$emit("onsave",
                this.sousInputs, this.index);
        }
    }
}
</script>

<style scoped></style>