<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <b-icon icon="weather-night" class="has-text-primary" />
        <h2 class="has-text-weight-semibold has-text-primary">
          Verge Telescope
        </h2>
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">
          Explorer
        </nuxt-link>

        <a class="navbar-item">
          Movement
        </a>

        <a class="navbar-item">
          Network
        </a>

        <a class="navbar-item">
          Top 100
        </a>

        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              <b-icon icon="github-circle" size="is-small" />
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
