import { describe, test as it, expect } from 'vitest'
import * as x from '../index'

describe('deposit', () => {
  it('should calculate collection deposit', async () => {
    const result = await x.calculateCollectionDeposit()
    console.log("Collection deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(10)
  })
  it('should calculate token deposit', async () => {
    const result = await x.calculateTokenDeposit()
    console.log("Token deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(0.01)
  })
  it('should calculate collection metadata deposit', async () => {
    const result = await x.calculateCollectionMetadataDeposit()
    console.log("Metadata deposit: ")
    console.log(result)
    expect.soft(result.human).toBeLessThan(0.20129)
  })
})