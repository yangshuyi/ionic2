import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MovieSubject} from "../models/movie-subject";

@Injectable()
export class Movie {
  DOUBAN_MOVIE_SITE:string = 'https://api.douban.com/v2/movie';


  constructor(public http:Http) {
  }

  loadById(subjectId:string):Observable<MovieSubject> {
    return this.http.get('${this.DOUBAN_MOVIE_SITE}//subject/${subjectId}')
      .map(res => <MovieSubject>res.json());
  }

}
