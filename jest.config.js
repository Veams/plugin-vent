module.exports = {
  preset: 'ts-jest',
  verbose: true,
  name: 'ccc',
  moduleFileExtensions: ['js', 'ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: './coverage/',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/setupTests.js'],
};
