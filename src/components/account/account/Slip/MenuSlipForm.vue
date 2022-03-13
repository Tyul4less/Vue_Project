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
      >
        전표저장
      </b-button>
    </b-button-group>
    <b-dropdown
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      class="mx-1"
      right
      text="menu"
      variant="primary"
    >
      <b-dropdown-item>전표</b-dropdown-item>
      <b-dropdown-item>분개</b-dropdown-item>
      <b-dropdown-item>분개상세</b-dropdown-item>
    </b-dropdown>
    <b-button-group>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        승인
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
      >
        취소
      </b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script>
import {
  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButtonToolbar,
    BButtonGroup,
    BButton,
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
  methods: {
    addSlim() {
      this.$router.push('/acc/account/addSlipForm')
    },

  },
}
</script>
<style scoped>
.ss{
    float: right;
}
</style>
