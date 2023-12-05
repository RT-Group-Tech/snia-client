<template>
    <div class="wrapper bubble-shadow" data-background-color="blue">
        <div class="choice-module h-100 w-100">
            <div class="container h-100 ">
                <div class="container d-flex h-100">
                    <div class="row my-auto w-75 mx-auto justify-content-center align-items-center">
                        <div class="col-md-12 mb-3">
                            <h1 class="text-center text-white animated zoomIn">Bienvenue agent <strong> <i
                                        class="icon-user mx-2"></i>{{
                                            user.nom_complet }} </strong>!
                            </h1>
                            <p class="text-center text-white animated fadeInUp">Veuillez-vous connecter au module adéquat
                                selon votre niveau d'accès</p>
                        </div>
                        <div class="col-3 col-sm-3 col-lg-3" v-for="(mod, index) in modules" :key="index">
                            <button class="card btn w-100 p-0 choice-card animated zoomIn" :disabled="!mod.enabled"
                                @click.prevent="() => toggleChoice(mod)">
                                <div class="card-body p-3 text-center">
                                    <div class="h1 m-0"><i class="icon-lock"></i></div>
                                    <div class="mb-3 title fw-mediumbold">{{ mod.name }}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modules',
    data()
    {
      return {
        moduleAccess:[]
      };
    },
    async mounted() {
        await this.$store.dispatch("auth/refreshLoggedUser");
        await this.$store.dispatch("getAvailableAccess");

    },

    computed: {
        user() {
            return this.$store.getters['auth/GET_USER']
        },
        modules() {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.user.access.access=this.user.access.access.toLocaleLowerCase();

          for(var i=0; i<this.$store.state.modules.length; i++)
          {
            let access = this.$store.state.modules[i].name.toLocaleLowerCase();

            if (access === this.user.access.access)
            {
              // eslint-disable-next-line vue/no-side-effects-in-computed-properties
              this.$store.state.modules[i].enabled = true;
            }
          }
            return this.$store.state.modules
        }

    },
    methods: {
        toggleChoice(choice) {
            let mod = choice.name.toLowerCase();
            if (this.user)
            {
                if (choice.enabled)
                {
                    if(mod.includes("ipa"))
                    {
                      mod="ipa";
                    }
                    try {
                        this.$router.replace({
                            name: `${mod}-secure-route`,
                        });
                    } catch (error) {
                        $.notify(
                            {
                                icon: "fas fa-info",
                                title: "Accès refusé!",
                                message: `Vous n'avez pas accès au module ${mod}`,
                            },
                            {
                                type: "danger",
                                placement: {
                                    from: "bottom",
                                    align: "right",
                                },
                                time: 5000,
                            }
                        );
                    }
                }
            }
        },

        triggerSubmit(e) {
            $('#myForm').submit((e) => {
                console.log(JSON.stringify(e.target.value));
            })
        },

        showModal() {
            let modal = $("#configModal");
            modal.modal('show');
        }
    },
}
</script>

<style scoped>
.choice-module {
    background-color: #1572E8;
    overflow-x: hidden;
    overflow-y: auto;
}

.choice-module .choice-card {
    transition: .3s ease-in-out;
}



.choice-module .choice-card:hover {
    background-color: #010f3c;
    border: none !important;
    box-shadow: 0px;
}

.choice-module .choice-card:hover .card-body {
    color: #ffffff !important;
}

.disabled {
    background-color: #dadadaeb !important;
    border: none;
    cursor: not-allowed !important;
}

.disabled:hover .card-body {
    color: #3e3c3c !important;
}
</style>

<style scoped src="@/assets/css/atlantis.css"></style>
