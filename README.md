# arkvatar-ts

![alt-text](https://img.shields.io/npm/v/arkvatar-ts?style=for-the-badge)
![alt-text](https://img.shields.io/github/last-commit/thegoldenhorde/arkvatar-ts?style=for-the-badge)
![alt-text](https://img.shields.io/npm/dw/arkvatar-ts?style=for-the-badge)
![alt-text](https://img.shields.io/npm/l/arkvatar-ts?style=for-the-badge)

API Wrapper to interact with Arkvatar.

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)

## Installation

```bash
yarn add arkvatar-ts
```

## Usage

### Showing an existing Arkvatar

```typescript
const arkvatar = require('arkvatar-ts');

(async () => {
    const response = await arkvatar.show("validCryptoAddress");
    console.log(response);
})();
```

### Verifying an identifier

```typescript
const arkvatar = require('arkvatar-ts');

(async () => {
    const response = await arkvatar.verify("validCryptoAddress");
    console.log(response);
})();
```

### Creating a new Arkvatar

```typescript
const arkvatar = require('arkvatar-ts');

(async () => {
    // Crypto Type are the full name of a cryptocurrency, Ethereum or Ark for example.
    const response = await arkvatar.store("validCryptoAddress", "validCryptoType");
    console.log(response);
})();
```

## Authors

- Jolan Beer - Highjhacker

## License

arkvatar-ts is under MIT license. See the [LICENSE file](https://github.com/thegoldenhorde/arkvatar-ts/blob/master/LICENSE) for more informations.
