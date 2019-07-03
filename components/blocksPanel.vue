<template>
  <nav class="panel">
    <p class="panel-heading">
      Latest Blocks
    </p>
    <div class="panel-block is-paddingless is-block">
      <b-table
        :data="blocks"
        :loading="isLoading"
        striped
        hoverable
        :paginated="false"
        per-page="5"
      >
        <template slot-scope="props">
          <b-table-column field="height" label="Height" width="40">
            <b-tag type="is-success">
              <span class=" has-text-weight-bold">
                {{ props.row.height }}
              </span>
            </b-tag>
          </b-table-column>

          <b-table-column field="date" label="Age">
            <span class="is-size-7 has-text-grey">
              {{ displayTimeDifferent(props.row.timeNormalized) }}
            </span>
          </b-table-column>

          <b-table-column field="transactionCount" label="Transactions" numeric>
            {{ props.row.transactionCount }}
          </b-table-column>

          <b-table-column field="size" label="Size" numeric>
            {{ props.row.size }}
          </b-table-column>
        </template>
      </b-table>
    </div>
    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth">
        See all blocks
      </button>
    </div>
  </nav>
</template>

<script>
import Moment from 'moment'

export default {
  name: 'BlocksPanel',

  props: {
    blocks: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    displayTimeDifferent(date) {
      const moment = new Moment(date)
      return moment.fromNow()
    },

    displayLocalizedDate(date) {
      const moment = new Moment(date)
      return moment.format('lll')
    }
  }
}
</script>
