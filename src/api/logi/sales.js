/* eslint-disable import/prefer-default-export */

import { logiApi } from '../index'

// 조회
function searchEstimateInfo(payload) {
  const {
    startDate,
    endDate,
    dateSearchCondition,
  } = payload
  return logiApi.get('/sales/searchEstimates', {
    params : {
      startDate,
      endDate,
      dateSearchCondition,
    },
  })
}
// 삭제
// data속성을 추가안해주면 404오류뜬다!!! 주의
// map 구조로 날라간다. slipList : [{},{}]
function deleteSlip(slipList) {
  return logiApi.delete('/account/slips', {
    data: {
      slipList,
    },
  })
}

export { searchEstimateInfo, deleteSlip }
