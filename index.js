import { ApiPromise, HttpProvider, Keyring } from '@polkadot/api'
import { deposit as polkadotDeposit } from './polkadot';
import { deposit as kusamaDeposit } from './kusama';

const BASE_URL='https://polkadot-asset-hub-rpc.polkadot.io/'

export const magicApi = () => {
  const provider = new HttpProvider(BASE_URL);
  return ApiPromise.create({ provider });
};

// options = {
//   chain,
//   price
// }

const uwrap = (type, options) => {
  const hex = type.toHex();
  const len = type.encodedLength;
  const chain = options?.chain || 'dot';
  const human = chain === 'dot' ? 1e10 : 1e12;
  const deposit = chain === 'dot' ? polkadotDeposit : kusamaDeposit;
  const dep = deposit(1, len) / 100

  return {
    len,
    hex,
    chain,
    byteLength: hex.length,
    deposit: dep,
    human: dep / human,
  }
}


export async function calculateCollectionDeposit(chain = 'dot') {
  const api = await magicApi();
  // pub struct CollectionDetails<AccountId, DepositBalance> {
  //   /// Collection's owner.
  //   pub(super) owner: AccountId,
  //   /// The total balance deposited by the owner for all the storage data associated with this
  //   /// collection. Used by `destroy`.
  //   pub(super) owner_deposit: DepositBalance,
  //   /// The total number of outstanding items of this collection.
  //   pub(super) items: u32,
  //   /// The total number of outstanding item metadata of this collection.
  //   pub(super) item_metadatas: u32,
  //   /// The total number of outstanding item configs of this collection.
  //   pub(super) item_configs: u32,
  //   /// The total number of attributes for this collection.
  //   pub(super) attributes: u32,
  // }
  const type = api.createType('PalletNftsCollectionDetails', {
    owner: '15CoYMEnJhhWHvdEPXDuTBnZKXwrJzMQdcMwcHGsVx5kXYvW',
    ownerDeposit: 1140264000000,
    items: 512,
    itemMetadatas: 512,
    itemConfigs: 512,
    attributes: 2
  })

  return uwrap(type, { chain })

}

export async function calculateTokenDeposit(chain = 'dot') {
  const api = await magicApi();
  // pub struct ItemDetails<AccountId, Deposit, Approvals> {
  //   /// The owner of this item.
  //   pub(super) owner: AccountId,
  //   /// The approved transferrer of this item, if one is set.
  //   pub(super) approvals: Approvals,
  //   /// The amount held in the pallet's default account for this item. Free-hold items will have
  //   /// this as zero.
  //   pub(super) deposit: Deposit,
  // }

  const type = api.createType('PalletNftsItemDetails', {
    owner: '1NFfEH3yspdEgLnhZ5QWgb7B2z5LNCAE3HUo5nDxF5MqTcj',
    approvals: {},
    deposit: {
      account: '15CoYMEnJhhWHvdEPXDuTBnZKXwrJzMQdcMwcHGsVx5kXYvW',
      amount: 100000000
    }
  })

  return uwrap(type, { chain })

}

export async function calculateCollectionMetadataDeposit(chain = 'dot') {
  const api = await magicApi();

  const type = api.createType('PalletNftsCollectionMetadata', {
    deposit: 2019500000,
    data: 'bafkreia5pv3ve7dgvuyc24ylvx6ajuycz4ziku6fepc4j3fn6uzb6kvzrm'
  })

  return uwrap(type, { chain })
}

export async function calculateTokenMetadataDeposit(chain = 'dot') {
    const api = await magicApi();
  
  const type = api.createType('PalletNftsItemMetadata', {
    deposit: {
      account: null,
      amount: 2020000000
    },
    data: 'ipfs://bafkreiergyzyxi4qn22sb627e6kyc7o7zrlg5w7f6nmuffwnamuepdohvq'
  })

  return uwrap(type, { chain })
}

export function calculateAttributeDeposit(api) {
  null
}

export async function calculateCollectionConfig(chain = 'dot') {
  const api = await magicApi();
  
  const type = api.createType('PalletNftsCollectionConfig', {
    settings: 0,
    maxSupply: 512,
    mintSettings: {
      mintType: 'Issuer',
      price: null,
      startBlock: null,
      endBlock: null,
      defaultItemSettings: 0
    }
  }
  
  )

  return uwrap(type, { chain })
}