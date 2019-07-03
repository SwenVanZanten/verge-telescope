<template>
  <nav class="panel">
    <p class="panel-heading">
      Latest Transactions
    </p>
    <div class="panel-block is-paddingless is-block">
      <b-table
        :data="transactions"
        :loading="isLoading"
        striped
        hoverable
        :paginated="false"
        per-page="5"
        class="is-size-7"
      >
        <template slot-scope="props">
          <b-table-column field="txid" label="TXID" class="is-family-code">
            <b-tag type="is-grey">
              <span class=" has-text-weight-bold">
                {{ props.row.txid }}
              </span>
            </b-tag>
          </b-table-column>

          <b-table-column
            field="value"
            label="Value"
            numeric
            class="is-size-6 has-text-weight-bold has-text-primary"
          >
            {{ (props.row.value / 1000000).toFixed(6) }} XVG
          </b-table-column>
        </template>
      </b-table>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TransactionsPanel',

  props: {
    blocks: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isLoading: false,
      transactions: []
    }
  },

  watch: {
    blocks() {
      this.loadTransactions()
    }
  },

  methods: {
    async loadTransactions() {
      this.isLoading = true
      this.transactions = []
      await this.blocks.forEach(async block => {
        const transactions = await this.$blockchainClient.transactionsByBlock(
          block
        )

        this.transactions.push(...transactions)
      })

      this.isLoading = false
    }
  }
}
</script>
