import { ASPClient } from "./client/client";
export type InitArgs = {
  walletType: string;
  clientType: string;
  aspUrl: string;
  password: string;
};

export type Balance = {
  onchainBalance: {
    spendable: bigint;
    locked: bigint;
  };
  offchainBalance: bigint;
};

export type Receiver = {
  to: string;
  amount: bigint;
};

export interface Network {
  name: string;
  addr: string;
}

export interface StoreData {
  aspUrl: string;
  aspPubkey: string; 
  walletType: string;
  clientType: string;
  network: Network;
  roundLifetime: number;
  roundInterval: number;
  unilateralExitDelay: number;
  dust: number;
  boardingDescriptorTemplate: string;
  explorerURL: string;
  forfeitAddress: string;
}

export interface ArkClient {
  init(args: InitArgs): Promise<void>;
  unlock(password: string): Promise<void>;
  lock(password: string): Promise<void>;
  balance(computeExpiration: boolean): Promise<Balance>;
  receive(): Promise<[string, string]>;
  send(computeExpiration: boolean, receivers: Receiver[]): Promise<string>;
  claim(): Promise<string>;
}
