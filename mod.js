// https://github.com/polkadot-fellows/runtimes/blob/main/relay/polkadot/constants/src/lib.rs

const UNITS = 10_000_000_000;
const DOLLARS = UNITS; // 10_000_000_000
const CENTS = DOLLARS / 100; // 100_000_000
const MILLICENTS = CENTS / 1_000; // 100_000


export function deposit(items, bytes) {
  return items  * 20 * DOLLARS + (bytes) * 100 * MILLICENTS
}