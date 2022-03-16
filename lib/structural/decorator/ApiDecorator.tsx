import { Api } from "./Api";

export abstract class ApiDecorator extends Api {
  _api: Api;
  
  constructor(api: Api) {
    super();
    this._api = api;
  }
}
