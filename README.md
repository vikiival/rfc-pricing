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

## Results

Below are the sample results retrieved from the application calculating based on the deposit function written in a tabular form. The table includes the length, byte length, and the calculated prices in both DOT and KSM currencies.

| Description           | Length | Byte Length | DOT Price | KSM Price |
|-----------------------|--------|-------------|-----------|-----------|
| Collection Deposit    | 64     | 130         | 0.20064   | 0.006688  |
| Token Deposit         | 81     | 164         | 0.20081   | 0.0066937 |
| Metadata Deposit      | 76     | 154         | 0.20076   | 0.006692  |

Note: There might be issues in the current code implementation.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://opensource.org/licenses/ISC)

## Author
Viki Val