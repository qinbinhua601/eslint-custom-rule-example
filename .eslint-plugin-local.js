// eslint-plugin-example.js

const fooBarRule = require("./enforce-foo-bar");
const noCrossAppImport = require("./no-cross-app-import");
const plugin = { rules: { "enforce-foo-bar": fooBarRule, "no-cross-app-import": noCrossAppImport } };
module.exports = plugin;