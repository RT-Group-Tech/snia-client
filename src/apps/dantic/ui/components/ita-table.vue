<template>
    <div class="table-responsive">
        <table id="ipa-datatables" class="display table table-striped table-hover">
            <thead>
                <tr>
                    <th>ITA</th>
                    <th>Nombre d'habitants</th>
                    <th>Superficie</th>
                    <th>Nombre d'agents</th>
                    <th>Province</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>IPA</th>
                    <th>Nombre d'habitants</th>
                    <th>Superficie</th>
                    <th>Nombre d'agents</th>
                    <th>Province</th>
                </tr>
            </tfoot>
            <tbody>
                <tr v-for="a in 10" :key="a">
                    <td>Kananga</td>
                    <td>2505</td>
                    <td>425km<sup>2</sup></td>
                    <td>250</td>
                    <td>Kasaï-central</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ItaExpandedList",
    mounted() {
        $('#ipa-datatables').DataTable({
            "language": {
                "paginate": {
                    "previous": "Précédent",
                    "next": "Suivant"
                },
                "lengthMenu": "Afficher _MENU_ enregistrements / page",
                "zeroRecords": "Aucune données trouvés !",
                "info": "Afficher _PAGE_ pour _PAGES_",
                "infoEmpty": "Aucune données à afficher !",
                "search": "Recherche"
            }
        });
    }
}
</script>