import mainView from "../ui/index";

export default {
  name: "Parent-mixins",
  components: {
    mainView,
  },
  mounted() {
    this.loadFonts();
    this.$store.dispatch("refreshLoggedUser");
  },
  methods: {
    /*Load web font*/
    loadFonts() {
      WebFont.load({
        google: { families: ["Lato:300,400,700,900"] },
        custom: {
          families: [
            "Flaticon",
            "Font Awesome 5 Solid",
            "Font Awesome 5 Regular",
            "Font Awesome 5 Brands",
            "simple-line-icons",
          ],
          urls: ["assets/css/fonts.min.css"],
        },
        active: function () {
          sessionStorage.fonts = true;
        },
      });
    },
  },
};
