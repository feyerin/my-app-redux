import axios from 'axios';

export default class ProductApi {
  static endpoint = 'https://potalava.ultimosolution.com/web/api/Address/GetAllProvince';

  static getList() {
    return axios.get(this.endpoint).then((res) => res.data);
  }
}
