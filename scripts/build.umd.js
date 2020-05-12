const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { version, name, description } = require("../package.json");

const config = {
    mode: "production",
    entry: {
        [name]: ["./components/index.js"]
    },
    output: {
        library: name,
        libraryTarget: "umd",
        umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
        path: path.join(process.cwd(), "dist"),
        filename: "[name].min.js"
    },
    //react 和 react-dom 不打包
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
}

module.exports = config;