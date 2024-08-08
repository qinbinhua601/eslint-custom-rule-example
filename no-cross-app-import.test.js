// no-cross-app-import.test.js
const {RuleTester} = require("eslint");
const noCrossAppImport = require("./no-cross-app-import");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015, sourceType: 'module' }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-cross-app-import", // rule name
  noCrossAppImport, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: "import { rootStore } from \"@/doc/stores/index\"",
    }],
    // 'invalid' checks cases that should not pass
    invalid: [{
      code: "import { rootStore } from \"@/doc/stores/index\"",
      errors: 1,
    }],
  }
);

console.log("All tests passed!");