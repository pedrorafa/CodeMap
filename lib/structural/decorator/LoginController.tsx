import { Api } from "./Api";

export class LoginController extends Api {
  request(): string {
    return "Login";
  }
}
