export default {
  name: "File-upload-mixin",

  methods: {
    upload(event, renderFile, fileSet) {
      fileSet = this.$refs.fichier.files[0];
      let file = event.target.files[0];
      if (file.size > 1048576) {
        alert("Desolé! cette image est invalide");
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.img = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
