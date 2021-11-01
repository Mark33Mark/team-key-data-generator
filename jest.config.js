
/*

The testMatch value is an array of global patterns that Jest 
will use to detect the test files. In our case, we are specifying 
that any file inside the __tests__ directory or anywhere in our 
project that has either a .spec.js or .test.js extension should 
be treated as a test file.

The testEnvironment value represents the environment in which Jest 
is running, that is, whether in Node.js or in the browser.

https://stackabuse.com/using-mocks-for-testing-in-javascript-with-jes/

*/

module.exports = {
    testMatch: [
        "<rootDir>/**/__tests__/*.(spec|test).js",
        "<rootDir>/**/*.(spec|test).js"
    ],
    testEnvironment: "node",
    collectCoverage: true,
    coverageReporters: ["html"],
    reporters: [ 
        "default",
            [
            "./node_modules/jest-html-reporter",
            {
                "pageTitle": "Test Report for the team-key-data-generator application."
            }
        ]
    ]
};