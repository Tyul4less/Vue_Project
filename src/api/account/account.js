/* eslint-disable import/prefer-default-export */

import { accountApi } from '../index'

// 전체조회 완료
function selectSlips() {
  return accountApi.get('/account/slips')
}
// 한개조회
function selectSlip(slipNo) {
  return accountApi.get(`/account/slips/${slipNo}`)
}
// 삭제
// data속성을 추가안해주면 404오류뜬다!!! 주의
// map 구조로 날라간다. slipList : [{},{}]
function deleteSlip(slipList) {
  return accountApi.delete('/account/slips', {
    data: {
      slipList,
    },
  })
}
// 추가
function registerSlip(slip) {
  console.log(`api${slip}`)
  return accountApi.post('/account/slips', slip)
}
function editSlip(slip) {
  console.log(`api${slip}`)
  return accountApi.put('/account/slips', slip)
}

export {
  selectSlips, selectSlip, deleteSlip, registerSlip, editSlip,
}
