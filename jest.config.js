module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|cypress)[/\\\\]',
    'testUtils',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@/__tests__/(.*)': ['<rootDir>/__tests__/$1'],
    '@/pages/(.*)': ['<rootDir>/pages/$1'],
    '@/components/(.*)': ['<rootDir>/components/$1'],
    '@/lib/(.*)': ['<rootDir>/lib/$1'],
    '@/styles/(.*)': ['<rootDir>/styles/$1'],
  },
}
