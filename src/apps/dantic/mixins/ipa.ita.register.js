export default {
  name: "Ita-Ipa-Register-Mixin",

  data() {
    return {
      provinces: [
        "Bas-Uele",
        "Equateur",
        "Haut-Katanga",
        "Haut-Lomami",
        "Haut-Uele",
        "Ituri ",
        "Kasaï",
        "Kasaï central",
        "Kasaï oriental",
        "Kinshasa",
        "Kongo-Central",
        "Kwango",
        "Kwilu",
        "Lomami",
        "Lualaba",
        "Mai-Ndombe",
        "Maniema",
        "Mongala",
        "Nord-Kivu",
        "Nord-Ubangi",
        "Sankuru",
        "Sud-Kivu",
        "Sud-Ubangi",
        "Tanganyika",
        "Tshopo",
        "Tshuapa",
      ],
    };
  },

  mounted() {
    $("#provinceSelect").select2({
      theme: "bootstrap",
    });
  },
};
