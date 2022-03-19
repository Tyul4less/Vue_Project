import { accountApi } from '../index'

// 코드조회
function fetchAccountCode(searchCode) {
  console.log(searchCode)
  const { accountCode, accountName } = searchCode
  return accountApi.get('/account/getAccount',
    {
      params: {
        accountCode,
        accountName,
      },
    })
}
// 고객사조회
function fetchAccountCustomerCode() {
  return accountApi.get('/base/customers')
}

// 분개상세코드 조회
function fetchAccountControllCode() {
  return accountApi.get('/base/accountControllerCodes')
}

export { fetchAccountCode, fetchAccountCustomerCode, fetchAccountControllCode }
