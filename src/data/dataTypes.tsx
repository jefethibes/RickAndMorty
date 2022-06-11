//type info
export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

//type locations
export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

//type list locations
export interface ILocations {
  info: IInfo;
  results: ILocation[];
}
