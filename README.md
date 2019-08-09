# arkvatar-ts

API Wrapper to interact with Arkvatar.

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [GOT](https://github.com/sindresorhus/got)

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
(async () => {
    const arkvatar = require('arkvatar-ts');

    const response = await arkvatar.verify("validCryptoAddress");
    console.log(response);
})();
```

### Creating a new Arkvatar

```typescript
(async () => {
    const arkvatar = require('arkvatar-ts');

    // Crypto Type are the full name of a cryptocurrency, Ethereum or Ark for example.
    const response = await arkvatar.store("validCryptoAddress", "validCryptoType");
    console.log(response);
})();
```

## Authors

- Jolan Beer - Highjhacker

## License

arkvatar-ts is under MIT license. See the [LICENSE file](https://github.com/thegoldenhorde/arkvatar-ts/blob/master/LICENSE) for more informations.
