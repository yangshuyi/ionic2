import {MovieImage} from "./movie-image";
export interface MovieSubject {
  id: number;
  title:string;
  year:string;

  genres: string[];

  images:MovieImage;

  rating: any;

  ratings_count:number;
  reviews_count:number;

  wish_count:number;

  casts:any;


//
// summary:string;

  // images:
}
