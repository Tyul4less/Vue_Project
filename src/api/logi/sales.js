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
  return logiApi.get('/sales/searchContractDetail', {
    params: {
      contractNo,
    },
  })
}
function searchEstimateInContractAvailable(sendDate) {
  return logiApi.get('/sales/searchEstimateInContractAvailable', {
    params: {
      ...sendDate,
    },
  })
}
function searchEstimateDetailInfo(estimateNo) {
  console.log(estimateNo)
  return logiApi.get('/sales/searchEstimateDetail', {
    params: {
      estimateNo,
    },
  })
}

export {
  searchContract, searchContractDetail, searchEstimateInContractAvailable, searchEstimateDetailInfo,
}
