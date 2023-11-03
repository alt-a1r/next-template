import { httpClient, ApiResponse } from '@/utils';
import {
  DataListsEndpoints,
  IDataListsResponse,
  IIndustry,
  ISubIndustry,
} from '@/models/dataLists.model';

class DataListsAPI {
  static fetchIndustries(): ApiResponse<IDataListsResponse<IIndustry>> {
    return httpClient.get<IDataListsResponse<IIndustry>>(
      DataListsEndpoints.INDUSTRIES,
    );
  }

  static fetchSubIndustries(): ApiResponse<IDataListsResponse<ISubIndustry>> {
    return httpClient.get<IDataListsResponse<ISubIndustry>>(
      DataListsEndpoints.SUB_INDUSTRIES,
    );
  }
}

export default DataListsAPI;
