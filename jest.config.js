module.exports = {
  "preset": "jest-puppeteer",
  moduleFileExtensions: [
    'js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!node_modules/**',
    '!build/**',
    '!coverage/**',
    '!*.config.js',
  ],
};