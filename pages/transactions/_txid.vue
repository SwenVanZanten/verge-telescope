<template>
  <div>Tx</div>
</template>

<script>
export default {
  name: 'Txid',
  data() {
    return {
      search: '',
      isLoading: false,
      txid: null,
      transaction: []
    }
  },
  mounted() {
    this.txid = this.$route.params.txid

    this.fetchTransaction()
  },
  methods: {
    async fetchTransaction() {
      this.transaction = await this.$blockchainClient.transactionByTxid(
        this.txid
      )
    }
  }
}
</script>
