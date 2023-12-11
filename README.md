# rfc-pricing

## Overview
`rfc-pricing` is a Node.js application designed to calculate new deposit prices for creating collections within the asset hub system parachain. It uses the Polkadot API to interact with the blockchain and calculate the required deposits based on various parameters.

## Features
- Calculation of deposit required for a new collection.
- Support for different types of deposits including collection, token, collection metadata, token metadata, and collection config.
- Utilizes the Polkadot API for blockchain interactions.

## Prerequisites
- Node.js
- pnpm (Node Package Manager)

## Installation

Clone the repository:

```bash
git clone https://github.com/vikiival/rfc-pricing.git
cd rfc-pricing
```

Install the dependencies:

```bash
pnpm install
```

## Testing

Run the tests using:

```bash
pnpm test
```

## Usage

The application provides various functions to calculate the deposit for different purposes:

1. **calculateCollectionDeposit**: Calculates the deposit required for a new collection.
2. **calculateTokenDeposit**: Calculates the deposit required for a new token.
3. **calculateCollectionMetadataDeposit**: Calculates the deposit for collection metadata.
4. **calculateTokenMetadataDeposit**: Calculates the deposit for token metadata.
5. **calculateAttributeDeposit**: Calculates the deposit for an attribute (currently not implemented).
6. **calculateCollectionConfig**: Calculates the deposit for collection configuration.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://opensource.org/licenses/ISC)

## Author
Viki Val
