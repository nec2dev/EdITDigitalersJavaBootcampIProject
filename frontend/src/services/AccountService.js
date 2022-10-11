import axios from 'axios'

const ACCOUNT_REST_API_URL = "http://localhost:8080/api/accounts"
class AccountService {
    getAccounts() {
        return axios.get(ACCOUNT_REST_API_URL);
    }
}
export default new AccountService();