module.exports = {
    roots: ['<rootDir>/src'],
    // setupFiles: ["<rootDir>/src/setupTests.ts"],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/jest.file.js'
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ],
    moduleNameMapper: {
        '\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/api/interfaces/*.ts', '!src/serviceWorker.ts'],
    moduleDirectories: ['node_modules', 'src']
}
