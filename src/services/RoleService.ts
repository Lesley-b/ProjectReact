import { AxiosResponse } from "axios";
import Api from "./Api";
import { IRole } from "../shared/models/IRole.model";
import { ROLE_ENDPOINT } from "./urls";

export default class RoleService {

  api = new Api().init();

  getAllowed(): Promise<AxiosResponse<Array<IRole>>>{
    return this.api.get<Array<IRole>>(`${ROLE_ENDPOINT}/allowed`)
  }
}