/* const { defineConfig } = require("@vue/cli-service"); */

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/snia-client/" : "/",
};

/* module.exports = defineConfig({
  transpileDependencies: true,
}); */