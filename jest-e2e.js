module.exports = {
    preset: 'jest-puppeteer',
    globals: {
        URL: 'https://www.google.de'
    },
    testMatch: [
        '**/e2e/**/*.test.js'
    ],
    testPathIgnorePatterns: [
        'src'
    ],
}