import { ResultModel } from '../../models/result-model';

export interface UserLoginResponseModel extends ResultModel {
  access_token: string;
}
