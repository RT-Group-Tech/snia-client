<template>
    <teleport to='body'>
        <bs-modal title="Configuration formulaire" id="configModal" size="modal-xl">
            <template #body-content>
                <fieldset
                    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; border-radius: 5px;"
                    class="p-1 pt-0  mb-2">
                    <div class="row pb-2 px-2">
                        <!-- Formulaire liaison avec le sujet -->
                        <div class="col-md-6">
                            <div>
                                <label class="fw-bold mb-1">Formulaire titre <sup class="text-danger">*</sup></label>
                                <input type="text" placeholder="Entrer le titre du formulaire..." class="form-control"
                                    required>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div>
                                <label class="fw-bold mb-1">Sélectionner un sujet de liaison <sup
                                        class="text-danger">*</sup></label>
                                <select class="form-control custom-select" id="defaultSelect" required>
                                    <option selected>Sélectionner un sujet</option>
                                    <option selected>Sélectionner un sujet</option>
                                    <option selected>Sélectionner un sujet</option>
                                </select>
                            </div>
                        </div>


                        <!-- End formulaire liaison -->
                    </div>
                </fieldset>

                <group-caption :title="`Section ` + (index + 1)" v-for="(section, index) in sections" :key="index">
                    <template #actions>
                        <button v-if="index === 0" class="btn btn-icon btn-sm btn-light btn-rounded"
                            @click.prevent="sections.push({ model: '' })"> <i
                                class="flaticon-add text-primary"></i></button>
                        <button v-else class="btn btn-icon btn-sm btn-light btn-rounded"
                            @click.prevent="sections.splice(index, 1)"> <i class="icon-trash text-danger"></i></button>
                    </template>
                    <template #content>
                        <div class="row m-0">
                            <!-- Formulaire section titre -->
                            <div class="col-md-12">
                                <div class="mb-1">
                                    <label class="fw-bold mb-1">Section titre <sup class="text-danger">*</sup></label>
                                    <input type="text" class="form-control" placeholder="Entrer le titre de la section..."
                                        required>
                                </div>
                            </div>
                            <!-- End Formulaire section titre -->

                            <!-- Formulaire section contents -->
                            <div class="col-md-12">
                                <div>
                                    <label class="fw-bold mb-1">Section contenus/Champs <sup
                                            class="text-danger">*</sup></label>
                                    <div class="input-group mb-2" v-for="(champ, index) in champs" :key="index">
                                        <input type="text" placeholder="Libellé" v-model="champ.model" class="form-control"
                                            required>
                                        <select name="input_type" @change="selectChanged" class="custom-select form-control"
                                            id="input_type" required>
                                            <option value="">Sélectionner un type de champs</option>
                                            <option value="text">Zone de texte</option>
                                            <option value="select">Liste déroulante</option>
                                            <option value="checkbox">Case à cocher</option>
                                            <option value="file">Fichier</option>
                                            <option value="date">Date</option>
                                            <option value="number">Numéro</option>
                                            <!--<option value="file"
                                                    >Zone de fichier</option>!-->
                                        </select>
                                        <div class="input-group-append">
                                            <button title="Ajouter un champs" v-if="index === 0"
                                                @click.prevent="champs.push({ model: '' })" data-toggle="tooltip"
                                                class="btn bg-grey2 btn-icon">
                                                <i class="flaticon-add text-primary"></i></button>
                                            <button title="Effacer ce champs" v-else
                                                @click.prevent="champs.splice(index, 1)" data-toggle="tooltip"
                                                class="btn bg-grey2 btn-icon">
                                                <i class="icon-trash text-danger"></i></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Formulaire section contents -->
                        </div>
                    </template>
                </group-caption>
            </template>
            <template #footer-content>
                <button type="button" class="btn btn-success"> <i class="flaticon-check"></i> Soumettre la
                    configuration</button>
            </template>
        </bs-modal>
    </teleport>
    <bs-modal id="optionsModal" title="Entrer les options">
        <template #body-content>
            <div v-for="(opt, index) in options" :key="index">
                <div class="input-group mb-2">
                    <input type="text" v-model="opt.model" placeholder="Entrer une option..." class="form-control" required>
                    <div class="input-group-append">
                        <button class="btn btn-icon bg-grey2" @click.prevent="options.push({ model: '' })"
                            v-if="index === 0">
                            <i class="flaticon-add text-primary"></i></button>
                        <button v-else class="btn btn-icon bg-grey2" @click.prevent="options.splice(index, 1)">
                            <i class="icon-trash text-danger"></i></button>
                    </div>

                </div>
                <bs-popover title="Configuration sous champs" toggle-class="btn-outline-dark btn-sm mb-2"
                    toggle-icon="flaticon-add" toggle-label="Ajouter champs">
                    <template #content>
                        <div class="input-group mb-2" v-for="(c, i) in sousChamps" :key="i">
                            <input type="text" v-model="c.model" class="form-control" placeholder="Sous champs libellé">
                            <div class="input-group-append" id="button-addon1">
                                <button v-if="i === 0" class="btn btn-icon bg-grey2"
                                    @click.prevent="sousChamps.push({ model: '' })" type="button">
                                    <i class="flaticon-add text-primary"></i>
                                </button>
                                <button v-else class="btn btn-icon bg-grey2" @click.prevent="sousChamps.splice(i, 1)"
                                    type="button">
                                    <i class="icon-trash text-danger"></i>
                                </button>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                            <button class="btn btn-primary mt-1 mr-2 flex-fill text-uppercase">
                                Valider & sauvegarder</button>
                            <button class="btn btn-dark text-uppercase mt-1" @click.prevent="closePopover">Fermer</button>
                        </div>
                    </template>
                </bs-popover>
            </div>

        </template>
        <template #footer-content>
            <button type="button" class="btn btn-primary mr-2"> <i class="flaticon-add"></i> Soumettre la
                Valider les options</button>
        </template>
    </bs-modal>
</template>

<style scoped src="@/assets/css/atlantis.css"></style>
<script>

export default {
    name: 'FormulaireCongigModal',

    data() {
        return {
            sections: [{ model: '' }],
            options: [],
            champs: [{ model: '' },],
            sousChamps: [{ model: '' }]
        }
    },

    mounted() {
        this.$initBsTooltip();
    },

    methods: {
        closePopover() {
            $('.bs-popover-auto').popover('hide');
        },
        selectChanged(event) {
            let value = event.target.value;
            if (value.includes('select') || value.includes('checkbox')) {
                this.options = [];
                this.options.push({ model: '' });
                $('#optionsModal').modal('show');
            }
        },

        closeOptionsModal() {
            $('optionsModal').modal('hide');
        }
    }
}
</script>

