import { ApiDecorator } from "./ApiDecorator";

export class ApiLogDecorator extends ApiDecorator {
  request(): string {
    return this._api.request() + " - request logged";
  }
}
