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
// 한개조회

export { fetchAccountCode }
