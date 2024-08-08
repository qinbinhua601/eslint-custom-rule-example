module.exports = {
    "env": {
        "browser": true,
        // "esm": true,
        "commonjs": true,
        "es2015": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "local/enforce-foo-bar": "error",
        "local/no-cross-app-import": "error"
    },
    "plugins": ["local"]
};
