# Codewars

Challenges from [Codewars](https://www.codewars.com), adding [testing with Mocha and Chai](https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877).

## Run tests

```
npm install
```

```
npm run test
```


## Challenges

### Credit Card Mask

  - Code : [maskify.js](src/creditCardMask/maskify.js)

  - Test: [maskify-test.js](tests/maskify-test.js)

  - [Other solutions](src/creditCardMask/otherSolutions.md)

### Disemvowel Trolls

  - Code : [disemvowel.js](src/disemvowelTrolls/disemvowel.js)

  - Test: [disemvowel-test.js](tests/disemvowel-test.js)

### Two to One

  - Code : [longest.js](src/twoToOne/longest.js)

  - Test: [longest-test.js](tests/longest-test.js)

## How to add testing

- Create the package.json file:
```
touch package.json

echo {} > package.json
```

- Install mocha:
```
npm install mocha --save-dev
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
npm run test
```