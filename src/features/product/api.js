import axios from 'axios';

export default class ProductApi {
  static endpoint = 'https://run.mocky.io/v3/f0186d5e-314a-4e0a-9494-b3234e2abcef';

  static getList() {
    return axios.get(this.endpoint).then((res) => res.data);
  }
}
