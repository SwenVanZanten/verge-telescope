<template>
  <section class="hero is-primary is-grediented">
    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle">
          Look for blocks, transactions or addresses on the public explorer with
          <strong>Verge Telescope</strong>.
        </h2>
        <p>
          <b-field>
            <b-input
              v-model="search"
              placeholder="You may enter a block height, block hash, tx hash or address"
              type="search"
              icon="magnify"
              @keyup.enter.native="
                $emit('search', search)
                search = ''
              "
            />
          </b-field>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchSection',

  data() {
    return {
      search: ''
    }
  }
}
</script>

<style>
.is-grediented {
  background: linear-gradient(to right, #9d00ff 0%, #24d199 100%);
}
</style>
