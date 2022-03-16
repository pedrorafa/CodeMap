import { ApiDecorator } from "./ApiDecorator";

export class ApiAuthDecorator extends ApiDecorator {
  request(): string {
    return this._api.request() + " - request authenticated";
  }
}
