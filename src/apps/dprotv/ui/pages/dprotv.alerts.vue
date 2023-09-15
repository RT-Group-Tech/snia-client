<template>
    <div class="main-panel">
        <div class="bg-primary2 pt-4 pb-5">
            <div class="container text-white py-2">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <h1 class="mb-3">Alertes Phytosanitaires</h1>
                    </div>

                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="page-inner">
                <div class="row full-height">
                    <div class="col-md-12">
                        <div>
                            <div class="w-100" style="height: 600px;">
                                <l-map :useGlobalLeaflet="false">
                                    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
                                </l-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
export default {
    name: 'AlertsPage',
    components: {
        LMap,
        LGeoJson,
    },
    data() {
        return {
            geojson: {
                type: "FeatureCollection",
                features: [
                    // ...
                ],
            },
            geojsonOptions: {
                // Options that don't rely on Leaflet methods.
            },
        };
    },
    async beforeMount() {
        // HERE is where to load Leaflet components!
        const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

        // And now the Leaflet circleMarker function can be used by the options:
        this.geojsonOptions.pointToLayer = (feature, latLng) =>
            circleMarker(latLng, { radius: 8 });
        this.mapIsReady = true;
    },
}
</script>