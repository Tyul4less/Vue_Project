<template>

  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="addSlim"
      >
        전표추가
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="$emit('deleteItem')"
      >
        전표삭제
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="$emit('editItem')"
      >
        전표수정
      </b-button>
    </b-button-group>

  </b-button-toolbar>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,

  },
  directives: {
    Ripple,
  },

  methods: {
    addSlim() {
      this.$router.push({ name: 'addSlipForm' })
    },

  },
}
</script>
<style scoped>
.ss{
    float: right;
}
</style>
