module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules"],
  testRegex: "(/__tests__/.+\\.(test|spec))\\.[jt]sx?$",
  transform: {
    "^.+\\.tsx?$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-typescript",
          "@babel/preset-react",
          [
            "@babel/preset-env",
            {
              targets: {
                node: "current",
              },
            },
          ],
        ],
      },
    ],
  },
};
