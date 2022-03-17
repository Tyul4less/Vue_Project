<template>
  <b-card>

    <b-row>

      <!-- User Info: Left col -->
      <b-col
          cols="21"
          xl="6"
          class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
              :src="require('@/assets/images/avatars/6-small.png')"
              size="104px"
              rounded
          />
<!--          <b-avatar
              :src="require('@/assets/images/avatars/6-small.png')"
              :text="avatarText('Merline Penhalewick')"
              :variant="`light-${resolveUserRoleVariant(userData.role)}`"
              size="104px"
              rounded
          />-->
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ '이름' }}
              </h4>
              <span class="card-text">{{ '이메일' }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                  :to="{ name: 'apps-users-edit', params: { id: 'userData.id' } }"
                  variant="primary"
              >
                Edit
              </b-button>
              <b-button
                  variant="outline-danger"
                  class="ml-1"
              >
                Delete
              </b-button>
              <button @click="abc"> 값조회 </button>
            </div>
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
                variant="light-primary"
                rounded
            >
              <feather-icon
                  icon="DollarSignIcon"
                  size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k
              </h5>
              <small>Monthly Sales</small>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
                variant="light-success"
                rounded
            >
              <feather-icon
                  icon="TrendingUpIcon"
                  size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                $99.87k
              </h5>
              <small>Annual Profit</small>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
          cols="12"
          xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                  icon="UserIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Username</span>
            </th>
            <td class="pb-50">
              {{ 'userData.username' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                  icon="CheckIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ 'userData.status' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                  icon="StarIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Role</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ 'userData.role' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                  icon="FlagIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              {{ 'userData.country' }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                  icon="PhoneIcon"
                  class="mr-75"
              />
              <span class="font-weight-bold">Contact</span>
            </th>
            <td>
              {{ 'userData.contact' }}
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts">
import
{
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import {state} from '@/store/hr/affair/state.js';
import AFFAIR from '@/store/hr/affair/action.js';
//import { avatarText } from "@core/utils/filter.js";

// typeScript 적용
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  components: {
    BCard, BButton, BRow, BCol, BAvatar,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      resolveUserRoleVariant,
    }
  },
  data(){
    return {
      userData:[
          {
            id: 10,
            // eslint-disable-next-line global-require
            avatar: require('@/assets/images/avatars/6-small.png'),
            full_name: 'Merline Penhalewick',
            post: 'Junior Executive',
            email: 'mpenhalewick9@php.net',
            city: 'Kanuma',
            start_date: '04/19/2019',
            salary: '$15939.52',
            age: '23',
            experience: '3 Years',
            status: 2,
          }],
    }
  },
  methods : {
    abc(){
      console.log(state.allEmpList);
    }
  }
})
</script>

<style>

</style>
