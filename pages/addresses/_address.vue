<template>
  <div>
    <nav class="panel">
      <p class="panel-heading">Address: {{ address }}</p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <b-input
            v-model="search"
            placeholder="search"
            type="search"
            icon="magnify"
            @keyup.enter.native="
              $emit('search', search)
              search = ''
            "
          />
        </p>
      </div>
      <div class="panel-block is-paddingless is-block">
        <b-table
          class="is-fullwidth"
          :data="transactions"
          :loading="isLoading"
          striped
          hoverable
        >
          <template slot-scope="props">
            <b-table-column field="mintHeight" label="Mint Height">
              <b-tag type="is-grey">
                {{ props.row.mintHeight }}
              </b-tag>
            </b-table-column>
            <b-table-column field="mintTxid" label="Mint Txid">
              {{ props.row.mintTxid }}
            </b-table-column>
            <b-table-column field="value" label="Amount" numeric>
              {{ (props.row.value / 1000000).toFixed(6) }} XVG
            </b-table-column>
          </template>
        </b-table>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Address',
  data() {
    return {
      search: '',
      isLoading: false,
      address: null,
      transactions: []
    }
  },
  mounted() {
    this.address = this.$route.params.address

    this.fetchAddressTransactions()
  },
  methods: {
    async fetchAddressTransactions() {
      this.transactions = await this.$blockchainClient.transactionsByAddress(
        this.address
      )
    }
  }
}
</script>
