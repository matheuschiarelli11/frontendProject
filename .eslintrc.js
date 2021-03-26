module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".jsx", ".js"] },
        ],
        "import/prefer-default-export": "off",
    },
};
