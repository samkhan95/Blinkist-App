/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*stories.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    ".story.ts",
    "<rootDir>/coverage",
    "<rootDir>/src/actions",
    "<rootDir>/src/reducers",
    "<rootDir>/src/data",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/src/actions",
    "<rootDir>/src/reducers",
    "<rootDir>/src/data",
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
};
