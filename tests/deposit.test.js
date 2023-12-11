import { describe, it } from 'vitest'
import * as x from '../index'

describe('deposit', () => {
  it('should calculate collection deposit', async () => {
    const result = await x.calculateCollectionDeposit()
    console.log(result)
  })
  it('should calculate token deposit', async () => {
    const result = await x.calculateTokenDeposit()
    console.log(result)
  })
  it('should calculate collection metadata deposit', async () => {
    const result = await x.calculateCollectionMetadataDeposit()
    console.log(result)
  })
})