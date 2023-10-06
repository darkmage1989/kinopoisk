export interface data {
    id: number;
  name: string;
  year: string;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  genres: Array<string>;
  countries: Array<string>
}
export interface person {
  name:string;
  description: string;
  photo: string;
  id: number
}
export interface movie {
  name: string;
  fees:fees;
  rating: rating
  shortDescription: string
  backdrop:backdrop
  description: string
  persons: Array<person>
}
export interface backdrop {
  url: string
}
export interface rating {
  kp: number
}
export interface fees {
  world: world
}
export interface world {
value: string
}