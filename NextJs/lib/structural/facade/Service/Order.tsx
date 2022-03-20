import { Client } from "../Client";
import { Product } from "../Product";

export class Order {
  private _client: Client;
  private _products: Product[];

  constructor(client: Client) {
    this._client = client;
    this._products = [];
  }

  public get value() {
    return this.products.reduce((p, c) => {
      return p + c.value;
    }, 0);
  }

  public get client() {
    return this._client;
  }
  public get products() {
    return this._products;
  }

  public addProduct(product: Product) {
    this._products.push(product);
  }
}
