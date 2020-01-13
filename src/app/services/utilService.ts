import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UtilService {
  public clearUrl(url: string) {
    return url.split("//")[0].replace("(", "");
  }
}
