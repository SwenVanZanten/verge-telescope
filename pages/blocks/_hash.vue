<template>
  <div>Block</div>
</template>

<script>
export default {
  name: 'Hash',

  data() {
    return {
      search: '',
      isLoading: false,
      hash: null,
      block: null,
      transactions: []
    }
  },

  mounted() {
    this.hash = this.$route.params.hash

    this.fetchTransactions()
  },
  methods: {
    async fetchTransactions() {
      this.block = await this.$blockchainClient.blockByHash(this.hash)

      this.transactions = await this.$blockchainClient.transactionsByBlock(
        this.block
      )
    }
  }
}
</script>
