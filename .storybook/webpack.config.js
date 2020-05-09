module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"), // 使用babel loader打包
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      }, 
      {
        loader: require.resolve("react-docgen-typescript-loader"), // 打包文档
        options: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }
            return true            
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx"); // 打包文件类型

  return config;
};
