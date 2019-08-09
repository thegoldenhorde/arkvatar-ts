# arkvatar-ts

API Wrapper to interact with Arkvatar.

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [GOT](https://github.com/sindresorhus/got)

## Installation

```bash
yarn install arkvatar-ts
```

## Usage

### Showing an existing Arkvatar

```typescript
(async () => {
    const response = await Arkvatar.show("validCryptoAddress");
    console.log(response);
})();
```

### Verifying an identifier

```typescript
(async () => {
    const response = await Arkvatar.verify("validCryptoAddress");
    console.log(response);
})();
```

### Creating a new Arkvatar

```typescript
(async () => {
    // Crypto Type are the full name of a cryptocurrency, Ethereum or Ark for example.
    const response = await Arkvatar.store("validCryptoAddress", "validCryptoType");
    console.log(response);
})();
```

## Authors

- Jolan Beer - Highjhacker

## License

arkvatar-ts is under MIT license. See the [LICENSE file](https://github.com/thegoldenhorde/arkvatar-ts/blob/master/LICENSE) for more informations.
