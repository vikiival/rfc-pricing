import { describe, test as it, expect } from 'vitest'
import * as x from '../index'

const CHAIN = 'kusama'

describe(`${CHAIN} deposit`, () => {
  
  it('should calculate collection deposit', async () => {
    const result = await x.calculateCollectionDeposit(CHAIN)
    console.log("Collection deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(0.1)
  })
  it('should calculate token deposit', async () => {
    const result = await x.calculateTokenDeposit(CHAIN)
    console.log("Token deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(0.001)
  })
  it('should calculate collection metadata deposit', async () => {
    const result = await x.calculateCollectionMetadataDeposit(CHAIN)
    console.log("Metadata deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(0.006709666617)
  })
})