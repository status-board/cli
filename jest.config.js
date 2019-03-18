module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/test/helpers/',
    '<rootDir>/node_modules/',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test/**/*.(test|spec).(ts|tsx|js)',
  ],
};
