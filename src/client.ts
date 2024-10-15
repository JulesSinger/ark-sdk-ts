import { ConfigStore } from "./store/store";
import { InitArgs, Receiver, ArkClient } from "./types";
export class CovenantlessArkClient implements ArkClient {
  private store: ConfigStore;
  // private wallet: WalletService;
  // private client: ASPClient;
  // private explorer: Explorer;

  constructor(store: ConfigStore) {
    this.store = store;
  }

  async init(args: InitArgs): Promise<void> {
    const data = await this.store.getData();
    if (!data) {
      throw new Error("No data found");
    }
  }

  async unlock(password: string): Promise<void> {
    // TODO
  }

  async lock(password: string): Promise<void> {
    // TODO
  }

  balance(computeExpiration: boolean): any {
    // TODO
  }

  receive(): any {
    // TODO
  }

  send(computeExpiration: boolean, receivers: Receiver[]):any  {
    // TODO
  }

  claim(): any {
    // TODO
  }
}
