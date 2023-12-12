// DOT constants: https://github.com/polkadot-fellows/runtimes/blob/main/relay/polkadot/constants/src/lib.rs

const DOT_UNITS = 10_000_000_000;
const DOT_DOLLARS = DOT_UNITS; // 10_000_000_000
const DOT_CENTS = DOT_DOLLARS / 100; // 100_000_000
const DOT_MILLICENTS = DOT_CENTS / 1_000; // 100_000


export function dot_deposit(items, bytes) {
  return items  * 20 * DOT_DOLLARS + (bytes) * 100 * DOT_MILLICENTS
}