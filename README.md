# Codewars

Challenges from [Codewars](https://www.codewars.com), adding [testing with Mocha and Chai](https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877).

## Challenges

### Credit Card Mask

  - Code : [maskify.js](src/creditCardMask/maskify.js)

  - Test: [maskify-test.js](tests/maskify-test.js)

  - [Other solutions](src/creditCardMask/otherSolutions.md)

## How to add testing

- Install mocha:
```
npm install mocha -g
```

- Create the package.json file:
```
touch package.json

echo {} > package.json
```
- Install chai:
```
npm install chai --save-dev
```

- Add in package.json:

```
"scripts": {
  "test": "mocha tests/*-test.js"
}
```

- Add the test and execute:

```
node run test
```