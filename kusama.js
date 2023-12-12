// KSM constants: https://github.com/polkadot-fellows/runtimes/blob/main/relay/kusama/constants/src/lib.rs

const KSM_UNITS = 1_000_000_000_000;
const KSM_DOLLARS = KSM_UNITS / 30; // 1_000_000_000_000
const KSM_CENTS = KSM_DOLLARS / 100; // 10_000_000_000
const KSM_MILLICENTS = KSM_CENTS / 1_000; // 10_000_000

export function ksm_deposit(items, bytes) {
    return items  * 2_000 * KSM_CENTS + (bytes) * 100 * KSM_MILLICENTS
}