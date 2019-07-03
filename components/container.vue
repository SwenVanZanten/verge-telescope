<template>
  <div>
    <search-section @search="searching" />
    <div class="section">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSection from './searchSection'

export default {
  name: 'Container',
  components: { SearchSection },

  methods: {
    async searching(search) {
      const result = await this.$searchTokenResolver.resolve(search)

      if (result === null) {
        return
      }

      switch (search) {
        case result.height.toString():
        case result.hash:
          this.$router.push({
            path: `/blocks/${result.hash}`
          })
          break
        case result.txid:
          this.$router.push({
            path: `/transactions/${result.txid}`
          })
          break
        case result[0].address:
          this.$router.push({
            path: `/addresses/${result[0].address}`
          })
          break
        default:
          throw new Error('Type not found!')
      }
    }
  }
}
</script>
