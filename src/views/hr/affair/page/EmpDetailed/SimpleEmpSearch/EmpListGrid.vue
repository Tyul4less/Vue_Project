<template>
  <div>
    <b-card title="HOW 직원정보 관리 ❓">
      <b-card-text>직원 데이터를 누르면 하단에 상세정보를 볼 수 있다.</b-card-text>
      <b-card-text>더블클릭시 수정을 할 수 있게 할거임 권한 그런거 일단 제껴두고 자세한건
        <b-link
            href="https://www.google.com/"
            target="_blank"
        >
          구글
        </b-link>
        에 문의하세요
      </b-card-text>
    </b-card>
    이름 검색 : <input type="text" v-model="searchTerm"/>
    <div>
      <vue-good-table
          :columns="columns"
          :rows="rows"
          :search-options="{enabled: true,externalQuery: searchTerm}"
          theme="nocturnal">
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import {BCard, BCardText, BLink} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
  },
  // and in data
  data() {
    return {
      searchTerm: '',
      // rows, columns etc...
      columns: [
        {
          label: '이름',
          field: 'name',
        },
        {
          label: '나이',
          field: 'age',
          type: 'number',
        },
        {
          label: '고용일',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: '부서',
          field: 'score',
          type: 'percentage',
        },
        {
          label: '직급',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        {id: 1, name: "John", age: 20, createdAt: '', score: 0.03343},
        {id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343},
        {id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343},
        {id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343},
        {id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343},
        {id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343},
      ],
    };
  }
}
</script>

<style>

</style>
