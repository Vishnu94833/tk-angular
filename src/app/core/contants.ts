import { environment } from 'src/environments/environment';

const URl = environment.baseUrl;
export class Constants {
  static readonly HOUSES = `${URl}/houses`;
  static readonly URI_ADDR = 'https://chat94-backend.herokuapp.com/ipaddr';

}
