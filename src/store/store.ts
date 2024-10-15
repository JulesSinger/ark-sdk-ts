import { StoreData } from "../types";


export interface ConfigStore {
  getType(): string;
  getDatadir(): string;
  addData(data: StoreData): Promise<void>;
  getData(): Promise<StoreData | null>;
  cleanData(): Promise<void>;
}