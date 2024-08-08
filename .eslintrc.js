module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2015": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "local/enforce-foo-bar": "error",
    },
    "plugins": ["local"]
};
