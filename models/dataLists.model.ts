export enum DataListsEndpoints {
  INDUSTRIES = '/general/industries',
  SUB_INDUSTRIES = '/general/sub-industries',
}

export enum DataLists {
  INDUSTRIES = 'INDUSTRIES',
  SUB_INDUSTRIES = 'SUB_INDUSTRIES',
}

export interface IBaseDataListItem {
  id: string;
  name: string;
}

export type IIndustry = IBaseDataListItem;
export type ISubIndustry = IBaseDataListItem;

export interface IDataListsResponse<T> {
  data: T[];
}

export interface IDataListsMeta {
  listType: DataLists;
}
