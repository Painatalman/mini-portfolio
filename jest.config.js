module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsConfig: 'tsconfig.test.json',
      },
    ],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
