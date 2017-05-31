import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MovieSubject} from "../models/movie-subject";
import {Http} from "@angular/http";

@Injectable()
export class Movie {
  DOUBAN_MOVIE_SITE:string = 'https://api.douban.com/v2/movie';


  constructor(public http:Http) {
  }

  loadById(subjectId:string):Observable<MovieSubject> {
    // let header = new Headers();
    // header.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.http.post(URL, pramas, header)
    return this.http.get(`${this.DOUBAN_MOVIE_SITE}/subject/${subjectId}`)
      .map(res => <MovieSubject>res.json());
  }

}
