<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Verge Telescope
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="title has-text-primary">
          <b-icon icon="book" />
          About
        </p>
        <p>
          This explorer enables you to search blocks on the
          <strong>Verge Currency</strong> blockchain. Look for blocks,
          transactions and addresses easily.
        </p>
        <p class="title has-text-primary">
          <b-icon icon="calendar" />
          Today
        </p>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Transactions</p>
              <p class="title">5,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Blocks</p>
              <p class="title">2,800</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Value</p>
              <p class="title">456K</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard'
}
</script>
