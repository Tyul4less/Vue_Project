/* eslint-disable import/prefer-default-export */

import { logiApi } from '../index'

function searchContract(date) {
  const {
    startDate, endDate, customerCode, searchCondition,
  } = date
  console.log(customerCode)
  return logiApi.get('/sales/searchContract', {
    params: {
      customerCode,
      startDate,
      endDate,
      searchCondition,
    },
  })
}
function searchContractDetail(contractNo) {
  console.log(contractNo)
  return logiApi.get('/sales/searchContractDetail', {
    params: {
      contractNo,
    },
  })
}

export { searchContract, searchContractDetail }
