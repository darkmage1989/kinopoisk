import { Url } from "url";

export interface data {
    id: string;
  name: string;
  year: string;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: string;
  genres: Array<string>;
  countries: Array<string>
}
