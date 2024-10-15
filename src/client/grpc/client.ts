import { GRPCService } from "./service";
export class GRPCClient {
  private service: GRPCService;
  private ASPUrl: string;

  constructor(
    ASPUrl : string
  ) {
    if (!ASPUrl) {
      throw new Error("ASP URL is required");
    }
  }
}
