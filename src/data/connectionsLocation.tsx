import { apiLocations } from "./configs";
import { ILocation, ILocations } from "./dataTypes";

//Return list Locations
export async function getLocations(): Promise<ILocations> {
  const { data } = await apiLocations.get("/location");
  return data;
}

//Return location
export async function getLocation(id: number): Promise<ILocation> {
  return await apiLocations.get(`"/location/${id}"`);
}

//Return Next and Prev pages
export async function toggleLocations(page: number): Promise<ILocations> {
  return await apiLocations.get(`/location?page=${page}`);
}