<template>
  <div>
    <template>

      <div>
        <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
          <p>- 직원정보를 불러오는데 실패했습니다.</p>
          <p>-- 직원목록에서 직원을 선택하세요 . {{ dismissCountDown }} 초 </p>
        </b-alert>
      </div>
    </template>

    <b-card v-if="isEmployeeData">
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
                :src="require(`@/assets/images/avatars/${empDetail[0].empCode}.png`)"
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
                  이름 : {{ empBasic[0].empName }}
                </h4>
                <br/>
                <span class="card-text">이메일 : {{ empDetail[0].email }}</span>
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
                  {{ salary }}&#x20a9
                </h5>
                <small @click="abc">월 급여</small>
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
                  &#x20a9 {{ empDetail[0].seq }}%
                </h5>
                <small>연봉 인상률</small>
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
                <span class="font-weight-bold">UserID</span>
              </th>
              <td class="pb-50">
                {{ empDetail[0].userId }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="CheckIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">권한</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ empDetail[0].authorityCode }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="HeartIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">부서명</span>
              </th>
              <td class="pb-50">
                {{ empBasic[0].detailCodeName }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="MusicIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">생년월일</span>
              </th>
              <td class="pb-50">
                {{ empBasic[0].birthDate }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="EditIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">학력</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ empDetail[0].levelOfEducation }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="FlagIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">기본 주소</span>
              </th>
              <td class="pb-50">
                {{ empDetail[0].basicAddress }}
              </td>
            </tr>

            <tr>
              <th class="pb-50">
                <feather-icon
                    icon="ArrowRightCircleIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">상세 주소</span>
              </th>
              <td class="pb-50">
                {{ empDetail[0].detailAddress }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                    icon="PhoneIcon"
                    class="mr-75"
                />
                <span class="font-weight-bold">연락처</span>
              </th>
              <td>
                {{ empDetail[0].phoneNumber }}
              </td>
            </tr>

          </table>
        </b-col>
      </b-row>
    </b-card>

  </div>
</template>

<script>
import {BAvatar, BButton, BCard, BCol, BRow, BAlert,} from 'bootstrap-vue'
import {defineComponent} from "@vue/composition-api";
import {mapState} from "vuex";
import Vue from 'vue';

export default defineComponent({
  components: {
    BCard, BButton, BRow, BCol, BAvatar, BAlert,
  },
  computed: {
    ...mapState({
      empBasicInfo: state => state.hr.emp.allEmpList.empList,
      empDetail: state => state.hr.emp.empDetail.empDetailInfo
    }),
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      isEmployeeData: false,
      empBasic: {},
      salary: 50,
    }
  },
  methods: {

    abc() {
      const te = TypeError
      console.log(typeof te)
      console.log(te.prototype.name);
      const min = Math.ceil(0);
      const max = Math.floor(1000);
      const v = Math.floor(Math.random() * (max - min + 1)) + min;
      this.salary = v;
    },

    /** alert 메서드 입니다. **/
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted() {

    /** 값이 있으면 상세정보 컴포넌트 불러오기, 없으면 alert 메서드 실행 **/
    //Cannot read properties of undefined (reading 'filter')
    try {
      const emp = this.empBasicInfo.filter(e => e.empCode === this.$route.query.empCode);
      this.empDetail[0].empCode; // 2번째 error 어거지로 잡기
      this.empBasic = emp;
      this.empBasic[0].empName; // 3번째 error 어거지로 잡기

      if (emp === undefined)
        this.isEmployeeData = false;
      else
        this.isEmployeeData = true;

    } catch (e) {
      console.log(e + ' HOO : TYPE ERROR of FILTER');
      this.showAlert();
    }


    /** 값이 안떨어질때 setTimeout 으로 비동기를 잡읍시다. **/
    const timeout = setTimeout(() => {
      const min = Math.ceil(0);
      const max = Math.floor(1000);
      const v = Math.floor(Math.random() * (max - min + 1)) + min;
      this.salary = v;
    }, 1000)

  }
})
</script>

<style>

</style>
