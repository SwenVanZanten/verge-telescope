<template>
  <div>
    <div class="columns">
      <div class="column">
        <blocks-panel :blocks="blocks" />
      </div>
      <div class="column">
        <about-card />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <transactions-panel :blocks="blocks" />
      </div>
    </div>
  </div>
</template>

<script>
import BlocksPanel from './../components/blocksPanel'
import AboutCard from './../components/aboutCard'
import TransactionsPanel from './../components/transactionsPanel'

export default {
  name: 'Telescope',
  components: { TransactionsPanel, AboutCard, BlocksPanel },

  data() {
    return {
      blocks: []
    }
  },

  mounted() {
    this.loadBlocks()

    setInterval(this.loadBlocks, 20000)
  },

  methods: {
    async loadBlocks() {
      this.isLoading = true
      this.blocks = await this.$blockchainClient.blocks()
      this.isLoading = false
    }
  }
}
</script>
