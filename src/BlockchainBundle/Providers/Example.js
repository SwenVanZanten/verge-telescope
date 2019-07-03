class Example {
  constructor(data) {
    this.data = data
  }

  blockByHash(hash) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        const block = this.data.blocks.filter(block => {
          return block.hash === hash || block.height.toString() === hash
        })[0]

        if (block) {
          resolve(block)
        } else {
          reject(new Error('Nope'))
        }
      }, 200)
    })
  }

  blocks(limit) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        const blocks = this.data.blocks || []

        resolve(blocks)
      }, 200)
    })
  }

  transactionByTxid(txid) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        const transaction = this.data.transactions.filter(
          transaction => transaction.txid === txid
        )[0]

        if (transaction) {
          resolve(transaction)
        } else {
          reject(new Error('Nope'))
        }
      }, 200)
    })
  }

  transactionsByBlock(block) {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve(
          this.data.transactions.filter(
            transaction => transaction.blockHash === block.hash
          )
        )
      }, 200)
    })
  }

  transactionsByAddress(address) {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve(this.data.addresses.filter(addr => addr.address === address))
      }, 200)
    })
  }
}

export default Example
