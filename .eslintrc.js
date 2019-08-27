module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "prefer-destructuring": ["error", {
            "object": true,
            "array": false
        }],
        "no-unused-vars": ["error", {
            "argsIgnorePattern": "req|res|next|val"
        }],
        "object-property-newline": ["error", {
            "allowAllPropertiesOnSameLine": true
        }]
    }
};