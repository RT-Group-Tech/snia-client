<template>
    <div class="row">
        <div class="col-md-12" >
            <div style="border:1px solid lightgray; margin:2px; padding:5px;">
                <label for="" style="font-family: 'Agency FB'; font-weight: bold;"> Sous champs :</label>
                <a href="#" class=" pull-right"><span class="fa fa-trash"></span></a>
                <div class="form-group">
                    <div class="input-group mb-2" >
                        <input type="text" placeholder="Détail"
                               class="form-control" required>
                        <select name="input_type"
                                class="custom-select form-control" id="input_type" required
                        >
                            <option value="">Sélectionner </option>
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
                            <button class="btn btn-primary btn-icon">
                                <i class="flaticon-add"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "sous-inputs"
    }
</script>

<style scoped>

</style>