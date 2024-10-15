// Rest or GRPC client

export interface ASPClient {
  getInfo(): Info;
  listVtxos(): Vtxo[];
}

type Info = {
  pubkey: string;
  roundLifetime: bigint;
  unilateralExitDelay: bigint;
  roundInterval: bigint;
  network: string;
  dust: bigint;
  boardingDescriptorTemplate: string;
  forfeitAddress: string;
};

type Outpoint = {
  txid: string;
  vout: number;
};

type Vtxo = {
  outpoint: Outpoint;
  descriptor: string;
  amount: bigint;
  roundTxid: string;
  expiresAt: Date | null;
  redeemTx: string;
  pending: boolean;
  spentBy: string;
};

