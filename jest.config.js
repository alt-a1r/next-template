const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!*.config.{js,ts}',
    '!*.setup.{js,ts}',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '^.+\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.ts',
    '^@/config/(.*)$': '<rootDir>/config/$1',
    '^@/models/(.*)$': '<rootDir>/models/$1',
    '^@/modules/(.*)$': '<rootDir>/modules/$1',
    '^@/ui': '<rootDir>/shared/ui',
    '^@/icons': '<rootDir>/shared/icons',
    '^@/utils': '<rootDir>/shared/utils',
    '^@/types': '<rootDir>/shared/types',
    '^@/hooks': '<rootDir>/shared/hooks',
    '^@/theme': '<rootDir>/shared/theme',
    '^@/components': '<rootDir>/shared/components',
    '^@/constants/(.*)$': '<rootDir>/shared/constants/$1',
    '^@/testIds': '<rootDir>/shared/testIds',
    '^@/api': '<rootDir>/api',
    '^@/mocks/(.*)$': '<rootDir>/__mocks__/$1',
    '^@/tests/(.*)$': '<rootDir>/__tests__/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.jsx'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
