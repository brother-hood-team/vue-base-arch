const path = require("path");
const stencil = require("@stencil/webpack");
const stencilCollection = require("./stencil-register");

const CORE_PATH = path.join(__dirname, "src", "core");
const APPLICATION_PATH = path.join(__dirname, "src", "applications");
const SHARED_PATH = path.join(__dirname, "src", "shared");
const VALIDATOR_PATH = path.join(__dirname, "src", "core","validators");


module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {

    config.resolve.alias.set("@core", CORE_PATH);

    config.resolve.alias.set("@applications", APPLICATION_PATH);

    config.resolve.alias.set("@shared", SHARED_PATH);

    config.resolve.alias.set("@validator", VALIDATOR_PATH);

    config.plugin("stencil").use(stencil.StencilPlugin, [{ collections: stencilCollection }]);

    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag")
      .loader("graphql-tag/loader")
      .options({ exclude: /node_modules/ });
  },
};
